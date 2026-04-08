"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";


const CROSSFADE = 1.5; // seconds before end to start crossfade

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const vid1Ref = useRef<HTMLVideoElement>(null);
  const vid2Ref = useRef<HTMLVideoElement>(null);

  // Scroll fade
  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const heroH = bgRef.current.parentElement?.offsetHeight ?? window.innerHeight;
      const progress = Math.min(window.scrollY / (heroH * 0.6), 1);
      bgRef.current.style.opacity = String(1 - progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Crossfade loop
  useEffect(() => {
    const v1 = vid1Ref.current;
    const v2 = vid2Ref.current;
    if (!v1 || !v2) return;

    let fading = false;

    const check = (e: Event) => {
      const active = e.target as HTMLVideoElement;
      const inactive = active === v1 ? v2 : v1;
      if (!active.duration || fading) return;

      const remaining = active.duration - active.currentTime;
      if (remaining <= CROSSFADE) {
        fading = true;
        inactive.currentTime = 0;
        inactive.play().catch(() => {});
        inactive.style.opacity = "0.4";
        active.style.opacity = "0";

        setTimeout(() => {
          active.pause();
          active.currentTime = 0;
          fading = false;
        }, CROSSFADE * 1000 + 200);
      }
    };

    v1.addEventListener("timeupdate", check);
    v2.addEventListener("timeupdate", check);
    return () => {
      v1.removeEventListener("timeupdate", check);
      v2.removeEventListener("timeupdate", check);
    };
  }, []);

  return (
    <section className={styles.section}>
      {/* Video background — fades out on scroll */}
      <div ref={bgRef} className={styles.videoBg}>
        <video
          ref={vid1Ref}
          className={styles.video}
          src="/bg.mp4"
          autoPlay
          muted
          playsInline
          style={{ opacity: 0.4 }}
        />
        <video
          ref={vid2Ref}
          className={styles.video}
          src="/bg.mp4"
          muted
          playsInline
          style={{ opacity: 0 }}
        />
        <div className={styles.vignette} />
      </div>

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

      </motion.div>
    </section>
  );
}
