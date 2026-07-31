# GardenMe Backend 🌿

Бэкенд-сервис для системы мониторинга влажности почвы растений на базе ESP32, Express, TypeScript, Prisma и PostgreSQL.

---

## 🛠 Технологический стек
- **Runtime**: Node.js + TypeScript (ESM)
- **Framework**: Express.js 5
- **ORM**: Prisma v6
- **Database**: PostgreSQL
- **Auth**: JWT (для пользователей), API Tokens (для ESP32)
- **Push**: Web Push (VAPID, W3C Push API)
- **Validation**: Zod

---

## 🚀 Быстрый запуск

### 1. Применение миграций Prisma в PostgreSQL
Перед первым запуском примените схему БД:
```bash
npx prisma db push
```

### 2. Запуск сервера разработки
```bash
npm run dev
```
Сервер будет доступен по адресу: `http://localhost:5000`

---

## 📡 API Эндпоинты

Базовый путь — `/api`. Авторизация двух видов:
- **Bearer** — `Authorization: Bearer <jwt>`, выдаётся при `register`/`login`, живёт 30 дней, кладёт `userId` в `req`.
- **Device token** — заголовок `X-Device-Token` (или `Authorization: Bearer <token>`, или `body.token`), привязан к конкретной ESP32-плате, не связан с юзером напрямую.

Ошибки — общий формат: Zod-валидация → `400 { error, details: [{ path, message }] }`; остальное → `<statusCode|500> { error: message }`.

### 🔐 1. Авторизация (`/api/auth`)

| Метод | Путь | Auth | Принимаем | Отдаём |
|---|---|---|---|---|
| POST | `/register` | — | `{ email, password (≥6 симв.), name? }` | `201 { user: {id,email,name,createdAt}, token }` |
| POST | `/login` | — | `{ email, password }` | `200 { user, token }` |
| GET | `/me` | Bearer | — | `{ id,email,name,createdAt, _count:{plants,devices} }` |

### 📟 2. Устройства ESP32 (`/api/devices`, все — Bearer)

| Метод | Путь | Принимаем | Отдаём |
|---|---|---|---|
| POST | `/` | `{ name, macAddress?, token? }` — если `token` не задан, генерится `esp32_<hex>` | `201`, созданный device |
| GET | `/` | — | список device + `plant: {id,name,species}` |
| POST | `/:id/pair` | `{ plantId: string \| null }` | device + `plant` (`null` = отвязка) |
| DELETE | `/:id` | — | `{ message }` |

### 🤖 3. Telemetry API для ESP32 (`/api/iot`)

- `POST /api/iot/reading` — auth: device token (см. выше)
  - **Принимаем**: `{ moisture: number (0-100), battery: number (0-100) }`
  - **Отдаём**: `{ status:'ok', readingId, plantPaired, plantName, moisture, battery }`
  - **Автоматика бэкенда**:
    - Обновляет `lastBatteryLevel` и `lastSeenAt` у устройства.
    - При резком росте влажности ($\ge 15\%$ с прошлого замера) регистрирует авто-полив `WateringLog` (`detectedAutomatically: true`).
    - При влажности $\le$ `minMoistureThreshold` шлёт Push (не чаще раза в 12ч на растение, лог в `NotificationLog`).

### 🌱 4. Растения (`/api/plants`, все — Bearer)

| Метод | Путь | Принимаем | Отдаём |
|---|---|---|---|
| POST | `/` | `{ name, species?, location?, minMoistureThreshold?, targetMoistureLevel?, deviceId? }` | `201`, растение + `device` |
| GET | `/` | — | массив: `{id,name,species,location,minMoistureThreshold,targetMoistureLevel,currentMoisture,batteryLevel,lastSeenAt,lastWateringAt,estimation,device,createdAt}` |
| GET | `/:id` | — | то же + `readingsHistory[]` (до 200, по возрастанию), `wateringsHistory[]` (до 20) |
| PUT | `/:id` | любые поля из create, частично, `deviceId` может быть `null` | обновлённое растение + `device` |
| DELETE | `/:id` | — | `{ message }` |

