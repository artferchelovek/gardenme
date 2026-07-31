const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (typeof window !== 'undefined' && window.location.port === '5173'
    ? 'http://localhost:5001/api'
    : '/api');

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface Device {
  id: string;
  token: string;
  name: string;
  macAddress?: string;
  lastBatteryLevel?: number;
  lastSeenAt?: string;
  plant?: {
    id: string;
    name: string;
    species?: string;
  };
}

export interface Estimation {
  currentMoisture: number;
  minThreshold: number;
  dailyDryingRate: number;
  daysRemaining: number | null;
  status: 'OPTIMAL' | 'WARNING' | 'NEEDS_WATER';
}

export interface MoistureReading {
  id: string;
  moisture: number;
  battery: number;
  createdAt: string;
}

export interface WateringLog {
  id: string;
  moistureBefore?: number;
  moistureAfter?: number;
  detectedAutomatically: boolean;
  note?: string;
  createdAt: string;
}

export interface Plant {
  id: string;
  name: string;
  species?: string;
  location?: string;
  minMoistureThreshold: number;
  targetMoistureLevel: number;
  currentMoisture: number | null;
  batteryLevel: number | null;
  lastSeenAt: string | null;
  lastWateringAt: string | null;
  estimation: Estimation | null;
  device?: Device | null;
  readingsHistory?: MoistureReading[];
  wateringsHistory?: WateringLog[];
}

export class ApiClient {
  private static getToken(): string | null {
    return localStorage.getItem('gardenme_token');
  }

  public static setToken(token: string) {
    localStorage.setItem('gardenme_token', token);
  }

  public static clearToken() {
    localStorage.removeItem('gardenme_token');
  }

  private static async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const token = this.getToken();
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string>),
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Ошибка сервера (${response.status})`);
    }

    return response.json();
  }

  // Health check
  static async checkHealth(): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE_URL}/health`);
      return res.ok;
    } catch {
      return false;
    }
  }

  // Auth
  static async register(email: string, password: string, name?: string) {
    return this.request<{ user: User; token: string }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
    });
  }

  static async login(email: string, password: string) {
    return this.request<{ user: User; token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  static async getProfile() {
    return this.request<User>('/auth/me');
  }

  // Plants
  static async getPlants() {
    return this.request<Plant[]>('/plants');
  }

  static async getPlantDetails(id: string) {
    return this.request<Plant>(`/plants/${id}`);
  }

  static async createPlant(data: { name: string; species?: string; location?: string; minMoistureThreshold?: number; deviceId?: string }) {
    return this.request<Plant>('/plants', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  static async updatePlant(id: string, data: Partial<Plant>) {
    return this.request<Plant>(`/plants/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  static async deletePlant(id: string) {
    return this.request<{ message: string }>(`/plants/${id}`, {
      method: 'DELETE',
    });
  }

  static async waterPlant(id: string, note?: string) {
    return this.request<WateringLog>(`/plants/${id}/water`, {
      method: 'POST',
      body: JSON.stringify({ note }),
    });
  }

  // Devices
  static async getDevices() {
    return this.request<Device[]>('/devices');
  }

  static async createDevice(name: string, token?: string, macAddress?: string) {
    return this.request<Device>('/devices', {
      method: 'POST',
      body: JSON.stringify({ name, token, macAddress }),
    });
  }

  static async pairDevice(deviceId: string, plantId: string | null) {
    return this.request<Device>(`/devices/${deviceId}/pair`, {
      method: 'POST',
      body: JSON.stringify({ plantId }),
    });
  }

  static async deleteDevice(deviceId: string) {
    return this.request<{ message: string }>(`/devices/${deviceId}`, {
      method: 'DELETE',
    });
  }

  // Push Notifications
  static async getVapidPublicKey() {
    return this.request<{ publicKey: string | null }>('/push/public-key');
  }

  static async subscribePush(subscription: PushSubscription) {
    return this.request<{ message: string }>('/push/subscribe', {
      method: 'POST',
      body: JSON.stringify({ subscription }),
    });
  }
}
