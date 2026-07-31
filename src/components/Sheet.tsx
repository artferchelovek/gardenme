import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Mobile-native bottom sheet: slides up from the thumb-reachable edge of
 * the screen instead of a desktop dialog centered in a dark overlay.
 */
export const Sheet: React.FC<SheetProps> = ({ isOpen, onClose, title, subtitle, icon, children }) => {
  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className="sheet-backdrop" onClick={onClose} />
      <div className="sheet-panel mx-auto w-full max-w-md" role="dialog" aria-modal="true" aria-label={title}>
        <div className="sheet-handle" />
        <div className="flex items-start justify-between gap-3 pb-4 border-b border-[var(--border)] mb-4 shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            {icon && (
              <div className="w-10 h-10 rounded-xl bg-[var(--surface-high)] border border-[var(--border)] flex items-center justify-center text-[var(--copper)] shrink-0">
                {icon}
              </div>
            )}
            <div className="min-w-0">
              <h2 className="font-display text-2xl leading-tight text-[var(--ink)] truncate">{title}</h2>
              {subtitle && <p className="text-xs text-[var(--ink-muted)] mt-0.5 truncate">{subtitle}</p>}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-high)] shrink-0"
            aria-label="Закрыть"
          >
            <X size={18} />
          </button>
        </div>
        <div className="overflow-y-auto -mx-1 px-1">{children}</div>
      </div>
    </>
  );
};
