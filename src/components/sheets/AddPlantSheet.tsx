import React, { useState } from 'react';
import { Sprout, MapPin, Cpu } from 'lucide-react';
import { Sheet } from '../Sheet.tsx';
import type { Device, Plant } from '../../services/api.ts';

interface AddPlantSheetProps {
  isOpen: boolean;
  onClose: () => void;
  devices: Device[];
  onAddPlant: (data: {
    name: string;
    species?: string;
    location?: string;
    minMoistureThreshold?: number;
    deviceId?: string;
  }) => Promise<Plant>;
}

export const AddPlantSheet: React.FC<AddPlantSheetProps> = ({ isOpen, onClose, devices, onAddPlant }) => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [location, setLocation] = useState('');
  const [minThreshold, setMinThreshold] = useState(30);
  const [deviceId, setDeviceId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setName('');
    setSpecies('');
    setLocation('');
    setMinThreshold(30);
    setDeviceId('');
    setError(null);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    setError(null);
    try {
      await onAddPlant({
        name: name.trim(),
        species: species.trim() || undefined,
        location: location.trim() || undefined,
        minMoistureThreshold: minThreshold,
        deviceId: deviceId || undefined,
      });
      handleClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Не удалось создать растение');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet isOpen={isOpen} onClose={handleClose} title="Новое растение" subtitle="Профиль и привязка датчика" icon={<Sprout size={18} />}>
      {error && (
        <div className="mb-4 p-3 rounded-xl text-xs" style={{ backgroundColor: 'color-mix(in srgb, var(--ember) 16%, transparent)', color: 'var(--ember)' }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 pb-2">
        <div>
          <label className="field-label">Название *</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Монстера Альба"
            required
            autoFocus
            className="field"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="field-label">Вид</label>
            <input type="text" value={species} onChange={(e) => setSpecies(e.target.value)} placeholder="Monstera" className="field text-sm" />
          </div>
          <div>
            <label className="field-label flex items-center gap-1">
              <MapPin size={11} className="text-[var(--copper)]" /> Место
            </label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Гостиная" className="field text-sm" />
          </div>
        </div>

        <div>
          <label className="field-label flex items-center gap-1">
            <Cpu size={11} className="text-[var(--copper)]" /> Датчик ESP32
          </label>
          <select value={deviceId} onChange={(e) => setDeviceId(e.target.value)} className="field text-sm">
            <option value="">Без датчика — полив вручную</option>
            {devices.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name} {d.plant ? `(занят: ${d.plant.name})` : ''}
              </option>
            ))}
          </select>
        </div>

        <div className="panel-well p-4">
          <div className="flex items-center justify-between mb-2">
            <label className="field-label mb-0">Порог полива</label>
            <span className="font-mono-data text-sm font-semibold text-[var(--copper)]">{minThreshold}%</span>
          </div>
          <input
            type="range"
            min={10}
            max={60}
            step={5}
            value={minThreshold}
            onChange={(e) => setMinThreshold(Number(e.target.value))}
            className="w-full accent-[var(--copper)]"
          />
          <p className="text-[11px] text-[var(--ink-faint)] mt-2">
            Push-уведомление придёт, когда влажность опустится ниже {minThreshold}%.
          </p>
        </div>

        <button type="submit" disabled={loading || !name.trim()} className="btn btn-copper w-full">
          {loading ? 'Сохраняем…' : 'Создать профиль'}
        </button>
      </form>
    </Sheet>
  );
};
