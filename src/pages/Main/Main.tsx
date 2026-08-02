import { useEffect, useState } from "react";

import { type User, authApi } from "../../api/authApi.ts";
import { getGreeting } from "../../utils/greeting.ts";
import styles from "./Main.module.css";

export default function Main() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState({
    userLoading: false,
    plantLoading: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [greeting, setGreeting] = useState<string>("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await authApi.me();
        setUser(response);
        return response;
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Произошла неизвестная ошибка");
        }
      }
    };

    fetchUser().then((data) => setGreeting(getGreeting(data.name)));
  }, []);

  return (
    <div className={styles.main}>
      {user && (
        <div className={styles.comeback}>
          <p className={styles.name}>{greeting}</p>
          <p>Ваш сад сегодня чувствует себя отлично!</p>
        </div>
      )}
    </div>
  );
}
