/*
  GardenMe ESP32 Firmware 🌿
  -------------------------------------------------------------
  Схема подключения:
  - TP4056 OUT+  -> ESP32 VIN и Делитель R1 (100k)
  - TP4056 OUT-  -> Общая земля (GND-островок)
  - Делитель R1+R2 -> GPIO 34 (Заряд аккумулятора)
  - Датчик VCC   -> GPIO 25 (Питание датчика)
  - Датчик DATA  -> GPIO 32 (Сигнал влажности)
  - Датчик GND   -> Общая земля (GND-островок)
*/

#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

const char* WIFI_SSID     = "YOUR_WIFI_SSID";     // Имя Wi-Fi сети
const char* WIFI_PASSWORD = "YOUR_WIFI_PASSWORD"; // Пароль Wi-Fi
const char* SERVER_URL    = "http://192.168.1.100:5001/api/iot/reading"; // IP и порт сервера бэкенда (docker-compose публикует backend на хосте на 5001, не 5000)
const char* DEVICE_TOKEN  = "esp32_your_token_here"; // Токен устройства из приложения GardenMe

// Интервал между отправками данных в секундах (по умолчанию 1 час = 3600 сек)
#define SLEEP_INTERVAL_SEC 3600

// ============================================================
// НАСТРОЙКА ПИНОВ H/W
// ============================================================
const int BATTERY_PIN      = 34; // АЦП для замера аккумулятора
const int SENSOR_POWER_PIN = 25; // Выход импульсного питания датчика (защита от коррозии)
const int SENSOR_DATA_PIN  = 32; // АЦП для считывания сигнала влажности

// Калибровка датчика влажности (RAW АЦП от 0 до 4095)
// Скорректируйте эти значения после калибровки в сухом воздухе и воде:
const int AIR_VALUE   = 3200; // Показание в сухом воздухе (0%)
const int WATER_VALUE = 1500; // Показание в воде (100%)

// ============================================================
// ПРОТОТИПЫ ФУНКЦИЙ
// ============================================================
float readBatteryVoltage();
float getBatteryPercentage(float voltage);
int readSoilMoisture();
bool sendTelemetryData(int moisturePercent, float batteryPercent);

void setup() {
  Serial.begin(115200);
  delay(500);

  Serial.println("\n====================================");
  Serial.println("🌿 GardenMe ESP32 Telemetry Module");
  Serial.println("====================================");

  // 1. Инициализация пинов
  pinMode(SENSOR_POWER_PIN, OUTPUT);
  digitalWrite(SENSOR_POWER_PIN, LOW); // По умолчанию обесточен
  
  pinMode(BATTERY_PIN, INPUT);
  pinMode(SENSOR_DATA_PIN, INPUT);

  // 2. Настройка АЦП ESP32 (12-бит: 0..4095, аттенюация 11dB)
  analogReadResolution(12);
  analogSetPinAttenuation(BATTERY_PIN, ADC_11db);
  analogSetPinAttenuation(SENSOR_DATA_PIN, ADC_11db);

  // 3. Выполнение замеров
  float batteryVolts = readBatteryVoltage();
  float batteryPercent = getBatteryPercentage(batteryVolts);
  int moisturePercent = readSoilMoisture();

  Serial.printf("🔋 Напряжение аккумулятора: %.2f В (%.0f%%)\n", batteryVolts, batteryPercent);
  Serial.printf("🌱 Влажность почвы:        %d %%\n", moisturePercent);

  // 4. Подключение к Wi-Fi и отправка на сервер
  Serial.print("📶 Подключение к Wi-Fi: ");
  Serial.println(WIFI_SSID);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  int retries = 0;
  while (WiFi.status() != WL_CONNECTED && retries < 20) {
    delay(500);
    Serial.print(".");
    retries++;
  }

  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("\n✅ Wi-Fi успешно подключен!");
    Serial.print("📡 Локальный IP: ");
    Serial.println(WiFi.localIP());

    // Отправляем данные на бэкенд GardenMe
    sendTelemetryData(moisturePercent, batteryPercent);
  } else {
    Serial.println("\n❌ Ошибка: не удалось подключиться к Wi-Fi!");
  }

  // 5. Переход в режим Deep Sleep для экономии аккумулятора
  Serial.printf("💤 Уход в Deep Sleep на %d секунд...\n\n", SLEEP_INTERVAL_SEC);
  esp_sleep_enable_timer_wakeup((uint64_t)SLEEP_INTERVAL_SEC * 1000000ULL);
  esp_deep_sleep_start();
}

void loop() {
  // loop() никогда не вызывается из-за deep sleep в setup()
}

/**
 * Чтение напряжения аккумулятора через делитель 100k + 100k
 */
float readBatteryVoltage() {
  long rawSum = 0;
  for (int i = 0; i < 10; i++) {
    rawSum += analogRead(BATTERY_PIN);
    delay(5);
  }
  float rawAverage = rawSum / 10.0;
  float pinVoltage = rawAverage * (3.3 / 4095.0);

  // Умножаем на 2, так как делитель 100k/100k делит напряжение пополам
  float batteryVoltage = pinVoltage * 2.0;
  return batteryVoltage;
}

/**
 * Расчёт процента заряда Li-Ion / LiPo аккумулятора (3.0V = 0%, 4.2V = 100%)
 */
float getBatteryPercentage(float voltage) {
  if (voltage >= 4.2) return 100.0;
  if (voltage <= 3.0) return 0.0;
  float pct = ((voltage - 3.0) / 1.2) * 100.0;
  return constrain(pct, 0.0, 100.0);
}

/**
 * Чтение влажности почвы с импульсным питанием от GPIO25 (защита от коррозии)
 */
int readSoilMoisture() {
  // 1. Подаем 3.3V на VCC датчика
  digitalWrite(SENSOR_POWER_PIN, HIGH);
  delay(30); // 30 мс на стабилизацию схемы датчика

  // 2. Усреднение 5 замеров
  long rawSum = 0;
  for (int i = 0; i < 5; i++) {
    rawSum += analogRead(SENSOR_DATA_PIN);
    delay(5);
  }
  int rawValue = rawSum / 5;

  // 3. Отключаем питание датчика
  digitalWrite(SENSOR_POWER_PIN, LOW);

  // 4. Переводим сырое значение АЦП в проценты (от 0% до 100%)
  int moisturePercent = map(rawValue, AIR_VALUE, WATER_VALUE, 0, 100);
  moisturePercent = constrain(moisturePercent, 0, 100);

  return moisturePercent;
}

/**
 * Отправка JSON телеметрии на бэкенд GardenMe
 */
bool sendTelemetryData(int moisturePercent, float batteryPercent) {
  HTTPClient http;
  http.begin(SERVER_URL);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("X-Device-Token", DEVICE_TOKEN);

  StaticJsonDocument<128> doc;
  doc["moisture"] = moisturePercent;
  doc["battery"]  = batteryPercent;

  String jsonString;
  serializeJson(doc, jsonString);

  Serial.println("📤 Отправка запроса на сервер...");
  Serial.print("   Payload: ");
  Serial.println(jsonString);

  int httpCode = http.POST(jsonString);

  if (httpCode > 0) {
    Serial.printf("   HTTP Ответ от сервера: %d\n", httpCode);
    if (httpCode == HTTP_CODE_OK || httpCode == 201) {
      String response = http.getString();
      Serial.println("   Ответ сервера: " + response);
      http.end();
      return true;
    }
  } else {
    Serial.printf("   ❌ Ошибка HTTP POST: %s\n", http.errorToString(httpCode).c_str());
  }

  http.end();
  return false;
}
