import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { type Plant, plantApi } from "@/api/plantApi.ts";
import DeviceStatus from "@/components/DeviceStatus/DeviceStatus.tsx";
import MoistureChart from "@/components/MoistureChart/MoistureChart.tsx";
import PlantNotification from "@/components/PlantNotification/PlantNotification.tsx";
import { PLANT_STATUS } from "@/types/plant.ts";
import { type ChartBatteryPoint, get24hBattery } from "@/utils/battery.ts";
import { type ChartPoint, get24hMoisture } from "@/utils/chartPoints.ts";

import styles from "./PlantView.module.css";

function CurrentMoisture(props: { plant: Plant; statusText: string }) {
  return (
    <div className={styles.currentMoisture}>
      <p className={styles.title}>ТЕКУЩАЯ ВЛАЖНОСТЬ ПОЧВЫ</p>

      <div className={styles.moistureElement}>
        <p className={styles.moisture}>
          {props.plant.estimation?.currentMoisture ?? 0}
        </p>
        <p className={styles.procent}>%</p>
      </div>

      <div className={styles.status}>
        <span className="material-symbols-outlined">{props.statusText}</span>
        <p>Статус: {props.plant?.estimation?.status}</p>
      </div>

      <span className={`${styles.backgroundDrop} material-symbols-outlined`}>
        water_drop
      </span>
    </div>
  );
}

export default function PlantView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [plant, setPlant] = useState<Plant | null>(null);
  const [chartData, setChartData] = useState<ChartPoint[]>([]);
  const [chartBatteryData, setChartBatteryData] = useState<ChartBatteryPoint[]>(
    [],
  );

  console.log(error, loading, plant, chartData); // чтобы тс не ругался

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
        const chart = get24hMoisture(response.readingsHistory);
        const chartBattery = get24hBattery(response.readingsHistory);
        setChartData(chart);
        setChartBatteryData(chartBattery);
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
          <div className={styles.onMain} onClick={() => navigate("/")}>
            <span className="material-symbols-outlined">arrow_back</span>
            <p>На главную</p>
          </div>
          <CurrentMoisture plant={plant} statusText={statusText} />
          <MoistureChart chart={chartData} />
          <DeviceStatus plant={plant} />
          <MoistureChart chart={chartBatteryData} />
          <PlantNotification />
        </>
      )}
    </div>
  );
}
