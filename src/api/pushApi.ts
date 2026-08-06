import { api } from "@/utils/api.ts";
import { handleApiError } from "@/utils/errorHandler.ts";

export const pushApi = {
  getPublicKey: async (): Promise<string | null> => {
    try {
      const response = await api.get<{ publicKey: string | null }>(
        "/push/public-key",
      );
      return response.data.publicKey;
    } catch (error) {
      handleApiError(error, "Не удалось получить публичный VAPID ключ");
    }
  },

  subscribe: async (subscription: PushSubscriptionJSON): Promise<void> => {
    try {
      await api.post("/push/subscribe", { subscription });
    } catch (error) {
      handleApiError(error, "Не удалось сохранить подписку на уведомления");
    }
  },

  unsubscribe: async (endpoint: string): Promise<void> => {
    try {
      await api.post("/push/unsubscribe", { endpoint });
    } catch (error) {
      handleApiError(error, "Не удалось отписаться от уведомлений");
    }
  },
};
