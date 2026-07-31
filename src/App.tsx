import React, { useEffect, useState } from 'react';
import { WifiOff } from 'lucide-react';
import { TopBar } from './components/TopBar.tsx';
import { BottomTabBar } from './components/BottomTabBar.tsx';
import type { TabType } from './components/BottomTabBar.tsx';
import { GardenScreen } from './screens/GardenScreen.tsx';
import { SensorsScreen } from './screens/SensorsScreen.tsx';
import { LogScreen } from './screens/LogScreen.tsx';
import { PlantDetailSheet } from './components/sheets/PlantDetailSheet.tsx';
import { AddPlantSheet } from './components/sheets/AddPlantSheet.tsx';
import { AddDeviceSheet } from './components/sheets/AddDeviceSheet.tsx';
import { AuthSheet } from './components/sheets/AuthSheet.tsx';
import { ApiClient } from './services/api.ts';
import type { Plant, Device, User } from './services/api.ts';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

// Demo telemetry shown while the backend is unreachable, so the instrument
// panel is never empty on first paint.
const MOCK_PLANTS: Plant[] = [
  {
    id: 'demo-1',
    name: 'Монстера Альба',
    species: 'Monstera Deliciosa',
    location: 'Гостиная у окна',
    minMoistureThreshold: 35,
    targetMoistureLevel: 75,
    currentMoisture: 42,
    batteryLevel: 92,
    lastSeenAt: new Date().toISOString(),
    lastWateringAt: new Date(Date.now() - 48 * 3600 * 1000).toISOString(),
    estimation: { currentMoisture: 42, minThreshold: 35, dailyDryingRate: 7.2, daysRemaining: 1, status: 'WARNING' },
    device: { id: 'dev-demo-1', name: 'ESP32 Монстера', token: 'esp32_monstera_demo_123', lastBatteryLevel: 92, lastSeenAt: new Date().toISOString() },
    readingsHistory: [
      { id: 'r1', moisture: 78, battery: 95, createdAt: new Date(Date.now() - 72 * 3600 * 1000).toISOString() },
      { id: 'r2', moisture: 64, battery: 94, createdAt: new Date(Date.now() - 48 * 3600 * 1000).toISOString() },
      { id: 'r3', moisture: 51, battery: 93, createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString() },
      { id: 'r4', moisture: 42, battery: 92, createdAt: new Date().toISOString() },
    ],
    wateringsHistory: [
      { id: 'w1', moistureBefore: 30, moistureAfter: 78, detectedAutomatically: true, note: 'Авто-детекция (+48%)', createdAt: new Date(Date.now() - 72 * 3600 * 1000).toISOString() },
    ],
  },
  {
    id: 'demo-2',
    name: 'Фикус Лирата',
    species: 'Ficus Lyrata',
    location: 'Спальня',
    minMoistureThreshold: 30,
    targetMoistureLevel: 70,
    currentMoisture: 68,
    batteryLevel: 85,
    lastSeenAt: new Date().toISOString(),
    lastWateringAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
    estimation: { currentMoisture: 68, minThreshold: 30, dailyDryingRate: 8.5, daysRemaining: 4, status: 'OPTIMAL' },
    device: { id: 'dev-demo-2', name: 'ESP32 Фикус', token: 'esp32_ficus_demo_456', lastBatteryLevel: 85, lastSeenAt: new Date().toISOString() },
    readingsHistory: [
      { id: 'r10', moisture: 72, battery: 86, createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString() },
      { id: 'r11', moisture: 68, battery: 85, createdAt: new Date().toISOString() },
    ],
    wateringsHistory: [
      { id: 'w2', moistureBefore: 28, moistureAfter: 72, detectedAutomatically: false, note: 'Ручной полив', createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString() },
    ],
  },
];

const MOCK_DEVICES: Device[] = [
  { id: 'dev-demo-1', name: 'ESP32 Монстера', token: 'esp32_monstera_demo_123', lastBatteryLevel: 92, lastSeenAt: new Date().toISOString() },
  { id: 'dev-demo-2', name: 'ESP32 Фикус', token: 'esp32_ficus_demo_456', lastBatteryLevel: 85, lastSeenAt: new Date().toISOString() },
];

