import React, { useState } from 'react';
import { UserRound, Mail, Lock, LogOut } from 'lucide-react';
import { Sheet } from '../Sheet.tsx';
import type { User } from '../../services/api.ts';

interface AuthSheetProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  onLogin: (email: string, password: string) => Promise<void>;
  onRegister: (email: string, password: string, name?: string) => Promise<void>;
  onLogout: () => void;
}

export const AuthSheet: React.FC<AuthSheetProps> = ({ isOpen, onClose, user, onLogin, onRegister, onLogout }) => {
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (isRegisterMode) {
        await onRegister(email.trim(), password, name.trim() || undefined);
      } else {
        await onLogin(email.trim(), password);
      }
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка входа');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet
      isOpen={isOpen}
      onClose={onClose}
      title={user ? 'Профиль' : isRegisterMode ? 'Регистрация' : 'Вход'}
      subtitle="Синхронизация данных GardenMe"
      icon={<UserRound size={18} />}
    >
      {user ? (
        <div className="space-y-4 text-center py-2 pb-2">
          <div className="w-16 h-16 rounded-full bg-[var(--surface-high)] border border-[var(--border-strong)] text-[var(--copper)] mx-auto flex items-center justify-center font-display text-3xl">
            {(user.name || user.email)[0].toUpperCase()}
          </div>
          <div>
            <h3 className="font-display text-xl text-[var(--ink)]">{user.name || 'Пользователь'}</h3>
            <p className="text-xs text-[var(--ink-muted)]">{user.email}</p>
          </div>
          <button
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="btn btn-ghost w-full"
          >
            <LogOut size={15} />
            Выйти
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 pb-2">
          {error && (
            <div className="p-3 rounded-xl text-xs" style={{ backgroundColor: 'color-mix(in srgb, var(--ember) 16%, transparent)', color: 'var(--ember)' }}>
              {error}
            </div>
          )}

          {isRegisterMode && (
            <div>
              <label className="field-label">Имя</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Артём" className="field" />
            </div>
          )}

          <div>
            <label className="field-label flex items-center gap-1">
              <Mail size={11} className="text-[var(--copper)]" /> Email *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="artem@example.com"
              required
              autoFocus
              className="field"
            />
          </div>

          <div>
            <label className="field-label flex items-center gap-1">
              <Lock size={11} className="text-[var(--copper)]" /> Пароль *
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="field"
            />
          </div>

          <button type="submit" disabled={loading} className="btn btn-copper w-full">
            {loading ? 'Загрузка…' : isRegisterMode ? 'Зарегистрироваться' : 'Войти'}
          </button>

          <button type="button" onClick={() => setIsRegisterMode(!isRegisterMode)} className="text-xs font-semibold text-[var(--copper)] block mx-auto">
            {isRegisterMode ? 'Уже есть аккаунт? Войти' : 'Нет аккаунта? Зарегистрироваться'}
          </button>
        </form>
      )}
    </Sheet>
  );
};
