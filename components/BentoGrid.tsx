import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./BentoGrid.module.css";

export default function BentoGrid() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Vi är med dig <span className={styles.highlight}>hela vägen</span>.</h2>
      <p className={styles.body}>
        Du behöver inte kunna något om hemsidor eller teknik – vi tar hand om allt.
        Från första idé till färdig lösning och vidare framåt.
      </p>
      <p className={styles.body}>
        Med marknadsledande startkostnader och fokus på långsiktiga relationer
        bygger vi inte bara hemsidor, utan samarbeten som håller över tid.
      </p>
      <Link href="/contact" className={`${styles.cta} group`}>
        Kom igång
        <ArrowRight width={16} height={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
      </Link>
    </section>
  );
}
