import { useNavigate } from "react-router-dom";

import styles from "./Profile.module.css";

export default function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <p className={styles.title}>Профиль</p>

        <button
          type="button"
          className={styles.logoutBtn}
          onClick={handleLogout}
        >
          <span className="material-symbols-outlined">logout</span>
          Выйти из аккаунта
        </button>
      </div>
    </div>
  );
}
