"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Monitor, Headphones, Zap } from "lucide-react";
import styles from "./Hero.module.css";
import GrowthChart from "./GrowthChart";

const pillars = [
  { icon: Monitor, label: "Hemsidor som konverterar" },
  { icon: Headphones, label: "Riktig support, riktiga människor" },
  { icon: Zap, label: "Snabb leverans" },
];

export default function Hero() {
  return (
    <section className={styles.section}>
      {/* Single entrance animation wrapping all content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={styles.content}
      >
        <div className={styles.badge}>
          <span className={styles.badgeInner}>
            <span className={styles.badgeDot} />
            Webbdesign &amp; digital tillväxt — Sverige
          </span>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.gradientWhite}>Vi bygger hemsidor</span>
          <br />
          <span className={styles.gradientPink}>som syns på nätet.</span>
        </h1>

        <p className={styles.subheading}>
          Vi designar och bygger snabba, professionella hemsidor för företag —
          och finns kvar långt efter lansering.
        </p>

        <div className={styles.ctas}>
          <Link href="/contact" className={styles.ctaPrimary}>
            Bli kontaktad
            <ArrowRight width={16} height={16} />
          </Link>
          <Link href="/services" className={styles.ctaSecondary}>
            Vad vi gör
          </Link>
        </div>

        <div className={styles.pillars}>
          {pillars.map(({ icon: Icon, label }) => (
            <div key={label} className={styles.pillar}>
              <Icon width={16} height={16} className={styles.pillarIcon} strokeWidth={1.8} />
              {label}
            </div>
          ))}
        </div>
      </motion.div>

      <GrowthChart />
    </section>
  );
}
