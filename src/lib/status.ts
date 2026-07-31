import type { Estimation } from '../services/api.ts';

export type MoistureTone = 'sprout' | 'amber' | 'ember' | 'faint';

export interface MoistureStatus {
  tone: MoistureTone;
  color: string;
  label: string;
}

/**
 * Single source of truth for how a moisture reading maps to a status LED
 * color + label, shared by the dial, the card badge and the sparkline dot.
 */
export function getMoistureStatus(
  value: number | null,
  minThreshold: number,
  estimation: Estimation | null,
): MoistureStatus {
  if (value === null) {
    return { tone: 'faint', color: 'var(--ink-faint)', label: 'Нет данных' };
  }

  const status = estimation?.status;

  if (status === 'NEEDS_WATER' || value <= minThreshold) {
    return { tone: 'ember', color: 'var(--ember)', label: 'Нужен полив' };
  }
  if (status === 'WARNING' || value <= minThreshold + 15) {
    return { tone: 'amber', color: 'var(--amber)', label: 'Скоро полить' };
  }
  return { tone: 'sprout', color: 'var(--sprout)', label: 'Влажность в норме' };
}

export function formatDateTime(iso: string): string {
  const d = new Date(iso);
  return `${d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })}, ${d.toLocaleTimeString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  })}`;
}
