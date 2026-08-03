import type { MoistureReading } from "@prisma-types";

export interface ChartPoint {
  time: string;
  moisture: number;
}

export function get24hMoisture(
  readingHistory: MoistureReading[] = [],
): ChartPoint[] {
  const now = Date.now();
  const HOURS_MS = 24 * 60 * 60 * 1000;

  return readingHistory
    .filter((item) => {
      const itemTime = new Date(item.createdAt).getTime();
      return now - itemTime <= HOURS_MS;
    })
    .sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    )
    .map((item) => ({
      time: new Date(item.createdAt).toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      moisture: Math.round(item.moisture),
    }));
}
