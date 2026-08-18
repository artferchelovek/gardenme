import type { WateringLog } from "@prisma-types";

export interface WateringLogDetails {
  id: string;
  time: string;
  dateFormatted: string;
  dateRaw: Date;
  moistureBefore: number;
  moistureAfter: number;
  detected: boolean;
  note: string;
}

function pluralize(
  number: number,
  one: string,
  two: string,
  five: string,
): string {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}

export function formatTimeAgo(
  dateInput: string | Date | null | undefined,
): string {
  if (!dateInput) return "Нет данных";
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return "Нет данных";

  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  if (diffMs < 0) return "Только что";

  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHours = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSec < 60) {
    return "Только что";
  } else if (diffMin < 60) {
    return `${diffMin} ${pluralize(diffMin, "минуту", "минуты", "минут")} назад`;
  } else if (diffHours < 24) {
    return `${diffHours} ${pluralize(diffHours, "час", "часа", "часов")} назад`;
  } else if (diffDays < 30) {
    return `${diffDays} ${pluralize(diffDays, "день", "дня", "дней")} назад`;
  } else {
    return date.toLocaleDateString("ru-RU", { day: "numeric", month: "short" });
  }
}

export const getWateringList = (
  wateringHistory: WateringLog[] = [],
): WateringLogDetails[] => {
  return [...wateringHistory]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .map((item) => ({
      id: item.id,
      time: new Date(item.createdAt).toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      dateFormatted: new Date(item.createdAt).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "short",
      }),
      dateRaw: new Date(item.createdAt),
      moistureAfter: Math.round(item.moistureAfter ?? 0),
      moistureBefore: Math.round(item.moistureBefore ?? 0),
      note: item.note ?? "",
      detected: item.detectedAutomatically,
    }));
};
