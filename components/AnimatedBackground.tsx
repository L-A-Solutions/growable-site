import styles from "./AnimatedBackground.module.css";

export default function AnimatedBackground() {
  return (
    <div className={styles.root} aria-hidden="true">
      <video
        className={styles.video}
        src="/bg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={styles.overlay} />
    </div>
  );
}
