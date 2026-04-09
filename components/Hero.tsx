"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";

const FADE_DURATION = 2.5; // seconds before end to start crossfade

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const vid1Ref = useRef<HTMLVideoElement>(null);
  const vid2Ref = useRef<HTMLVideoElement>(null);
  const scrolledAway = useRef(false);

  // Scroll fade + pause both videos when out of view
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const bg = bgRef.current;
        if (!bg) return;
        const heroH = bg.parentElement?.offsetHeight ?? window.innerHeight;
        const progress = Math.min(window.scrollY / (heroH * 0.6), 1);
        bg.style.opacity = String(1 - progress);

        const hidden = progress >= 1;
        if (hidden !== scrolledAway.current) {
          scrolledAway.current = hidden;
          for (const v of [vid1Ref.current, vid2Ref.current]) {
            if (!v) continue;
            if (hidden) v.pause();
            else if (parseFloat(v.style.opacity) > 0) v.play();
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Crossfade loop — CSS transition handles the fade, JS just flips opacity
  useEffect(() => {
    const v1 = vid1Ref.current;
    const v2 = vid2Ref.current;
    if (!v1 || !v2) return;

    let fading = false;

    const onTimeUpdate = (e: Event) => {
      const active = e.target as HTMLVideoElement;
      if (!active.duration || fading) return;
      if (active.duration - active.currentTime > FADE_DURATION) return;

      fading = true;
      const inactive = active === v1 ? v2 : v1;
      inactive.currentTime = 0;
      inactive.play().catch(() => {});

      // CSS transition handles smooth crossfade
      inactive.style.opacity = "0.4";
      active.style.opacity = "0";

      setTimeout(() => {
        active.pause();
        active.currentTime = 0;
        fading = false;
      }, FADE_DURATION * 1000);
    };

    v1.addEventListener("timeupdate", onTimeUpdate);
    v2.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      v1.removeEventListener("timeupdate", onTimeUpdate);
      v2.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, []);

  return (
    <section className={styles.section}>
      {/* Video background — crossfade loop, fades out on scroll */}
      <div ref={bgRef} className={styles.videoBg}>
        <video
          ref={vid1Ref}
          className={styles.video}
          src="/bg.mp4"
          autoPlay
          muted
          playsInline
          preload="metadata"
          style={{ opacity: 0.4 }}
        />
        <video
          ref={vid2Ref}
          className={styles.video}
          src="/bg.mp4"
          muted
          playsInline
          preload="none"
          style={{ opacity: 0 }}
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
