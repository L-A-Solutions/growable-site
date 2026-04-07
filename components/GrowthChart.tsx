import styles from "./GrowthChart.module.css";

// Points span full 1440px wide viewBox, trending sharply upward
const points: [number, number][] = [
  [0,   380],
  [160, 345],
  [300, 310],
  [440, 268],
  [580, 220],
  [720, 168],
  [880, 118],
  [1060, 72],
  [1240, 38],
  [1440, 10],
];

function smoothPath(pts: [number, number][]): string {
  if (pts.length < 2) return "";
  let d = `M ${pts[0][0]},${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) {
    const prev = pts[i - 1];
    const curr = pts[i];
    const cpx = (prev[0] + curr[0]) / 2;
    d += ` C ${cpx},${prev[1]} ${cpx},${curr[1]} ${curr[0]},${curr[1]}`;
  }
  return d;
}

const linePath = smoothPath(points);
const last = points[points.length - 1];
const areaPath = linePath + ` L ${last[0]},420 L 0,420 Z`;

// Interior dots — skip first and last
const dotPoints = points.slice(1, -1);

export default function GrowthChart() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg
        viewBox="0 0 1440 420"
        preserveAspectRatio="xMidYMax meet"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#4ade80"  stopOpacity="0.5" />
            <stop offset="45%"  stopColor="#e2e8f0"  stopOpacity="1"   />
            <stop offset="100%" stopColor="#F2A7B5"  stopOpacity="1"   />
          </linearGradient>

          <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0"    />
          </linearGradient>

        </defs>

        {/* Horizontal grid lines */}
        <g className={styles.grid} stroke="rgba(255,255,255,0.07)" strokeWidth="1">
          {[100, 180, 260, 340].map((y) => (
            <line key={y} x1="0" y1={y} x2="1440" y2={y} strokeDasharray="6 10" />
          ))}
        </g>

        {/* Area fill */}
        <path className={styles.area} d={areaPath} fill="url(#areaGrad)" />

        {/* Main line */}
        <path
          className={styles.line}
          d={linePath}
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data dots */}
        {dotPoints.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3.5"
            fill="#0A0A0A"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1.5"
            className={`${styles.dot} ${styles[`dot${i + 1}` as keyof typeof styles]}`}
          />
        ))}

        {/* End marker — simple diamond, no sperm */}
        <g className={styles.endDot}>
          <rect
            x={last[0] - 5}
            y={last[1] - 5}
            width="10"
            height="10"
            rx="1"
            fill="#F2A7B5"
            transform={`rotate(45, ${last[0]}, ${last[1]})`}
          />
          <rect
            x={last[0] - 2.5}
            y={last[1] - 2.5}
            width="5"
            height="5"
            rx="0.5"
            fill="#ffffff"
            transform={`rotate(45, ${last[0]}, ${last[1]})`}
          />
        </g>
      </svg>
    </div>
  );
}
