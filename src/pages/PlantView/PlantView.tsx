import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { type Plant, plantApi } from "@/api/plantApi.ts";
import { PLANT_STATUS } from "@/types/plant.ts";

import styles from "./PlantView.module.css";

export default function PlantView() {
  const { id } = useParams<{ id: string }>();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [plant, setPlant] = useState<Plant | null>(null);

  console.log(error, loading, plant); // чтобы тс не ругался

  const statusText = plant?.estimation?.status
    ? PLANT_STATUS[plant.estimation.status] || plant.estimation.status
    : "Нет данных";

  useEffect(() => {
    const fetchPlant = async () => {
      try {
        if (!id) {
          setError("Не удалось получить данные");
          return;
        }
        const response = await plantApi.getPlantDetails(id);
        setPlant(response);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Произошла неизвестная ошибка");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPlant();
  }, [id]);

  return (
    <div className={styles.plant}>
      {plant && (
        <>
          <div className={styles.onMain}>
            <span className="material-symbols-outlined">arrow_back</span>
            <p>На главную</p>
          </div>
          <div className={styles.currentMoisture}>
            <p className={styles.title}>ТЕКУЩАЯ ВЛАЖНОСТЬ ПОЧВЫ</p>

            <div className={styles.moistureElement}>
              <p className={styles.moisture}>
                {plant.estimation?.currentMoisture ?? 0}
              </p>
              <p className={styles.procent}>%</p>
            </div>

            <div className={styles.status}>
              <span className="material-symbols-outlined">{statusText}</span>
              <p>Статус: {plant?.estimation?.status}</p>
            </div>

            <span
              className={`${styles.backgroundDrop} material-symbols-outlined`}
            >
              water_drop
            </span>
          </div>
        </>
      )}
    </div>
  );
}
