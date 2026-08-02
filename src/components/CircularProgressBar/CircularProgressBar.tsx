import styles from "./CircularProgressBar.module.css";

interface CircularProgressBarProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  showValue?: boolean;
}

export default function CircularProgressBar({
  value,
  size = 100,
  strokeWidth = 8,
  showValue = true,
}: CircularProgressBarProps) {
  const normalizedValue = Math.min(100, Math.max(0, value));

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (normalizedValue / 100) * circumference;

  return (
    <div className={styles.container} style={{ width: size, height: size }}>
      <svg width={size} height={size} className={styles.svg}>
        <circle
          className={styles.track}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />

        <circle
          className={styles.indicator}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDashoffset={strokeDashoffset}
          strokeDasharray={circumference}
        />
      </svg>

      {showValue && (
        <div className={styles.valueText}>
          <span>{Math.round(normalizedValue)}%</span>
        </div>
      )}
    </div>
  );
}
