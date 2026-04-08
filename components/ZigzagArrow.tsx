import styles from "./ZigzagArrow.module.css";

// Zigzag trending upward left→right
// ViewBox: 1440 × 420 — rendered with preserveAspectRatio="none" so it
// always stretches to fill 100% of the container width regardless of zoom.
// Zigzag ends at (1385, 30) — base of the chevron
const zigzag = "M 0,390 L 200,240 L 340,310 L 540,150 L 680,220 L 880,80 L 1020,150 L 1385,30";
const areaPath =
  "M 0,390 L 200,240 L 340,310 L 540,150 L 680,220 L 880,80 L 1020,150 L 1385,30 L 1385,420 L 0,420 Z";

// ">" chevron — fully inside viewBox (y: 5–55), tip at (1420, 30)
const chevron = "M 1385,5 L 1420,30 L 1385,55";

// Actual path length (re-measured): ≈ 1620
const PATH_LEN = 1620;

export default function ZigzagArrow() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg
        viewBox="0 0 1440 420"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient id="zzLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#4ade80" stopOpacity="0.6" />
            <stop offset="50%"  stopColor="#e2e8f0" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F2A7B5" stopOpacity="1"   />
          </linearGradient>

          <linearGradient id="zzAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0"    />
          </linearGradient>

          <filter id="zzGlow" x="-15%" y="-60%" width="130%" height="220%">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="4">
              <animate
                attributeName="stdDeviation"
                values="3;9;3"
                dur="4s"
                repeatCount="indefinite"
              />
            </feGaussianBlur>
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Area fill */}
        <path className={styles.area} d={areaPath} fill="url(#zzAreaGrad)" />

        {/* Zigzag line */}
        <path
          className={styles.line}
          d={zigzag}
          fill="none"
          stroke="url(#zzLineGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#zzGlow)"
          style={{ "--path-len": PATH_LEN } as React.CSSProperties}
        />

        {/* ">" chevron — open angle, no fill */}
        <path
          className={styles.head}
          d={chevron}
          fill="none"
          stroke="#F2A7B5"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#zzGlow)"
        />
      </svg>
    </div>
  );
}
