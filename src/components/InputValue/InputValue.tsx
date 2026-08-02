import type { ChangeEvent } from "react";

import styles from "./InputValue.module.css";

interface InputValueProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  icon: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}

export function InputValue({
  value,
  onChange,
  title,
  icon,
  type = "text",
  placeholder = "",
  autoComplete,
}: InputValueProps) {
  return (
    <div className={styles.input}>
      <p>{title}</p>
      <div>
        <span className="material-symbols-outlined">{icon}</span>
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          autoComplete={autoComplete}
        />
      </div>
    </div>
  );
}
