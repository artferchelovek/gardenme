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
