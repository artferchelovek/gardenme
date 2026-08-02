import crypto from "crypto";

import { prisma } from "../config/prisma.js";

export interface CreateDeviceDto {
  name: string;
  macAddress?: string;
  token?: string;
}

export class DeviceService {
  /**
   * Register a new ESP32 device for user. Uses custom token or generates a unique token.
   */
  static async createDevice(userId: string, dto: CreateDeviceDto) {
    const token =
      dto.token && dto.token.trim().length > 0
        ? dto.token.trim()
        : `esp32_${crypto.randomBytes(16).toString("hex")}`;

    const device = await prisma.device.create({
      data: {
        name: dto.name,
        macAddress: dto.macAddress ?? null,
        token,
        userId,
      },
    });

    return device;
  }

  /**
   * List all devices owned by user.
   */
  static async getUserDevices(userId: string) {
    return prisma.device.findMany({
      where: { userId },
      include: {
        plant: {
          select: {
            id: true,
            name: true,
            species: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  /**
   * Delete device.
   */
  static async deleteDevice(userId: string, deviceId: string) {
    const device = await prisma.device.findFirst({
      where: { id: deviceId, userId },
    });

    if (!device) {
      throw new Error("Устройство не найдено");
    }

    return prisma.device.delete({
      where: { id: deviceId },
    });
  }

  /**
   * Pair or unpair device with a plant.
   */
  static async pairWithPlant(
    userId: string,
    deviceId: string,
    plantId: string | null,
  ) {
    const device = await prisma.device.findFirst({
      where: { id: deviceId, userId },
    });

    if (!device) {
      throw new Error("Устройство не найдено");
    }

    if (plantId) {
      const plant = await prisma.plant.findFirst({
        where: { id: plantId, userId },
      });

      if (!plant) {
        throw new Error("Растение не найдено");
      }

      // Clear any existing plant paired with this device
      await prisma.plant.updateMany({
        where: { deviceId },
        data: { deviceId: null },
      });

      // Link plant to this device
      await prisma.plant.update({
        where: { id: plantId },
        data: { deviceId },
      });
    } else {
      // Unpair plant
      await prisma.plant.updateMany({
        where: { deviceId },
        data: { deviceId: null },
      });
    }

    return prisma.device.findUnique({
      where: { id: deviceId },
      include: { plant: true },
    });
  }
}
