import { prisma } from "../config/prisma.js";
import { estimateDaysUntilWatering } from "../utils/calculation.utils.js";
import type { EstimationResult } from "../utils/calculation.utils.js";

export interface CreatePlantDto {
  name: string;
  species?: string;
  location?: string;
  minMoistureThreshold?: number;
  targetMoistureLevel?: number;
  deviceId?: string;
}

export interface UpdatePlantDto {
  name?: string;
  species?: string;
  location?: string;
  minMoistureThreshold?: number;
  targetMoistureLevel?: number;
  deviceId?: string | null;
}

export class PlantService {
  /**
   * Create a new plant.
   */
  static async createPlant(userId: string, dto: CreatePlantDto) {
    const plant = await prisma.plant.create({
      data: {
        name: dto.name,
        species: dto.species ?? null,
        location: dto.location ?? null,
        minMoistureThreshold: dto.minMoistureThreshold ?? 30.0,
        targetMoistureLevel: dto.targetMoistureLevel ?? 70.0,
        userId,
        deviceId: dto.deviceId ?? null,
      },
      include: { device: true },
    });

    return plant;
  }

  /**
   * Get list of user's plants with current status.
   */
  static async getUserPlants(userId: string) {
    const plants = await prisma.plant.findMany({
      where: { userId },
      include: {
        device: {
          select: {
            id: true,
            name: true,
            lastBatteryLevel: true,
            lastSeenAt: true,
          },
        },
        waterings: {
          take: 1,
          orderBy: { createdAt: "desc" },
        },
        readings: {
          take: 50,
          orderBy: { createdAt: "desc" },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return plants.map((plant) => {
      const latestReading = plant.readings[0] || null;
      const lastWatering = plant.waterings[0] || null;
      const currentMoisture = latestReading ? latestReading.moisture : null;

      let estimation: EstimationResult | null = null;
      if (currentMoisture !== null) {
        estimation = estimateDaysUntilWatering(
          currentMoisture,
          plant.minMoistureThreshold,
          plant.readings,
        );
      }

      return {
        id: plant.id,
        name: plant.name,
        species: plant.species,
        location: plant.location,
        minMoistureThreshold: plant.minMoistureThreshold,
        targetMoistureLevel: plant.targetMoistureLevel,
        currentMoisture,
        batteryLevel:
          plant.device?.lastBatteryLevel ?? latestReading?.battery ?? null,
        lastSeenAt:
          plant.device?.lastSeenAt ?? latestReading?.createdAt ?? null,
        lastWateringAt: lastWatering?.createdAt || null,
        estimation,
        device: plant.device,
        createdAt: plant.createdAt,
      };
    });
  }

  /**
   * Get single plant details with chart history and watering logs.
   */
  static async getPlantDetails(userId: string, plantId: string) {
    const plant = await prisma.plant.findFirst({
      where: { id: plantId, userId },
      include: {
        device: {
          select: {
            id: true,
            name: true,
            token: true,
            lastBatteryLevel: true,
            lastSeenAt: true,
          },
        },
        waterings: {
          take: 20,
          orderBy: { createdAt: "desc" },
        },
        readings: {
          take: 200,
          orderBy: { createdAt: "desc" },
        },
      },
    });

    if (!plant) {
      throw new Error("Растение не найдено");
    }

    const latestReading = plant.readings[0] || null;
    const lastWatering = plant.waterings[0] || null;
    const currentMoisture = latestReading ? latestReading.moisture : null;

    let estimation: EstimationResult | null = null;
    if (currentMoisture !== null) {
      estimation = estimateDaysUntilWatering(
        currentMoisture,
        plant.minMoistureThreshold,
        plant.readings,
      );
    }

    return {
      id: plant.id,
      name: plant.name,
      species: plant.species,
      location: plant.location,
      minMoistureThreshold: plant.minMoistureThreshold,
      targetMoistureLevel: plant.targetMoistureLevel,
      currentMoisture,
      batteryLevel:
        plant.device?.lastBatteryLevel ?? latestReading?.battery ?? null,
      lastSeenAt: plant.device?.lastSeenAt ?? latestReading?.createdAt ?? null,
      lastWateringAt: lastWatering?.createdAt || null,
      estimation,
      device: plant.device,
      readingsHistory: plant.readings.reverse(), // ascending for chart plotting
      wateringsHistory: plant.waterings,
      createdAt: plant.createdAt,
    };
  }

  /**
   * Update plant.
   */
  static async updatePlant(
    userId: string,
    plantId: string,
    dto: UpdatePlantDto,
  ) {
    const existing = await prisma.plant.findFirst({
      where: { id: plantId, userId },
    });

    if (!existing) {
      throw new Error("Растение не найдено");
    }

    const dataToUpdate: Record<string, any> = {};
    if (dto.name !== undefined) dataToUpdate.name = dto.name;
    if (dto.species !== undefined) dataToUpdate.species = dto.species ?? null;
    if (dto.location !== undefined)
      dataToUpdate.location = dto.location ?? null;
    if (dto.minMoistureThreshold !== undefined)
      dataToUpdate.minMoistureThreshold = dto.minMoistureThreshold;
    if (dto.targetMoistureLevel !== undefined)
      dataToUpdate.targetMoistureLevel = dto.targetMoistureLevel;
    if (dto.deviceId !== undefined) dataToUpdate.deviceId = dto.deviceId;

    return prisma.plant.update({
      where: { id: plantId },
      data: dataToUpdate,
      include: { device: true },
    });
  }

  /**
   * Delete plant.
   */
  static async deletePlant(userId: string, plantId: string) {
    const existing = await prisma.plant.findFirst({
      where: { id: plantId, userId },
    });

    if (!existing) {
      throw new Error("Растение не найдено");
    }

    return prisma.plant.delete({
      where: { id: plantId },
    });
  }
}
