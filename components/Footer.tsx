"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { m, useInView } from "framer-motion";
import { useRef } from "react";
import styles from "./Footer.module.css";

const links = {
  Företaget: [
    { label: "Hem", href: "/" },
    { label: "Tjänster", href: "/services" },
    { label: "Om oss", href: "/about" },
    { label: "Kontakt", href: "/contact" },
  ],
  Tjänster: [
    { label: "Webbdesign", href: "/services#websites" },
    { label: "Hosting", href: "/services#hosting" },
    { label: "Synlighet på nätet", href: "/services#seo" },
    { label: "Support", href: "/services#support" },
  ],
  Juridiskt: [
    { label: "Integritetspolicy", href: "/integritetspolicy" },
    { label: "Villkor", href: "/villkor" },
  ],
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer ref={ref} className={styles.footer}>
      <div className={styles.glow} />

      <div className={styles.inner}>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className={styles.top}
        >
          {/* Brand */}
          <div className={styles.brand}>
            <Link href="/" className={styles.logoLink}>
              <div className={styles.logoIcon}>
                <Image src="/favicon.png" alt="Avtryck Digital" width={20} height={20} />
              </div>
              <span className={styles.logoText}>Avtryck Digital.</span>
            </Link>
            <p className={styles.brandDesc}>
              Webbdesign, hosting och synlighet för företag.
            </p>
            <Link href="/contact" className={styles.brandCta}>
              Starta ett projekt
              <ArrowUpRight width={14} height={14} />
            </Link>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <span className={styles.colHeading}>{group}</span>
              <ul className={styles.colList}>
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className={styles.colLink}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </m.div>

        <m.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.bottom}
        >
          <span className={styles.copyright}>
            © {new Date().getFullYear()} Avtryck Digital. Alla rättigheter förbehållna.
          </span>
          <span className={styles.tagline}>
            Två studenter. Riktiga hemsidor. Schyssta priser.
          </span>
        </m.div>
      </div>
    </footer>
  );
}
