import React from 'react';
import { Sprout, Cpu, History } from 'lucide-react';

export type TabType = 'garden' | 'sensors' | 'log';

interface BottomTabBarProps {
  activeTab: TabType;
  onChangeTab: (tab: TabType) => void;
}

const TABS: { id: TabType; label: string; icon: React.ElementType }[] = [
  { id: 'garden', label: 'Сад', icon: Sprout },
  { id: 'sensors', label: 'Датчики', icon: Cpu },
  { id: 'log', label: 'Журнал', icon: History },
];

export const BottomTabBar: React.FC<BottomTabBarProps> = ({ activeTab, onChangeTab }) => {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border)] bg-[var(--surface)]/96 backdrop-blur-xl shadow-[0_-2px_8px_hsl(120_45%_14%/6%)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="max-w-md mx-auto grid grid-cols-3">
        {TABS.map(({ id, label, icon: Icon }) => {
          const active = activeTab === id;
          return (
            <button
              key={id}
              onClick={() => onChangeTab(id)}
              className="relative flex flex-col items-center justify-center gap-1 py-2.5"
            >
              <span
                className="absolute top-0 h-[2px] w-8 rounded-full transition-opacity"
                style={{ backgroundColor: 'var(--copper)', opacity: active ? 1 : 0 }}
              />
              <Icon size={20} strokeWidth={active ? 2.4 : 1.8} color={active ? 'var(--copper)' : 'var(--ink-faint)'} />
              <span
                className="text-[11px] font-medium"
                style={{ color: active ? 'var(--ink)' : 'var(--ink-faint)' }}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
