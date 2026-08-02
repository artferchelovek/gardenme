import type { User as PrismaUser } from "../types/prisma";
import { api } from "../utils/api";
import { handleApiError } from "../utils/errorHandler";

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  name: string;
  email: string;
  password: string;
}

export type User = Omit<PrismaUser, "passwordHash">;

export interface AuthResponse {
  token: string;
  user: User;
}

export const authApi = {
  login: async (data: LoginDto): Promise<AuthResponse> => {
    try {
      const response = await api.post<AuthResponse>("/auth/login", data);
      return response.data;
    } catch (error) {
      handleApiError(error, "Ошибка входа. Проверьте данные.");
    }
  },

  register: async (data: RegisterDto): Promise<AuthResponse> => {
    try {
      const response = await api.post<AuthResponse>("/auth/register", data);
      return response.data;
    } catch (error) {
      handleApiError(error, "Ошибка при регистрации.");
    }
  },

  me: async (): Promise<User> => {
    try {
      const response = await api.get<User>("/auth/me");
      return response.data;
    } catch (error) {
      handleApiError(error, "Ошибка получения данных.");
    }
  },
};
