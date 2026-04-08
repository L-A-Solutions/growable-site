import styles from "./GrowthArrow.module.css";

export default function GrowthArrow() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <svg
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="growArrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#4ade80" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F2A7B5" stopOpacity="1"   />
          </linearGradient>

          {/* Outer wide glow */}
          <filter id="growArrowGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" result="blur">
              <animate
                attributeName="stdDeviation"
                values="8;20;8"
                dur="5s"
                repeatCount="indefinite"
              />
            </feGaussianBlur>
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#growArrowGlow)">
          {/* Shaft: bottom-left → base of arrowhead */}
          <line
            className={styles.shaft}
            x1="50"  y1="950"
            x2="875" y2="125"
            stroke="url(#growArrowGrad)"
            strokeWidth="16"
            strokeLinecap="round"
          />

          {/* Arrowhead tip at (960, 40); wings at (917,167) and (833,83) */}
          <polygon
            className={styles.head}
            points="960,40 917,167 833,83"
            fill="url(#growArrowGrad)"
          />
        </g>
      </svg>
    </div>
  );
}
