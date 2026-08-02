import { useLayoutEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Layout.module.css";

const ROUTES = [
  { path: "/", label: "Главная", icon: "home" },
  { path: "/device", label: "Добавить", icon: "add_circle" },
  { path: "/profile", label: "Профиль", icon: "account_circle" },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!footerRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const height = entry.contentRect.height;
      document.documentElement.style.setProperty(
        "--footer-height",
        `${height}px`,
      );
    });

    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      {ROUTES.map(({ path, label, icon }, index) => (
        <NavLink
          to={path}
          key={index}
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.isActive : ""}`
          }
        >
          <span className="material-symbols-outlined">{icon}</span>
          <p>{label}</p>
        </NavLink>
      ))}
    </footer>
  );
}
