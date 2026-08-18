import type { WateringLogDetails } from "@/utils/watering.ts";

import styles from "./LastWateredElement.module.css";

export default function DetectWater({ data }: { data: WateringLogDetails }) {
  const date = new Date(data.dateRaw).toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    minute: "2-digit",
    hour: "2-digit",
  });

  const avg = data.moistureAfter - data.moistureBefore;

  return (
    <div className={styles.detectWater} key={data.id}>
      <span className={`material-symbols-outlined ${styles.icon}`}>rainy</span>
      <div>
        <p>Обнаружен полив</p>
        <p>{date}</p>
      </div>
      <p>+{avg}%</p>
    </div>
  );
}
