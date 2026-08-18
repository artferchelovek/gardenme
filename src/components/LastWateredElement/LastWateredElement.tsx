import { Link } from "react-router-dom";

import styles from "./LastWateredElement.module.css";

export default function LastWateredElement() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className="material-symbols-outlined">water_drops</span>
        <p>Поливы</p>
      </div>
      <Link to="water" className={styles.details}>
        Посмотреть подробнее
      </Link>
    </div>
  );
}
