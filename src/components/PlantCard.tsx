import React, { useState } from 'react';
import { MapPin, BatteryFull, Droplets, TrendingDown } from 'lucide-react';
import type { Plant } from '../services/api.ts';
import { MoistureDial } from './MoistureDial.tsx';
import { Sparkline } from './Sparkline.tsx';
import { getMoistureStatus, formatDateTime } from '../lib/status.ts';

interface PlantCardProps {
  plant: Plant;
  onWater: (plantId: string) => Promise<void>;
  onOpenDetails: (plantId: string) => void;
}

export const PlantCard: React.FC<PlantCardProps> = ({ plant, onWater, onOpenDetails }) => {
  const [isWatering, setIsWatering] = useState(false);

  const handleWaterClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWatering(true);
    try {
      await onWater(plant.id);
    } finally {
      setTimeout(() => setIsWatering(false), 1000);
    }
  };

  const status = getMoistureStatus(plant.currentMoisture, plant.minMoistureThreshold, plant.estimation);
  const daysLeft = plant.estimation?.daysRemaining ?? null;
  const readings = (plant.readingsHistory || []).map((r) => r.moisture);

  return (
    <div
      onClick={() => onOpenDetails(plant.id)}
      className="panel p-5 cursor-pointer active:scale-[0.99] transition-transform"
    >
      <div className="flex items-start justify-between gap-3 mb-1">
        <div className="min-w-0">
          <h3 className="font-display text-2xl leading-tight text-[var(--ink)] truncate">{plant.name}</h3>
          <div className="flex items-center gap-1.5 text-xs text-[var(--ink-muted)] mt-0.5 flex-wrap">
            {plant.species && <span>{plant.species}</span>}
            {plant.species && plant.location && <span className="text-[var(--ink-faint)]">·</span>}
            {plant.location && (
              <span className="flex items-center gap-0.5">
                <MapPin size={11} className="text-[var(--copper)]" />
                {plant.location}
              </span>
            )}
          </div>
        </div>

        {plant.batteryLevel !== null && (
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--surface-high)] border border-[var(--border)] text-xs font-mono-data font-semibold text-[var(--ink-muted)] shrink-0">
            <BatteryFull size={13} className="text-[var(--sprout)]" />
            {Math.round(plant.batteryLevel)}%
          </div>
        )}
      </div>

      <div
        className="inline-flex items-center gap-1.5 mt-2 mb-3 px-2.5 py-1 rounded-md text-[11px] font-semibold"
        style={{ backgroundColor: `color-mix(in srgb, ${status.color} 16%, transparent)`, color: status.color }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: status.color }} />
        {status.label}
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-4 items-center">
        <MoistureDial value={plant.currentMoisture} minThreshold={plant.minMoistureThreshold} size={148} />

        <div className="flex flex-col gap-2.5 min-w-0">
          <div className="panel-well px-3 py-2.5 flex items-center justify-between">
            <span className="telemetry-label">days_to_water</span>
            <span className="font-mono-data font-semibold text-sm text-[var(--ink)]">
              {daysLeft !== null ? (daysLeft <= 0 ? 'сегодня' : `~${daysLeft} дн.`) : '—'}
            </span>
          </div>

          {plant.estimation && (
            <div className="panel-well px-3 py-2.5 flex items-center justify-between">
              <span className="telemetry-label flex items-center gap-1">
                <TrendingDown size={11} />
                drying_rate
              </span>
              <span className="font-mono-data font-semibold text-sm" style={{ color: 'var(--copper)' }}>
                -{plant.estimation.dailyDryingRate}%/д
              </span>
            </div>
          )}

          <div className="panel-well px-3 py-2">
            <Sparkline values={readings} threshold={plant.minMoistureThreshold} color={status.color} height={32} />
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3.5 border-t border-[var(--border)] flex items-center justify-between gap-3">
        <div className="text-xs min-w-0">
          <span className="telemetry-label block">last_watered</span>
          <span className="text-[var(--ink)] font-medium">
            {plant.lastWateringAt ? formatDateTime(plant.lastWateringAt) : 'нет данных'}
          </span>
        </div>

        <button onClick={handleWaterClick} disabled={isWatering} className="btn btn-copper shrink-0">
          <Droplets size={15} />
          {isWatering ? 'Поливаем…' : 'Полить'}
        </button>
      </div>
    </div>
  );
};
