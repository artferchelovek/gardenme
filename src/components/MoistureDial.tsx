import React from 'react';

interface MoistureDialProps {
  value: number | null;
  minThreshold: number;
  size?: number;
}

const CX = 100;
const CY = 108;
const R_BAND = 78;
const R_TICK_IN = 62;

function pointAt(value: number, radius: number) {
  const angle = (180 - value * 1.8) * (Math.PI / 180);
  return { x: CX + radius * Math.cos(angle), y: CY - radius * Math.sin(angle) };
}

function bandPath(from: number, to: number, radius: number) {
  const start = pointAt(from, radius);
  const end = pointAt(to, radius);
  return `M ${start.x} ${start.y} A ${radius} ${radius} 0 0 1 ${end.x} ${end.y}`;
}

/**
 * The signature instrument: a physical analog soil-moisture meter rendered
 * in SVG — the same object gardeners already stick in a pot, not a generic
 * progress ring. Needle rotates from DRY (left) to WET (right).
 */
export const MoistureDial: React.FC<MoistureDialProps> = ({ value, minThreshold, size = 168 }) => {
  const hasData = value !== null;
  const clamped = hasData ? Math.max(0, Math.min(100, value)) : 0;
  const rotation = hasData ? (clamped - 50) * 1.8 : -90;
  const threshold = pointAt(minThreshold, R_BAND + 8);
  const thresholdInner = pointAt(minThreshold, R_TICK_IN - 6);

  return (
    <div className="relative inline-flex flex-col items-center" style={{ width: size }}>
      <svg viewBox="0 0 200 130" width={size} height={size * 0.65}>
        {/* Zone bands: the printed colored arc every analog meter has */}
        <path d={bandPath(0, minThreshold, R_BAND)} fill="none" stroke="var(--ember)" strokeWidth="7" strokeLinecap="round" opacity={hasData ? 1 : 0.25} />
        <path d={bandPath(minThreshold, minThreshold + 15, R_BAND)} fill="none" stroke="var(--amber)" strokeWidth="7" opacity={hasData ? 1 : 0.25} />
        <path d={bandPath(minThreshold + 15, 100, R_BAND)} fill="none" stroke="var(--sprout)" strokeWidth="7" strokeLinecap="round" opacity={hasData ? 1 : 0.25} />

        {/* Scale ticks */}
        {[0, 25, 50, 75, 100].map((t) => {
          const outer = pointAt(t, R_BAND - 10);
          const inner = pointAt(t, R_TICK_IN);
          return (
            <line
              key={t}
              x1={outer.x}
              y1={outer.y}
              x2={inner.x}
              y2={inner.y}
              stroke="var(--border-strong)"
              strokeWidth="1.5"
            />
          );
        })}

        {/* Threshold marker */}
        <line
          x1={threshold.x}
          y1={threshold.y}
          x2={thresholdInner.x}
          y2={thresholdInner.y}
          stroke="var(--ink)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Needle, pivoted at CX/CY, rotated via CSS transition */}
        <g transform={`translate(${CX} ${CY})`}>
          <g
            className="dial-needle"
            style={{ transform: `rotate(${rotation}deg)`, transformOrigin: '0px 0px' }}
          >
            <line x1="0" y1="10" x2="0" y2={-(R_TICK_IN - 4)} stroke="var(--copper)" strokeWidth="3" strokeLinecap="round" />
          </g>
          <circle r="7" fill="var(--copper)" stroke="var(--surface)" strokeWidth="2" />
        </g>
      </svg>

      <div className="flex flex-col items-center -mt-1">
        {hasData ? (
          <span className="font-mono-data font-semibold text-3xl leading-none" style={{ color: 'var(--ink)' }}>
            {Math.round(clamped)}
            <span className="text-base text-[var(--ink-muted)]">%</span>
          </span>
        ) : (
          <span className="font-mono-data text-lg text-[var(--ink-faint)]">— %</span>
        )}
        <span className="telemetry-label mt-0.5">soil_moisture</span>
      </div>
    </div>
  );
};
