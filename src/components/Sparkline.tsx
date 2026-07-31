import React, { useId } from 'react';

interface SparklineProps {
  values: number[];
  threshold?: number;
  color: string;
  height?: number;
}

/**
 * The signature motif: a soil-telemetry trace, like a datalogger printout.
 * Reused small on plant cards and large in the plant detail sheet so the
 * same reading always looks like the same instrument.
 */
export const Sparkline: React.FC<SparklineProps> = ({ values, threshold, color, height = 40 }) => {
  const gradId = useId();
  const width = 100;
  const pad = 6;

  if (values.length < 2) {
    return (
      <div
        className="flex items-center justify-center telemetry-label"
        style={{ height }}
      >
        собираем данные…
      </div>
    );
  }

  const toXY = (v: number, i: number) => {
    const x = pad + (i / (values.length - 1)) * (width - pad * 2);
    const y = height - pad - (Math.max(0, Math.min(100, v)) / 100) * (height - pad * 2);
    return [x, y] as const;
  };

  const points = values.map(toXY);
  const line = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ');
  const area = `${line} L ${points[points.length - 1][0]} ${height} L ${points[0][0]} ${height} Z`;
  const [lastX, lastY] = points[points.length - 1];
  const thresholdY =
    threshold !== undefined ? height - pad - (threshold / 100) * (height - pad * 2) : null;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height={height} preserveAspectRatio="none">
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.32" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {thresholdY !== null && (
        <line
          x1={pad}
          x2={width - pad}
          y1={thresholdY}
          y2={thresholdY}
          stroke="var(--border-strong)"
          strokeWidth="0.6"
          strokeDasharray="2 2"
        />
      )}

      <path d={area} fill={`url(#${gradId})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />

      <circle cx={lastX} cy={lastY} r="5" fill={color} opacity="0.22" />
      <circle cx={lastX} cy={lastY} r="2.2" fill={color} stroke="var(--surface)" strokeWidth="1" />
    </svg>
  );
};
