import type { Plant } from "../types/prisma";
import { api } from "../utils/api";
import { handleApiError } from "../utils/errorHandler";

export const plantApi = {
  allPlants: async (): Promise<Plant[]> => {
    try {
      const response = await api.get<Plant[]>("/plant");
      return response.data;
    } catch (error) {
      handleApiError(error, "Не удалось получить список растений.");
    }
  },
};
