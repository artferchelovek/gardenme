import { useEffect, useState } from "react";

import type { Plant } from "@/api/plantApi.ts";
import { plantApi } from "@/api/plantApi.ts";
import {
  disablePushNotifications,
  enableNotification,
  isPushSubscribed,
} from "@/utils/pusbSubscription.ts";

import styles from "./PlantNotification.module.css";

export default function PlantNotification({ plant }: { plant?: Plant }) {
  const [notificationLevel, setNotificationLevel] = useState<number>(
    plant?.targetMoistureLevel ?? 20,
  );
  const [notification, setNotification] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  const handleSaveThreshold = async (value: number) => {
    if (!plant?.id) return;
    try {
      await plantApi.updatePlant(plant.id, {
        minMoistureThreshold: value,
        targetMoistureLevel: value,
      });
    } catch (err) {
      console.error("Не удалось сохранить порог влажности:", err);
    }
  };

  useEffect(() => {
    const checkStatus = async () => {
      if (plant?.targetMoistureLevel !== undefined) {
        setNotificationLevel(plant.targetMoistureLevel);
      }

      if (typeof window !== "undefined" && "Notification" in window) {
        if (Notification.permission === "denied") {
          setIsBlocked(true);
          setLoading(false);
          return;
        }
      }

      try {
        const subscribed = await isPushSubscribed();
        setNotification(subscribed);
      } catch (err) {
        console.error("Ошибка при проверке подписки:", err);
      } finally {
        setLoading(false);
      }
    };

    checkStatus();
  }, [plant?.targetMoistureLevel]);

  const toggleNotification = async (checked: boolean) => {
    setLoading(true);

    try {
      if (checked) {
        await enableNotification();
        setNotification(true);
      } else {
        await disablePushNotifications();
        setNotification(false);
      }
    } catch (error) {
      console.error(error);
      if (
        typeof window !== "undefined" &&
        Notification.permission === "denied"
      ) {
        setIsBlocked(true);
      }
      setNotification(!checked);
    } finally {
      setLoading(false);
    }
  };

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
          disabled={!notification || loading}
          value={notificationLevel}
          onChange={(e) => setNotificationLevel(Number(e.target.value))}
          onMouseUp={(e) =>
            handleSaveThreshold(Number((e.target as HTMLInputElement).value))
          }
          onTouchEnd={(e) =>
            handleSaveThreshold(Number((e.target as HTMLInputElement).value))
          }
          type="range"
          min="0"
          max="100"
          step="5"
        />
      </div>
      <div className={styles.notificationToggleDiv}>
        <div className={styles.notificationToggle}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              disabled={loading || isBlocked}
              checked={notification}
              onChange={(e) => toggleNotification(e.target.checked)}
              className={styles.input}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        <p>
          {loading ? (
            <span className={styles.loadingWrapper}>
              <span className={`material-symbols-outlined ${styles.spinner}`}>
                progress_activity
              </span>
              Обновление...
            </span>
          ) : isBlocked ? (
            "Уведомления заблокированы в настройках браузера"
          ) : (
            "Включить важные оповещения"
          )}
        </p>
      </div>
    </div>
  );
}
