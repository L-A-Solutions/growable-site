import styles from "./AnimatedBackground.module.css";

export default function AnimatedBackground() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.orb + " " + styles.orb1} />
      <div className={styles.orb + " " + styles.orb2} />
      <div className={styles.orb + " " + styles.orb3} />
      <div className={styles.orb + " " + styles.orb4} />
      <div className={styles.noise} />
    </div>
  );
}
