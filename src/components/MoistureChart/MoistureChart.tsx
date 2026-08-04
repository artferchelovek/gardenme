import type { ChartPoint } from "@/utils/chartPoints.ts";

import styles from "./MoistureChart.module.css";

interface MoistureChartProps {
  chart: ChartPoint[];
}

function smoothPoints(
  pts: { x: number; y: number }[],
): { x: number; y: number }[] {
  if (pts.length <= 2) return pts;

  const windowSize = 5;
  const halfWindow = Math.floor(windowSize / 2);
  const result: { x: number; y: number }[] = [];

  for (let i = 0; i < pts.length; i++) {
    let sumY = 0;
    let count = 0;

    for (let j = i - halfWindow; j <= i + halfWindow; j++) {
      if (j >= 0 && j < pts.length) {
        sumY += pts[j]!.y;
        count++;
      }
    }

    result.push({
      x: pts[i]!.x,
      y: sumY / count,
    });
  }

  return result;
}

function chaikinSmooth(
  pts: { x: number; y: number }[],
  iterations = 2,
): { x: number; y: number }[] {
  let current = pts;

  for (let iter = 0; iter < iterations; iter++) {
    if (current.length < 3) break;
    const next: { x: number; y: number }[] = [current[0]!];

    for (let i = 0; i < current.length - 1; i++) {
      const p0 = current[i]!;
      const p1 = current[i + 1]!;

      const q = {
        x: 0.75 * p0.x + 0.25 * p1.x,
        y: 0.75 * p0.y + 0.25 * p1.y,
      };
      const r = {
        x: 0.25 * p0.x + 0.75 * p1.x,
        y: 0.25 * p0.y + 0.75 * p1.y,
      };

      next.push(q, r);
    }

    next.push(current[current.length - 1]!);
    current = next;
  }

  return current;
}

function buildCatmullRomPath(pts: { x: number; y: number }[]): string {
  if (pts.length === 0) return "";
  if (pts.length === 1) return `M ${pts[0]!.x},${pts[0]!.y}`;
  if (pts.length === 2)
    return `M ${pts[0]!.x},${pts[0]!.y} L ${pts[1]!.x},${pts[1]!.y}`;

  let d = `M ${pts[0]!.x.toFixed(1)},${pts[0]!.y.toFixed(1)}`;
  const k = 0.75;

  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = i > 0 ? pts[i - 1]! : pts[i]!;
    const p1 = pts[i]!;
    const p2 = pts[i + 1]!;
    const p3 = i < pts.length - 2 ? pts[i + 2]! : p2;

    const cp1x = p1.x + ((p2.x - p0.x) / 6) * k;
    const cp1y = p1.y + ((p2.y - p0.y) / 6) * k;

    const cp2x = p2.x - ((p3.x - p1.x) / 6) * k;
    const cp2y = p2.y - ((p3.y - p1.y) / 6) * k;

    d += ` C ${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }

  return d;
}

export default function MoistureChart({ chart }: MoistureChartProps) {
  if (chart.length === 0) {
    return (
      <div className={styles.empty}>
        <p>Недостаточно данных</p>
      </div>
    );
  }

  const moistures = chart.map((r) => r.moisture);
  const realMax = Math.round(Math.max(...moistures));
  const realMin = Math.round(Math.min(...moistures));

  const rangeMargin = Math.max(2, Math.round((realMax - realMin) * 0.25));
  const yMin = Math.max(0, realMin - rangeMargin);
  const yMax = Math.min(100, realMax + rangeMargin);
  const yRange = yMax - yMin || 1;

  const yMid = Math.round((yMax + yMin) / 2);

  const SVG_WIDTH = 400;
  const SVG_HEIGHT = 120;
  const PADDING_Y = 12;

  const rawPoints = chart.map((item, index) => {
    const x = (index / (chart.length - 1 || 1)) * SVG_WIDTH;
    const normalizedY =
      ((item.moisture - yMin) / yRange) * (SVG_HEIGHT - PADDING_Y * 2);
    const y = SVG_HEIGHT - PADDING_Y - normalizedY;

    return { x, y };
  });

  const smoothed = smoothPoints(rawPoints);
  const points = chaikinSmooth(smoothed, 2);

  const linePath = buildCatmullRomPath(points);

  const firstPt = points[0]!;
  const lastPt = points[points.length - 1]!;
  const areaPath = `${linePath} L ${lastPt.x},${SVG_HEIGHT} L ${firstPt.x},${SVG_HEIGHT} Z`;

  const step = Math.floor(chart.length / 4) || 1;
  const timeLabels = [
    chart[0],
    chart[step],
    chart[step * 2],
    chart[chart.length - 1],
  ].filter(Boolean);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className="material-symbols-outlined">show_chart</span>
        <p>Уровень влажности за 24ч</p>
      </div>
      <div className={styles.chartWrapper}>
        <div className={styles.yAxis}>
          <p>{yMax}%</p>
          <p>{yMid}%</p>
          <p>{yMin}%</p>
        </div>

        <div className={styles.chartContainer}>
          <svg
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
            preserveAspectRatio="none"
            className={styles.svg}
          >
            <defs>
              <linearGradient
                id="moistureGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="var(--md-sys-color-primary)"
                  stopOpacity="0.35"
                />
                <stop
                  offset="100%"
                  stopColor="var(--md-sys-color-primary)"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            <line
              x1="0"
              y1={PADDING_Y}
              x2={SVG_WIDTH}
              y2={PADDING_Y}
              className={styles.gridLine}
            />
            <line
              x1="0"
              y1={SVG_HEIGHT / 2}
              x2={SVG_WIDTH}
              y2={SVG_HEIGHT / 2}
              className={styles.gridLine}
            />
            <line
              x1="0"
              y1={SVG_HEIGHT - PADDING_Y}
              x2={SVG_WIDTH}
              y2={SVG_HEIGHT - PADDING_Y}
              className={styles.gridLine}
            />

            <path d={areaPath} fill="url(#moistureGradient)" />

            <path
              d={linePath}
              fill="none"
              stroke="var(--md-sys-color-primary)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className={styles.xAxis}>
            {timeLabels.map((r, i) => (
              <p key={i}>{i === timeLabels.length - 1 ? "Сейчас" : r.time}</p>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.stats}>
        <div>
          <p>Максимум</p>
          <p className={styles.stat}>{realMax}%</p>
        </div>
        <div>
          <p>Минимум</p>
          <p className={styles.stat}>{realMin}%</p>
        </div>
      </div>
    </div>
  );
}
