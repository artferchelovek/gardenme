import type { ReactNode } from "react";

import styles from "./Auth.module.css";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footerText: string;
  footerActionText: string;
  onFooterAction: () => void;
  variant?: "login" | "register";
}

export function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerActionText,
  onFooterAction,
  variant = "login",
}: AuthLayoutProps) {
  const isLogin = variant === "login";

  return (
    <div
      className={`${styles.authPage} ${isLogin ? styles.authPageLogin : ""}`}
    >
      <div className={styles.logo}>
        <span className="material-symbols-outlined">potted_plant</span>
      </div>
      <p className={styles.title}>Gardenme</p>

      <div className={styles.welcome}>
        <p className={styles.comeBack}>{title}</p>
        <p>{subtitle}</p>
      </div>

      {children}

      <p className={styles.switchAuth}>
        {footerText}{" "}
        <button
          type="button"
          className={styles.switchBtn}
          onClick={onFooterAction}
        >
          {footerActionText}
        </button>
      </p>
    </div>
  );
}