`estimation` (когда есть хоть одно измерение) — `{ currentMoisture, minThreshold, dailyDryingRate, daysRemaining, status: 'OPTIMAL'|'WARNING'|'NEEDS_WATER' }`, считается в `utils/calculation.utils.ts` (см. алгоритм ниже).

### 💧 5. Полив (`/api/plants/:id/water`, `/api/plants/:id/waterings`, Bearer)

| Метод | Путь | Принимаем | Отдаём |
|---|---|---|---|
| POST | `/water` | `{ note? }` | `201`, `WateringLog` (moistureAfter = `targetMoistureLevel` растения) |
| GET | `/waterings` | — | массив `WateringLog` (до 50, свежие сверху) |

### 🔔 6. PWA Push Уведомления (`/api/push`)

| Метод | Путь | Auth | Принимаем | Отдаём |
|---|---|---|---|---|
| GET | `/public-key` | — | — | `{ publicKey }` |
| POST | `/subscribe` | Bearer | `{ subscription: { endpoint, keys: { p256dh, auth } } }` | `201 { message }` |
| POST | `/unsubscribe` | Bearer | `{ endpoint }` | `{ message }` |

### ❤️ 7. Health

- `GET /api/health` → `{ status:'ok', timestamp }`

---

## ⚡️ Прогноз полива (Алгоритм)
Бэкенд динамически рассчитывает скорость высыхания почвы (% в сутки) по историческим показаниям датчика с момента последнего полива:
- Вычисляется дневной тренд: `dailyDryingRate = Δmoisture / Δdays`.
- Оставшиеся дни: `daysRemaining = (currentMoisture - minMoistureThreshold) / dailyDryingRate`.
- Если влажность ниже минимальной — возвращает `daysRemaining: 0` и статус `NEEDS_WATER`.

---

## 📶 Пример кода для ESP32 (Arduino C++)

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";
const char* serverUrl = "http://YOUR_SERVER_IP:5000/api/iot/reading";
const char* deviceToken = "esp32_your_generated_device_token";

const int MOISTURE_PIN = 34; // Analog pin for moisture sensor
const int BATTERY_PIN = 35;  // Analog pin for battery voltage divider

// Calibration values for moisture sensor
const int AIR_VALUE = 3200;   // Dry air ADC reading
const int WATER_VALUE = 1300; // Water ADC reading

float readMoisturePercentage() {
  int raw = analogRead(MOISTURE_PIN);
  float pct = map(raw, AIR_VALUE, WATER_VALUE, 0, 100);
  return constrain(pct, 0.0, 100.0);
}

float readBatteryPercentage() {
  int raw = analogRead(BATTERY_PIN);
  // Example for 18650 Li-Ion battery (3.0V - 4.2V)
  float voltage = (raw / 4095.0) * 3.3 * 2.0; 
  float pct = ((voltage - 3.0) / 1.2) * 100.0;
  return constrain(pct, 0.0, 100.0);
}

void sendTelemetry() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverUrl);
    http.addHeader("Content-Type", "application/json");
    http.addHeader("X-Device-Token", deviceToken);

    StaticJsonDocument<128> doc;
    doc["moisture"] = readMoisturePercentage();
    doc["battery"] = readBatteryPercentage();

    String jsonString;
    serializeJson(doc, jsonString);

    int httpCode = http.POST(jsonString);
    Serial.printf("[ESP32] HTTP POST result code: %d\n", httpCode);
    http.end();
  }
}

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi connected!");
}

void loop() {
  sendTelemetry();
  // Deep sleep for 1 hour (3600 seconds) to save battery
  esp_sleep_enable_timer_wakeup(3600ULL * 1000000ULL);
  esp_deep_sleep_start();
}
```
