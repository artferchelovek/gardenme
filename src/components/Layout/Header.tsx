import styles from "./Layout.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <span className="material-symbols-outlined">potted_plant</span>
        <p>Gardenme</p>
      </div>

      <span className="material-symbols-outlined">search</span>
    </header>
  );
}
