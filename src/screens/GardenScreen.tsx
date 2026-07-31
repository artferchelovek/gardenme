import React from 'react';
import { Sprout, Plus } from 'lucide-react';
import type { Plant } from '../services/api.ts';
import { PlantCard } from '../components/PlantCard.tsx';

interface GardenScreenProps {
  plants: Plant[];
  deviceCount: number;
  onOpenDetails: (id: string) => void;
  onWater: (id: string) => Promise<void>;
  onAddPlant: () => void;
}

export const GardenScreen: React.FC<GardenScreenProps> = ({ plants, deviceCount, onOpenDetails, onWater, onAddPlant }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-3xl text-[var(--ink)]">Ваш сад</h2>
          <p className="telemetry-label mt-0.5">
            {plants.length} растений · {deviceCount} датчиков
          </p>
        </div>
        <button onClick={onAddPlant} className="btn btn-ghost">
          <Plus size={16} />
          Добавить
        </button>
      </div>

      {plants.length === 0 ? (
        <div className="panel p-8 text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-[var(--surface-high)] text-[var(--copper)] mx-auto flex items-center justify-center">
            <Sprout size={26} />
          </div>
          <h3 className="font-display text-xl text-[var(--ink)]">Сад пока пуст</h3>
          <p className="text-sm text-[var(--ink-muted)] max-w-[26ch] mx-auto">
            Добавьте растение и, если есть плата ESP32, привяжите к нему датчик влажности.
          </p>
          <button onClick={onAddPlant} className="btn btn-copper mx-auto">
            <Plus size={16} />
            Добавить растение
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} onWater={onWater} onOpenDetails={onOpenDetails} />
          ))}
        </div>
      )}
    </div>
  );
};
