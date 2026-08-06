import type { MoistureReading } from "@prisma-types";

export const getBatteryIndicate = (battery: number) => {
  const procent = parseInt(battery.toFixed());
  if (procent <= 14) return "battery_android_bolt";
  if (procent <= 28) return "battery_android_2";
  if (procent <= 42) return "battery_android_3";
  if (procent <= 56) return "battery_android_4";
  if (procent <= 70) return "battery_android_5";
  if (procent <= 84) return "battery_android_6";
  if (procent <= 100) return "battery_android_frame_full";
};

export interface ChartBatteryPoint {
  time: string;
  battery: number;
}

export function get24hBattery(
  readingHistory: MoistureReading[] = [],
): ChartBatteryPoint[] {
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
      battery: Math.round(item.battery),
    }));
}
