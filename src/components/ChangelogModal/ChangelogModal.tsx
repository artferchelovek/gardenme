import { useRegisterSW } from "virtual:pwa-register/react";

import styles from "./ChangelogModal.module.css";

export default function ChangelogModal() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  if (!needRefresh) return null;

  const handleUpdate = () => {
    updateServiceWorker(true);
  };

  const handleClose = () => {
    setNeedRefresh(false);
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Закрыть"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className={styles.header}>
          <div className={styles.topRow}>
            <span className={styles.badge}>Доступно обновление</span>
          </div>
          <div className={styles.titleWrapper}>
            <h2>Приложение обновлено!</h2>
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.message}>
            Вышла новая версия GardenMe с улучшениями производительности и
            интерфейса.
          </p>
        </div>

        <div className={styles.footer}>
          <button onClick={handleUpdate} className={styles.button}>
            <span className="material-symbols-outlined">refresh</span>
            Обновить сейчас
          </button>
        </div>
      </div>
    </div>
  );
}