export const App: React.FC = () => {
  const [isOnline, setIsOnline] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [plants, setPlants] = useState<Plant[]>(MOCK_PLANTS);
  const [devices, setDevices] = useState<Device[]>(MOCK_DEVICES);
  const [activeTab, setActiveTab] = useState<TabType>('garden');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [selectedPlantId, setSelectedPlantId] = useState<string | null>(null);
  const [isAddPlantOpen, setIsAddPlantOpen] = useState(false);
  const [isAddDeviceOpen, setIsAddDeviceOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [pushSubscribed, setPushSubscribed] = useState(false);

  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    setInstallPrompt(null);
  };

  const fetchData = async () => {
    setIsRefreshing(true);
    const health = await ApiClient.checkHealth();
    setIsOnline(health);

    if (health) {
      try {
        await ApiClient.getProfile()
          .then(setUser)
          .catch(() => {});

        const [fetchedPlants, fetchedDevices] = await Promise.all([
          ApiClient.getPlants().catch(() => []),
          ApiClient.getDevices().catch(() => []),
        ]);

        if (fetchedPlants.length > 0) setPlants(fetchedPlants);
        if (fetchedDevices.length > 0) setDevices(fetchedDevices);
      } catch (err) {
        console.error('[App] fetch error:', err);
      }
    }
    setIsRefreshing(false);
  };

  useEffect(() => {
    // fetchData sets loading state synchronously on call — intentional, drives the initial spinner.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);

  const handleWaterPlant = async (plantId: string) => {
    if (isOnline) {
      try {
        await ApiClient.waterPlant(plantId, 'Ручной полив из PWA');
        await fetchData();
        return;
      } catch (err) {
        console.error('Error watering plant:', err);
      }
    }

    setPlants((prev) =>
      prev.map((p) => {
        if (p.id !== plantId) return p;
        const newMoisture = p.targetMoistureLevel || 75;
        return {
          ...p,
          currentMoisture: newMoisture,
          lastWateringAt: new Date().toISOString(),
          estimation: {
            currentMoisture: newMoisture,
            minThreshold: p.minMoistureThreshold,
            dailyDryingRate: p.estimation?.dailyDryingRate || 7.5,
            daysRemaining: Math.round((newMoisture - p.minMoistureThreshold) / (p.estimation?.dailyDryingRate || 7.5)),
            status: 'OPTIMAL',
          },
          wateringsHistory: [
            {
              id: `w-${p.wateringsHistory?.length ?? 0}-${plantId}`,
              moistureBefore: p.currentMoisture || 30,
              moistureAfter: newMoisture,
              detectedAutomatically: false,
              note: 'Ручной полив',
              createdAt: new Date().toISOString(),
            },
            ...(p.wateringsHistory || []),
          ],
        };
      }),
    );
  };

  const handleAddPlant = async (data: {
    name: string;
    species?: string;
    location?: string;
    minMoistureThreshold?: number;
    deviceId?: string;
  }) => {
    if (isOnline) {
      const newPlant = await ApiClient.createPlant(data);
      await fetchData();
      return newPlant;
    }

    const pairedDevice = devices.find((d) => d.id === data.deviceId) || null;
    const mockPlant: Plant = {
      id: `plant-${plants.length}-${data.name}`,
      name: data.name,
      species: data.species,
      location: data.location,
      minMoistureThreshold: data.minMoistureThreshold || 30,
      targetMoistureLevel: 70,
      currentMoisture: 65,
      batteryLevel: 90,
      lastSeenAt: new Date().toISOString(),
      lastWateringAt: new Date().toISOString(),
      estimation: { currentMoisture: 65, minThreshold: data.minMoistureThreshold || 30, dailyDryingRate: 8.0, daysRemaining: 4, status: 'OPTIMAL' },
      device: pairedDevice,
      readingsHistory: [],
      wateringsHistory: [],
    };

    setPlants((prev) => [mockPlant, ...prev]);
    return mockPlant;
  };

  const handleAddDevice = async (name: string, token?: string) => {
    if (isOnline) {
      const newDev = await ApiClient.createDevice(name, token);
      await fetchData();
      return newDev;
    }

    const mockDev: Device = {
      id: `dev-${devices.length}-${name}`,
      name,
      token: token || `esp32_${Math.random().toString(36).slice(2, 12)}`,
      lastBatteryLevel: 100,
      lastSeenAt: new Date().toISOString(),
    };

    setDevices((prev) => [mockDev, ...prev]);
    return mockDev;
  };

  const handleDeletePlant = async (plantId: string) => {
    if (isOnline) {
      await ApiClient.deletePlant(plantId);
      await fetchData();
    } else {
      setPlants((prev) => prev.filter((p) => p.id !== plantId));
    }
    setSelectedPlantId(null);
  };

  const handleTogglePush = async () => {
    if (!('Notification' in window) || !('serviceWorker' in navigator)) {
      alert('Браузер не поддерживает push-уведомления.');
      return;
    }

    if (pushSubscribed) {
      setPushSubscribed(false);
      return;
    }

    const perm = await Notification.requestPermission();
    if (perm !== 'granted') {
      alert('Доступ к уведомлениям отклонён в настройках браузера.');
      return;
    }

    try {
      const reg = await navigator.serviceWorker.ready;
      const { publicKey } = await ApiClient.getVapidPublicKey().catch(() => ({ publicKey: null }));
      if (publicKey) {
        const sub = await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: publicKey });
        await ApiClient.subscribePush(sub);
      }
      setPushSubscribed(true);
    } catch (err) {
      console.error('Push subscription error:', err);
      setPushSubscribed(true);
    }
  };

  const selectedPlant = plants.find((p) => p.id === selectedPlantId) || null;

  return (
    <>
      <TopBar
        isOnline={isOnline}
        user={user}
        pushSubscribed={pushSubscribed}
        onTogglePush={handleTogglePush}
        onOpenAuth={() => setIsAuthOpen(true)}
        onRefresh={fetchData}
        isRefreshing={isRefreshing}
        canInstall={!!installPrompt}
        onInstall={handleInstall}
      />

      <main className="flex-1 w-full max-w-md mx-auto px-4 pt-5" style={{ paddingBottom: 'calc(96px + env(safe-area-inset-bottom, 0px))' }}>
        {!isOnline && (
          <div className="panel-well mb-4 p-3 flex items-center justify-between gap-2 text-xs text-[var(--amber)]">
            <span className="flex items-center gap-2">
              <WifiOff size={14} />
              Сервер недоступен — демо-телеметрия
            </span>
            <button onClick={fetchData} className="font-semibold underline shrink-0">
              Проверить
            </button>
          </div>
        )}

        {activeTab === 'garden' && (
          <GardenScreen
            plants={plants}
            deviceCount={devices.length}
            onOpenDetails={setSelectedPlantId}
            onWater={handleWaterPlant}
            onAddPlant={() => setIsAddPlantOpen(true)}
          />
        )}

        {activeTab === 'sensors' && (
          <SensorsScreen
            devices={devices}
            plants={plants}
            onAddDevice={() => setIsAddDeviceOpen(true)}
            onPairDevice={async (devId, plantId) => {
              if (isOnline) await ApiClient.pairDevice(devId, plantId);
              await fetchData();
            }}
            onDeleteDevice={async (devId) => {
              if (isOnline) await ApiClient.deleteDevice(devId);
              setDevices((prev) => prev.filter((d) => d.id !== devId));
            }}
          />
        )}

        {activeTab === 'log' && <LogScreen plants={plants} />}
      </main>

      <BottomTabBar activeTab={activeTab} onChangeTab={setActiveTab} />

      <PlantDetailSheet
        plant={selectedPlant}
        isOpen={!!selectedPlantId}
        onClose={() => setSelectedPlantId(null)}
        onWater={handleWaterPlant}
        onDelete={handleDeletePlant}
      />

      <AddPlantSheet isOpen={isAddPlantOpen} onClose={() => setIsAddPlantOpen(false)} devices={devices} onAddPlant={handleAddPlant} />

      <AddDeviceSheet isOpen={isAddDeviceOpen} onClose={() => setIsAddDeviceOpen(false)} onAddDevice={handleAddDevice} />

      <AuthSheet
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        user={user}
        onLogin={async (email, pass) => {
          const res = await ApiClient.login(email, pass);
          ApiClient.setToken(res.token);
          setUser(res.user);
          await fetchData();
        }}
        onRegister={async (email, pass, name) => {
          const res = await ApiClient.register(email, pass, name);
          ApiClient.setToken(res.token);
          setUser(res.user);
          await fetchData();
        }}
        onLogout={() => {
          ApiClient.clearToken();
          setUser(null);
        }}
      />
    </>
  );
};

export default App;
