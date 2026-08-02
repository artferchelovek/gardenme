import { AxiosError } from "axios";

/**
 * Достает понятный текст ошибки из AxiosError или обычного Error
 */
export function getErrorMessage(
  error: unknown,
  fallbackMessage: string = "Произошла ошибка",
): string {
  if (error instanceof AxiosError) {
    if (error.response?.data?.message) {
      return error.response.data.message;
    }
    if (error.request) {
      return "Не удалось подключиться к серверу";
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallbackMessage;
}

/**
 * Выбрасывает стандартизированную ошибку
 */
export function handleApiError(
  error: unknown,
  fallbackMessage?: string,
): never {
  throw new Error(getErrorMessage(error, fallbackMessage));
}
