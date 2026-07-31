import React, { useState } from 'react';
import { Cpu, Sparkles, Copy, Check, CircleCheck } from 'lucide-react';
import { Sheet } from '../Sheet.tsx';
import type { Device } from '../../services/api.ts';

interface AddDeviceSheetProps {
  isOpen: boolean;
  onClose: () => void;
  onAddDevice: (name: string, token?: string) => Promise<Device>;
}

export const AddDeviceSheet: React.FC<AddDeviceSheetProps> = ({ isOpen, onClose, onAddDevice }) => {
  const [name, setName] = useState('');
  const [customToken, setCustomToken] = useState('');
  const [copied, setCopied] = useState(false);
  const [created, setCreated] = useState<Device | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setName('');
    setCustomToken('');
    setCreated(null);
    setError(null);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleGenerateToken = () => {
    const randomHex = Array.from(crypto.getRandomValues(new Uint8Array(12)))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    setCustomToken(`esp32_${randomHex}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const device = await onAddDevice(name.trim(), customToken.trim() || undefined);
      setCreated(device);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Не удалось создать устройство');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (token: string) => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <Sheet isOpen={isOpen} onClose={handleClose} title="Новая плата" subtitle="Регистрация ESP32 и токен прошивки" icon={<Cpu size={18} />}>
      {error && (
        <div className="mb-4 p-3 rounded-xl text-xs" style={{ backgroundColor: 'color-mix(in srgb, var(--ember) 16%, transparent)', color: 'var(--ember)' }}>
          {error}
        </div>
      )}

      {created ? (
        <div className="space-y-4 pb-2">
          <div className="panel-well p-4 text-center">
            <div className="w-11 h-11 rounded-full mx-auto mb-2 flex items-center justify-center" style={{ backgroundColor: 'color-mix(in srgb, var(--sprout) 18%, transparent)', color: 'var(--sprout)' }}>
              <CircleCheck size={22} />
            </div>
            <h3 className="font-display text-lg text-[var(--ink)] mb-1">«{created.name}» зарегистрирована</h3>
            <p className="text-xs text-[var(--ink-muted)]">Вставьте токен в прошивку ESP32 (см. firmware/gardenme_esp32.ino)</p>
          </div>

          <div className="panel-well p-3 flex items-center justify-between gap-2">
            <code className="text-xs font-mono-data text-[var(--ink)] truncate select-all">{created.token}</code>
            <button onClick={() => handleCopy(created.token)} className="btn btn-ghost shrink-0 py-1.5 px-3">
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Готово' : 'Скопировать'}
            </button>
          </div>

          <button onClick={handleClose} className="btn btn-copper w-full">
            Готово
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 pb-2">
          <div>
            <label className="field-label">Название платы *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ESP32 Гостиная"
              required
              autoFocus
              className="field"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="field-label mb-0">Токен (необязательно)</label>
              <button type="button" onClick={handleGenerateToken} className="text-[11px] font-semibold flex items-center gap-1 text-[var(--copper)]">
                <Sparkles size={11} />
                Сгенерировать
              </button>
            </div>
            <input
              type="text"
              value={customToken}
              onChange={(e) => setCustomToken(e.target.value)}
              placeholder="Оставьте пустым для автогенерации"
              className="field font-mono-data text-sm"
            />
          </div>

          <button type="submit" disabled={loading || !name.trim()} className="btn btn-copper w-full">
            {loading ? 'Регистрируем…' : 'Зарегистрировать плату'}
          </button>
        </form>
      )}
    </Sheet>
  );
};
