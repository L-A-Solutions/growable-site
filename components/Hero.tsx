"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const bg = bgRef.current;
        const vid = videoRef.current;
        if (!bg) return;
        const heroH = bg.parentElement?.offsetHeight ?? window.innerHeight;
        const progress = Math.min(window.scrollY / (heroH * 0.6), 1);
        bg.style.opacity = String(1 - progress);
        // Pause video when fully scrolled past to save GPU/CPU
        if (vid) {
          if (progress >= 1 && !vid.paused) vid.pause();
          else if (progress < 1 && vid.paused) vid.play();
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.section}>
      {/* Video background — fades out on scroll */}
      <div ref={bgRef} className={styles.videoBg}>
        <video
          ref={videoRef}
          className={styles.video}
          src="/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
        <div className={styles.vignette} />
      </div>

      <div className={styles.contentFadeIn}>
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

      </div>
    </section>
  );
}
