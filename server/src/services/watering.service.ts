import { prisma } from '../config/prisma.js';

export class WateringService {
  /**
   * Manually log watering event.
   */
  static async logWatering(userId: string, plantId: string, note?: string) {
    const plant = await prisma.plant.findFirst({
      where: { id: plantId, userId },
      include: {
        readings: {
          take: 1,
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!plant) {
      throw new Error('Растение не найдено');
    }

    const latestReading = plant.readings[0] || null;

    const wateringLog = await prisma.wateringLog.create({
      data: {
        plantId,
        moistureBefore: latestReading?.moisture || null,
        moistureAfter: plant.targetMoistureLevel, // Assume target moisture after manual watering
        detectedAutomatically: false,
        note: note || 'Ручной полив',
      },
    });

    return wateringLog;
  }

  /**
   * Get watering logs history for a plant.
   */
  static async getWateringHistory(userId: string, plantId: string) {
    const plant = await prisma.plant.findFirst({
      where: { id: plantId, userId },
    });

    if (!plant) {
      throw new Error('Растение не найдено');
    }

    return prisma.wateringLog.findMany({
      where: { plantId },
      orderBy: { createdAt: 'desc' },
      take: 50,
    });
  }
}
