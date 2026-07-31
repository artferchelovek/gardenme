import React from 'react';
import { Sparkles, Droplets, History } from 'lucide-react';
import type { Plant } from '../services/api.ts';

interface LogScreenProps {
  plants: Plant[];
}

export const LogScreen: React.FC<LogScreenProps> = ({ plants }) => {
  const entries = plants
    .flatMap((p) => (p.wateringsHistory || []).map((w) => ({ ...w, plantName: p.name })))
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-display text-3xl text-[var(--ink)]">Журнал поливов</h2>
        <p className="telemetry-label mt-0.5">авто-детекция + ручные записи</p>
      </div>

      {entries.length === 0 ? (
        <div className="panel p-8 text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-[var(--surface-high)] text-[var(--copper)] mx-auto flex items-center justify-center">
            <History size={26} />
          </div>
          <h3 className="font-display text-xl text-[var(--ink)]">Журнал пуст</h3>
          <p className="text-sm text-[var(--ink-muted)] max-w-[26ch] mx-auto">
            Полейте растение вручную или дождитесь, пока датчик заметит скачок влажности.
          </p>
        </div>
      ) : (
        <div className="relative pl-4">
          <div className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-[var(--border)]" />
          <div className="space-y-3">
            {entries.map((w) => (
              <div key={w.id} className="relative">
                <span
                  className="absolute -left-4 top-2.5 w-2 h-2 rounded-full border-2 border-[var(--bg)]"
                  style={{ backgroundColor: w.detectedAutomatically ? 'var(--sky)' : 'var(--copper)' }}
                />
                <div className="panel p-3.5 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="font-display text-base text-[var(--ink)] block truncate">{w.plantName}</span>
                    <span className="text-[11px] text-[var(--ink-muted)]">
                      {new Date(w.createdAt).toLocaleString('ru-RU')}
                    </span>
                  </div>

                  <div className="text-right shrink-0">
                    <span
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold inline-flex items-center gap-1 mb-1"
                      style={{
                        backgroundColor: `color-mix(in srgb, ${w.detectedAutomatically ? 'var(--sky)' : 'var(--copper)'} 16%, transparent)`,
                        color: w.detectedAutomatically ? 'var(--sky)' : 'var(--copper)',
                      }}
                    >
                      {w.detectedAutomatically ? <Sparkles size={10} /> : <Droplets size={10} />}
                      {w.detectedAutomatically ? 'Авто' : 'Вручную'}
                    </span>
                    {w.moistureBefore != null && w.moistureAfter != null && (
                      <span className="text-[11px] font-mono-data font-semibold text-[var(--ink)] block">
                        {Math.round(w.moistureBefore)}% → {Math.round(w.moistureAfter)}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
