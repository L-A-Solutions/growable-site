import styles from "./BentoGrid.module.css";

export default function BentoGrid() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Vi är med dig hela vägen.</h2>
      <p className={styles.body}>
        Du behöver inte kunna något om hemsidor eller teknik – vi tar hand om allt.
        Från första idé till färdig lösning och vidare framåt.
      </p>
      <p className={styles.body}>
        Med marknadsledande startkostnader och fokus på långsiktiga relationer
        bygger vi inte bara hemsidor, utan samarbeten som håller över tid.
      </p>
    </section>
  );
}
