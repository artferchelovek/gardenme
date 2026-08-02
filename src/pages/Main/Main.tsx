import { useEffect, useState } from "react";

import { type User, authApi } from "@/api/authApi.ts";
import { type Plant, plantApi } from "@/api/plantApi.ts";
import PlantElement from "@/components/PlantElement/PlantElement.tsx";
import { getGreeting } from "@/utils/greeting.ts";

import styles from "./Main.module.css";

export default function Main() {
  const [user, setUser] = useState<User | null>(null);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState({
    userLoading: true,
    plantLoading: true,
  });
  const [error, setError] = useState<string | null>(null);
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const userData = await authApi.me();
        if (userData) {
          setUser(userData);
          setGreeting(getGreeting(userData.name || "Пользователь"));
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Произошла неизвестная ошибка");
        }
      } finally {
        setLoading((prev) => ({ ...prev, userLoading: false }));
      }

      try {
        const plantsData = await plantApi.allPlants();
        if (plantsData) {
          setPlants(plantsData);
        }
      } catch (err) {
        console.error("Ошибка загрузки растений:", err);
      } finally {
        setLoading((prev) => ({ ...prev, plantLoading: false }));
      }
    };

    loadData();
  }, []);

  return (
    <div className={styles.main}>
      {error && <div className={styles.error}>{error}</div>}

      {loading.userLoading ? (
        <div className={styles.skeletonHeader}>
          <div className={styles.skeletonTitle} />
          <div className={styles.skeletonSubtitle} />
        </div>
      ) : (
        user && (
          <div className={styles.comeback}>
            <p className={styles.name}>{greeting}</p>
            <p>Ваш сад сегодня чувствует себя отлично!</p>
          </div>
        )
      )}

      {loading.plantLoading ? (
        <div className={styles.skeletonPlantsList}>
          <div className={styles.skeletonPlantCard} />
          <div className={styles.skeletonPlantCard} />
        </div>
      ) : (
        plants.length > 0 && (
          <div className={styles.plants}>
            {plants.map((plant: Plant) => (
              <PlantElement key={plant.id} plant={plant} />
            ))}
          </div>
        )
      )}
    </div>
  );
}
