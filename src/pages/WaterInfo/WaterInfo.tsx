import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { type Plant, plantApi } from "@/api/plantApi.ts";
import DetectWater from "@/components/LastWateredElement/DetectWater.tsx";
import {
  type WateringLogDetails,
  formatTimeAgo,
  getWateringList,
} from "@/utils/watering.ts";

import styles from "./WaterInfo.module.css";

function LastWatered(props: { lastWateredText: string }) {
  return (
    <div className={styles.lastWatered}>
      <div className={styles.last}>
        <span className="material-symbols-outlined">history</span>
        <p>ПОСЛЕДНИЙ ПОЛИВ</p>
      </div>
      <p className={styles.ago}>{props.lastWateredText}</p>
      <span className={`material-symbols-outlined ${styles.scheduleIcon}`}>
        schedule
      </span>
    </div>
  );
}

export default function WaterInfo() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState<boolean>(true);
  const [plant, setPlant] = useState<Plant | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [waterHistory, setWaterHistory] = useState<WateringLogDetails[]>([]);

  console.log(loading, error); // чтобы не ругался linter

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          setError("Не удалось получить данные");
          return;
        }
        const response = await plantApi.getPlantDetails(id);
        setPlant(response);
        setWaterHistory(getWateringList(response.wateringsHistory));
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

    fetchData();
  }, [id]);

  const lastWateringDate =
    plant?.lastWateringAt ||
    (waterHistory.length > 0 ? waterHistory[0].dateRaw : null);
  const lastWateredText = formatTimeAgo(lastWateringDate);

  return (
    <div className={styles.waterInfo}>
      <div className={styles.backMain} onClick={() => navigate(-1)}>
        <span className="material-symbols-outlined">arrow_back</span>
        <p>{`На главную / ${plant?.name ?? ""}`}</p>
      </div>
      <p className={styles.title}>История поливов</p>

      {!loading && (
        <>
          <LastWatered lastWateredText={lastWateredText} />
          <div className={styles.lastEvent}>
            <div className={styles.header}>
              <p>Последние события</p>
              {waterHistory.slice(0, 4).map((item) => (
                <DetectWater data={item} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
