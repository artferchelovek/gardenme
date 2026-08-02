import { type SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { authApi } from "../../api/authApi";
import { InputValue } from "../../components/InputValue/InputValue.tsx";
import styles from "./Auth.module.css";
import { AuthLayout } from "./AuthLayout";

interface RegisterFormProps {
  onSwitchToLogin: () => void;
}

export function RegisterForm({ onSwitchToLogin }: RegisterFormProps) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await authApi.register({ name, email, password });
      localStorage.setItem("token", response.token);
      navigate("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Произошла неизвестная ошибка");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      variant="register"
      title="Создать аккаунт"
      subtitle="Присоединяйтесь к сообществу любителей растений"
      footerText="Уже есть аккаунт?"
      footerActionText="Войти"
      onFooterAction={onSwitchToLogin}
    >
      <form
        onSubmit={handleSubmit}
        className={`${styles.inputs} ${styles.inputsRegister}`}
      >
        {error && <div className={styles.errorMessage}>{error}</div>}

        <InputValue
          title="ИМЯ"
          value={name}
          onChange={(e) => setName(e.target.value)}
          icon="person"
          placeholder="Иван Иванов"
          autoComplete="name"
        />
        <InputValue
          title="ЭЛЕКТРОННАЯ ПОЧТА"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon="mail"
          type="email"
          placeholder="ivanov@gardenme.com"
          autoComplete="email"
        />
        <InputValue
          title="ПАРОЛЬ"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon="lock"
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
        />
        <button type="submit" className={styles.enter} disabled={isLoading}>
          {isLoading ? "Регистрация..." : "Создать аккаунт"}
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </form>
    </AuthLayout>
  );
}
