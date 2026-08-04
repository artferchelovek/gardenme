import type { Plant } from "@/api/plantApi.ts";
import { getBatteryIndicate } from "@/utils/battery.ts";

import styles from "./DeviceStatus.module.css";

export default function DeviceStatus({ plant }: { plant: Plant }) {
  const batteryCharge = Math.round(plant.batteryLevel ?? 0);
  const lastSeen = new Date(plant.lastSeenAt ?? "").toLocaleTimeString(
    "ru-RU",
    {
      hour: "numeric",
      minute: "numeric",
    },
  );

  return (
    <>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className="material-symbols-outlined">
            {getBatteryIndicate(plant.batteryLevel ?? 0)}
          </span>
          <p>Состояние оборудования</p>
        </div>

        <div className={styles.batteryLevel}>
          <div className={styles.top}>
            <p>Уровень заряда</p>
            <p>{batteryCharge}%</p>
          </div>
          <div className={styles.track}>
            <div
              className={styles.fill}
              style={{ width: `${batteryCharge}%` }}
            />
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.header}>
          <span className="material-symbols-outlined">android_wifi_3_bar</span>
          <p>Статус устройства</p>
        </div>

        <div className={styles.titleOfMK}>
          <span className="material-symbols-outlined">memory</span>
          <p>{plant.device?.name ?? "ESP32"}</p>
        </div>

        <div className={styles.lastView}>
          <p>Последний сигнал</p>
          <p>{lastSeen}</p>
        </div>
      </div>
    </>
  );
}
