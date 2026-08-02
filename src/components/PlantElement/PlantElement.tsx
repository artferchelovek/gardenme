import type { Plant } from "@/api/plantApi.ts";
import CircularProgressBar from "@/components/CircularProgressBar/CircularProgressBar.tsx";
import { getBatteryIndicate } from "@/utils/battery.ts";

import styles from "./PlantElement.module.css";

interface PlantElementProps {
  plant: Plant;
}

const PLANT_STATUS: Record<string, string> = {
  OPTIMAL: "heart_check",
  WARNING: "emergency_home",
  NEEDS_WATER: "water_drop",
};

function PlantInfo(props: { name: string; battery: number; status: string }) {
  return (
    <div className={styles.plantInfo}>
      <div className={styles.plantReview}>
        <p className={styles.plantName}>{props.name}</p>
        <span className="material-symbols-outlined">{props.status}</span>
      </div>
      <div className={styles.battery}>
        <span className="material-symbols-outlined">
          {getBatteryIndicate(props.battery)}
        </span>
        <p>{props.battery}%</p>
      </div>
    </div>
  );
}

export default function PlantElement({ plant }: PlantElementProps) {
  let batteryProcent = 0;
  if (plant.batteryLevel) {
    batteryProcent = Math.round(plant.batteryLevel);
  }

  const statusText = plant.estimation?.status
    ? PLANT_STATUS[plant.estimation.status] || plant.estimation.status
    : "Нет данных";

  return (
    <div className={styles.plant} key={plant.id}>
      <div className={styles.top}>
        <PlantInfo
          name={plant.name}
          battery={batteryProcent}
          status={statusText}
        />
        <CircularProgressBar
          value={plant.currentMoisture ?? 0}
          size={64}
          strokeWidth={6}
        />
      </div>
      <div className={styles.nextWater}>
        <span className="material-symbols-outlined">alarm_on</span>
        <p>
          Следующий полив через ~
          {Math.round(plant.estimation?.daysRemaining ?? 0)} суток
        </p>
      </div>
    </div>
  );
}
