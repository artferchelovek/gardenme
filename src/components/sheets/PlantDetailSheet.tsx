import React from 'react';
import { Cpu, Trash2, Droplets, Sparkles, CalendarDays, BatteryFull } from 'lucide-react';
import { Sheet } from '../Sheet.tsx';
import { Sparkline } from '../Sparkline.tsx';
import { getMoistureStatus, formatDateTime } from '../../lib/status.ts';
import type { Plant } from '../../services/api.ts';

interface PlantDetailSheetProps {
  plant: Plant | null;
  isOpen: boolean;
  onClose: () => void;
  onWater: (plantId: string) => Promise<void>;
  onDelete: (plantId: string) => Promise<void>;
}

export const PlantDetailSheet: React.FC<PlantDetailSheetProps> = ({ plant, isOpen, onClose, onWater, onDelete }) => {
  if (!plant) return null;

  const status = getMoistureStatus(plant.currentMoisture, plant.minMoistureThreshold, plant.estimation);
  const readings = (plant.readingsHistory || []).map((r) => r.moisture);
  const waterings = [...(plant.wateringsHistory || [])].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <Sheet isOpen={isOpen} onClose={onClose} title={plant.name} subtitle={plant.location || plant.species}>
      <div className="space-y-5 pb-2">
        <div className="grid grid-cols-3 gap-2.5">
          <div className="panel-well py-3 text-center">
            <span className="telemetry-label">влажность</span>
            <span className="block font-mono-data font-semibold text-xl mt-0.5" style={{ color: status.color }}>
              {plant.currentMoisture !== null ? `${Math.round(plant.currentMoisture)}%` : '—'}
            </span>
          </div>
          <div className="panel-well py-3 text-center">
            <span className="telemetry-label flex items-center justify-center gap-1">
              <BatteryFull size={10} /> батарея
            </span>
            <span className="block font-mono-data font-semibold text-xl mt-0.5 text-[var(--ink)]">
              {plant.batteryLevel !== null ? `${Math.round(plant.batteryLevel)}%` : '—'}
            </span>
          </div>
          <div className="panel-well py-3 text-center">
            <span className="telemetry-label">до полива</span>
            <span className="block font-mono-data font-semibold text-base mt-0.5 text-[var(--copper)]">
              {plant.estimation?.daysRemaining != null ? `~${plant.estimation.daysRemaining}д` : '—'}
            </span>
          </div>
        </div>

        <div className="panel-well p-4">
          <h4 className="telemetry-label mb-2 flex items-center gap-1.5">
            <Droplets size={11} />
            история влажности почвы
          </h4>
          <Sparkline values={readings} threshold={plant.minMoistureThreshold} color={status.color} height={72} />
          <div className="flex justify-between text-[10px] text-[var(--ink-faint)] mt-1">
            <span>раньше</span>
            <span style={{ color: 'var(--copper)' }}>порог {plant.minMoistureThreshold}%</span>
            <span>сейчас</span>
          </div>
        </div>

        <div className="panel-well p-3.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <Cpu size={17} className="text-[var(--copper)] shrink-0" />
            <div className="min-w-0">
              <span className="telemetry-label block">датчик</span>
              <span className="font-medium text-sm text-[var(--ink)] truncate block">{plant.device ? plant.device.name : 'не привязан'}</span>
            </div>
          </div>
          {plant.device && (
            <code className="text-[10px] font-mono-data text-[var(--ink-faint)] shrink-0">{plant.device.token.slice(0, 10)}…</code>
          )}
        </div>

        <div>
          <h4 className="telemetry-label mb-2 flex items-center gap-1.5">
            <CalendarDays size={11} />
            история поливов
          </h4>
          {waterings.length === 0 ? (
            <div className="panel-well p-3 text-center text-xs text-[var(--ink-muted)]">Поливов пока не зафиксировано</div>
          ) : (
            <div className="space-y-1.5 max-h-40 overflow-y-auto">
              {waterings.map((w) => (
                <div key={w.id} className="panel-well p-3 flex items-center justify-between gap-2 text-xs">
                  <span className="flex items-center gap-1.5 text-[var(--ink-muted)]">
                    {w.detectedAutomatically ? <Sparkles size={12} className="text-[var(--sky)]" /> : <Droplets size={12} className="text-[var(--copper)]" />}
                    {formatDateTime(w.createdAt)}
                  </span>
                  {w.moistureBefore != null && w.moistureAfter != null && (
                    <span className="font-mono-data font-semibold text-[var(--ink)]">
                      {Math.round(w.moistureBefore)}% → {Math.round(w.moistureAfter)}%
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 pt-1">
          <button onClick={() => onDelete(plant.id)} className="btn btn-danger flex-1">
            <Trash2 size={15} />
            Удалить
          </button>
          <button onClick={() => onWater(plant.id)} className="btn btn-copper flex-1">
            <Droplets size={15} />
            Отметить полив
          </button>
        </div>
      </div>
    </Sheet>
  );
};
