import React, { useState } from 'react';
import { Cpu, Plus, Copy, Check, Trash2, BatteryFull, Link2, Clock } from 'lucide-react';
import type { Device, Plant } from '../services/api.ts';

interface SensorsScreenProps {
  devices: Device[];
  plants: Plant[];
  onAddDevice: () => void;
  onPairDevice: (deviceId: string, plantId: string | null) => Promise<void>;
  onDeleteDevice: (deviceId: string) => Promise<void>;
}

export const SensorsScreen: React.FC<SensorsScreenProps> = ({ devices, plants, onAddDevice, onPairDevice, onDeleteDevice }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (device: Device) => {
    navigator.clipboard.writeText(device.token);
    setCopiedId(device.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-3xl text-[var(--ink)]">Датчики</h2>
          <p className="telemetry-label mt-0.5">esp32 · {devices.length} плат</p>
        </div>
        <button onClick={onAddDevice} className="btn btn-ghost">
          <Plus size={16} />
          Плата
        </button>
      </div>

      {devices.length === 0 ? (
        <div className="panel p-8 text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-[var(--surface-high)] text-[var(--copper)] mx-auto flex items-center justify-center">
            <Cpu size={26} />
          </div>
          <h3 className="font-display text-xl text-[var(--ink)]">Ни одной платы</h3>
          <p className="text-sm text-[var(--ink-muted)] max-w-[28ch] mx-auto">
            Зарегистрируйте плату ESP32, чтобы получить токен для прошивки — код для платы уже в{' '}
            <span className="font-mono-data">firmware/gardenme_esp32.ino</span>.
          </p>
          <button onClick={onAddDevice} className="btn btn-copper mx-auto">
            <Plus size={16} />
            Зарегистрировать плату
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {devices.map((device) => (
            <div key={device.id} className="panel p-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="font-display text-lg text-[var(--ink)] flex items-center gap-2 truncate">
                    <span className={`led ${device.lastSeenAt ? 'live' : ''}`} style={{ color: device.lastSeenAt ? 'var(--sprout)' : 'var(--ink-faint)', backgroundColor: device.lastSeenAt ? 'var(--sprout)' : 'var(--ink-faint)' }} />
                    {device.name}
                  </h3>
                  <p className="text-[11px] text-[var(--ink-muted)] flex items-center gap-1 mt-0.5">
                    <Clock size={11} />
                    {device.lastSeenAt ? new Date(device.lastSeenAt).toLocaleString('ru-RU') : 'ещё не выходила на связь'}
                  </p>
                </div>
                {device.lastBatteryLevel !== undefined && device.lastBatteryLevel !== null && (
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--surface-high)] border border-[var(--border)] text-xs font-mono-data font-semibold text-[var(--ink-muted)] shrink-0">
                    <BatteryFull size={13} className="text-[var(--sprout)]" />
                    {Math.round(device.lastBatteryLevel)}%
                  </span>
                )}
              </div>

              <div className="panel-well px-3 py-2 flex items-center justify-between gap-2">
                <code className="text-xs font-mono-data text-[var(--ink-muted)] truncate select-all">{device.token}</code>
                <button
                  onClick={() => handleCopy(device)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--copper)] hover:bg-[var(--surface-high)] shrink-0"
                  title="Скопировать токен"
                >
                  {copiedId === device.id ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-[var(--border)]">
                <Link2 size={14} className="text-[var(--copper)] shrink-0" />
                <select
                  value={device.plant?.id || ''}
                  onChange={(e) => onPairDevice(device.id, e.target.value || null)}
                  className="field flex-1 py-1.5 px-2 text-xs"
                >
                  <option value="">Без привязки к растению</option>
                  {plants.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => onDeleteDevice(device.id)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--ember)] hover:bg-[var(--ember)]/10 shrink-0"
                  title="Удалить устройство"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
