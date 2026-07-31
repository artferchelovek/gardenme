import { prisma } from '../config/prisma.js';
import { PushService } from './push.service.js';

export interface IngestReadingDto {
  moisture: number; // 0 - 100%
  battery: number;  // 0 - 100%
}

export class ReadingService {
  /**
   * Process telemetry reading from ESP32.
   */
  static async ingestReading(deviceToken: string, dto: IngestReadingDto) {
    const device = await prisma.device.findUnique({
      where: { token: deviceToken },
      include: { plant: true },
    });

    if (!device) {
      throw new Error('Устройство с таким токеном не найдено');
    }

    const moisture = Math.max(0, Math.min(100, dto.moisture));
    const battery = Math.max(0, Math.min(100, dto.battery));

    // Update device stats
    await prisma.device.update({
      where: { id: device.id },
      data: {
        lastBatteryLevel: battery,
        lastSeenAt: new Date(),
      },
    });

    const plantId = device.plant?.id || null;

    // Fetch previous reading for watering detection
    let lastReading = null;
    if (plantId) {
      lastReading = await prisma.moistureReading.findFirst({
        where: { plantId },
        orderBy: { createdAt: 'desc' },
      });
    }

    // Save reading to DB
    const reading = await prisma.moistureReading.create({
      data: {
        moisture,
        battery,
        deviceId: device.id,
        plantId,
      },
    });

    // Check for automatic watering detection (+15% jump in moisture)
    if (plantId && lastReading) {
      const moistureIncrease = moisture - lastReading.moisture;
      if (moistureIncrease >= 15.0) {
        await prisma.wateringLog.create({
          data: {
            plantId,
            moistureBefore: lastReading.moisture,
            moistureAfter: moisture,
            detectedAutomatically: true,
            note: `Автоматически обнаружен полив (рост влажности на +${moistureIncrease.toFixed(1)}%)`,
          },
        });
      }
    }

    // Check if plant needs watering and notification should be sent
    if (device.plant) {
      const plant = device.plant;
      if (moisture <= plant.minMoistureThreshold) {
        await this.handleLowMoistureNotification(device.userId, plant.id, plant.name, moisture, plant.minMoistureThreshold);
      }
    }

    return {
      status: 'ok',
      readingId: reading.id,
      plantPaired: !!plantId,
      plantName: device.plant?.name || null,
      moisture,
      battery,
    };
  }

  /**
   * Helper to send push notification with cooldown to prevent spam.
   */
  private static async handleLowMoistureNotification(
    userId: string,
    plantId: string,
    plantName: string,
    currentMoisture: number,
    minThreshold: number
  ) {
    const TwelveHoursAgo = new Date(Date.now() - 12 * 60 * 60 * 1000);

    const recentNotification = await prisma.notificationLog.findFirst({
      where: {
        plantId,
        type: 'LOW_MOISTURE',
        sentAt: { gte: TwelveHoursAgo },
      },
    });

    if (!recentNotification) {
      // Send Push notification
      await PushService.sendNotificationToUser(userId, {
        title: `🌱 Пора полить ${plantName}!`,
        body: `Влажность почвы упала до ${currentMoisture.toFixed(0)}% (минимальный порог ${minThreshold.toFixed(0)}%).`,
        data: { plantId, url: `/plants/${plantId}` },
      });

      // Record notification log
      await prisma.notificationLog.create({
        data: {
          plantId,
          type: 'LOW_MOISTURE',
        },
      });
    }
  }
}
