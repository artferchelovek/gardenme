import type {
  MoistureReading,
  Plant as PrismaPlant,
  WateringLog,
} from "../types/prisma";
import { api } from "../utils/api";
import { handleApiError } from "../utils/errorHandler";

export interface EstimationResult {
  currentMoisture: number;
  minThreshold: number;
  dailyDryingRate: number;
  daysRemaining: number | null;
  status: "OPTIMAL" | "WARNING" | "NEEDS_WATER";
}

export interface PlantDeviceInfo {
  id: string;
  name: string;
  token?: string;
  lastBatteryLevel: number | null;
  lastSeenAt: string | Date | null;
}

export interface Plant extends PrismaPlant {
  currentMoisture?: number | null;
  batteryLevel?: number | null;
  lastSeenAt?: string | Date | null;
  lastWateringAt?: string | Date | null;
  estimation?: EstimationResult | null;
  device?: PlantDeviceInfo | null;
  readingsHistory?: MoistureReading[];
  wateringsHistory?: WateringLog[];
}

export const plantApi = {
  allPlants: async (): Promise<Plant[]> => {
    try {
      const response = await api.get<Plant[]>("/plants");
      return response.data;
    } catch (error) {
      handleApiError(error, "Не удалось получить список растений.");
    }
  },

  getPlantDetails: async (id: string): Promise<Plant> => {
    try {
      const response = await api.get<Plant>(`/plants/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error, "Не удалось получить информацию о растении.");
    }
  },
};
