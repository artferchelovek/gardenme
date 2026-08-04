import { useState } from "react";

import styles from "./PlantNotification.module.css";

export default function PlantNotification() {
  const [notificationLevel, setNotificationLevel] = useState<number>(20);
  const [notification, setNotification] = useState<boolean>(true);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className="material-symbols-outlined">notifications_active</span>
        <p>Настройки уведомлений</p>
      </div>
      <div className={styles.notificationInput}>
        <div className={styles.info}>
          <p>Уведомить, если влажность упадёт ниже:</p>
          <p>{notificationLevel}%</p>
        </div>
        <input
          className={styles.notificationInput}
          disabled={!notification}
          value={notificationLevel}
          onChange={(e) => setNotificationLevel(parseInt(e.target.value))}
          type="range"
          min="0"
          max="100"
          step="5"
        />
      </div>
      <div className={styles.notificationToggleDiv}>
        <div className={styles.notificationToggle}>
          <label className={`${styles.switch}`}>
            <input
              type="checkbox"
              checked={notification}
              onChange={(e) => setNotification(e.target.checked)}
              className={styles.input}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        <p>Включить важные оповещения</p>
      </div>
    </div>
  );
}
