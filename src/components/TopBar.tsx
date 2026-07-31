import React from 'react';
import { RefreshCw, BellRing, BellOff, Download, Leaf } from 'lucide-react';
import type { User } from '../services/api.ts';

interface TopBarProps {
  isOnline: boolean;
  user: User | null;
  pushSubscribed: boolean;
  onTogglePush: () => void;
  onOpenAuth: () => void;
  onRefresh: () => void;
  isRefreshing: boolean;
  canInstall: boolean;
  onInstall: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  isOnline,
  user,
  pushSubscribed,
  onTogglePush,
  onOpenAuth,
  onRefresh,
  isRefreshing,
  canInstall,
  onInstall,
}) => {
  return (
    <header
      className="sticky top-0 z-30 w-full border-b border-[var(--border)] bg-[var(--bg)]/92 backdrop-blur-xl shadow-[0_2px_8px_hsl(120_45%_14%/5%)]"
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-2 px-4 py-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-[var(--surface-high)] border border-[var(--border)] flex items-center justify-center text-[var(--copper)] shrink-0">
            <Leaf size={17} strokeWidth={2.25} />
          </div>
          <div className="min-w-0">
            <h1 className="font-display text-xl leading-tight text-[var(--ink)]">GardenMe</h1>
            <div className="flex items-center gap-1.5">
              <span
                className={`led ${isOnline ? 'live' : ''}`}
                style={{ color: isOnline ? 'var(--sprout)' : 'var(--amber)', backgroundColor: isOnline ? 'var(--sprout)' : 'var(--amber)' }}
              />
              <span className="telemetry-label">{isOnline ? 'link_ok' : 'demo_mode'}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          {canInstall && (
            <button
              onClick={onInstall}
              title="Установить приложение"
              className="w-9 h-9 rounded-full flex items-center justify-center text-[var(--copper)] hover:bg-[var(--surface-high)]"
            >
              <Download size={18} />
            </button>
          )}
          <button
            onClick={onRefresh}
            title="Обновить"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-high)]"
          >
            <RefreshCw size={17} className={isRefreshing ? 'animate-spin' : ''} />
          </button>
          <button
            onClick={onTogglePush}
            title={pushSubscribed ? 'Push включён' : 'Включить push'}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-[var(--surface-high)]"
            style={{ color: pushSubscribed ? 'var(--sprout)' : 'var(--ink-muted)' }}
          >
            {pushSubscribed ? <BellRing size={17} /> : <BellOff size={17} />}
          </button>
          <button
            onClick={onOpenAuth}
            className="w-9 h-9 rounded-full bg-[var(--surface-high)] border border-[var(--border)] flex items-center justify-center text-xs font-bold font-mono-data text-[var(--copper)]"
            title={user ? user.name || user.email : 'Вход'}
          >
            {user ? (user.name || user.email)[0].toUpperCase() : '?'}
          </button>
        </div>
      </div>
    </header>
  );
};
