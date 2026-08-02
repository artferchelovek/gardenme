export interface ReadingPoint {
  moisture: number;
  createdAt: Date;
}

export interface EstimationResult {
  currentMoisture: number;
  minThreshold: number;
  dailyDryingRate: number; // % drop per 24h
  daysRemaining: number | null; // null if insufficient data, 0 if needs watering now
  status: "OPTIMAL" | "WARNING" | "NEEDS_WATER";
}

/**
 * Calculates soil drying rate (% per day) and estimates days remaining until moisture reaches minThreshold.
 */
export function estimateDaysUntilWatering(
  currentMoisture: number,
  minThreshold: number,
  readings: ReadingPoint[],
): EstimationResult {
  if (currentMoisture <= minThreshold) {
    return {
      currentMoisture,
      minThreshold,
      dailyDryingRate: 0,
      daysRemaining: 0,
      status: "NEEDS_WATER",
    };
  }

  if (readings.length < 2) {
    // Default estimate if not enough historical readings
    const fallbackRate = 8.0; // Assume ~8% drop per day by default
    const days = Math.max(
      0,
      Math.round((currentMoisture - minThreshold) / fallbackRate),
    );
    return {
      currentMoisture,
      minThreshold,
      dailyDryingRate: fallbackRate,
      daysRemaining: days,
      status: currentMoisture <= minThreshold + 10 ? "WARNING" : "OPTIMAL",
    };
  }

  // Sort readings by timestamp ascending
  const sorted = [...readings].sort(
    (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
  );

  const first = sorted[0];
  const last = sorted[sorted.length - 1];

  if (!first || !last) {
    const fallbackRate = 8.0;
    const days = Math.max(
      0,
      Math.round((currentMoisture - minThreshold) / fallbackRate),
    );
    return {
      currentMoisture,
      minThreshold,
      dailyDryingRate: fallbackRate,
      daysRemaining: days,
      status: currentMoisture <= minThreshold + 10 ? "WARNING" : "OPTIMAL",
    };
  }

  const timeDiffMs = last.createdAt.getTime() - first.createdAt.getTime();
  const timeDiffDays = timeDiffMs / (1000 * 60 * 60 * 24);

  let dailyDryingRate = 8.0; // fallback default

  if (timeDiffDays > 0.04) {
    // At least 1 hour of time difference
    const moistureDiff = first.moisture - last.moisture;
    if (moistureDiff > 0) {
      dailyDryingRate = moistureDiff / timeDiffDays;
    }
  }

  // Ensure reasonable bounds for daily drying rate (between 1% and 40% per day)
  const clampedDryingRate = Math.min(Math.max(dailyDryingRate, 1.0), 40.0);

  const moistureMargin = currentMoisture - minThreshold;
  const daysRemaining = Math.max(
    0,
    Math.round((moistureMargin / clampedDryingRate) * 10) / 10,
  );

  let status: "OPTIMAL" | "WARNING" | "NEEDS_WATER" = "OPTIMAL";
  if (currentMoisture <= minThreshold) {
    status = "NEEDS_WATER";
  } else if (currentMoisture <= minThreshold + 10 || daysRemaining <= 1) {
    status = "WARNING";
  }

  return {
    currentMoisture,
    minThreshold,
    dailyDryingRate: Math.round(clampedDryingRate * 10) / 10,
    daysRemaining,
    status,
  };
}
