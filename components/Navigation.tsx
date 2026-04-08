"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import styles from "./Navigation.module.css";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/services", label: "Tjänster" },
  { href: "/about", label: "Om oss" },
  { href: "/contact", label: "Kontakt" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > 80) {
        setVisible(y < lastY.current);
      } else {
        setVisible(true);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: visible ? 0 : -80, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={styles.header}
      >
        <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Avtryck Digital.</span>
          </Link>

          {/* Desktop links */}
          <ul className={styles.links}>
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${styles.link} ${active ? styles.linkActive : ""}`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className={styles.activePill}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span style={{ position: "relative", zIndex: 1 }}>{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right: CTA + hamburger */}
          <div className={styles.right}>
            <Link href="/contact" className={styles.cta}>
              Kom igång
            </Link>
            <button
              className={styles.hamburger}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
            >
              {menuOpen ? <X width={20} height={20} /> : <Menu width={20} height={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className={styles.mobileMenu}
          >
            <ul className={styles.mobileLinks}>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${styles.mobileLink} ${pathname === href ? styles.mobileLinkActive : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={styles.mobileDivider}>
              <Link href="/contact" className={styles.mobileCta}>
                Kom igång
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
