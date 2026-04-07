"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Monitor, Headphones, Zap } from "lucide-react";

const pillars = [
  { icon: Monitor, label: "Websites that convert" },
  { icon: Headphones, label: "Real support, real people" },
  { icon: Zap, label: "Fast delivery" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Single subtle background glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(18,43,20,0.45) 0%, transparent 75%)",
          filter: "blur(50px)",
        }}
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-7"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 text-xs text-white/50">
          <span className="w-1.5 h-1.5 rounded-full bg-pink-door" />
          Web design &amp; digital growth — Sweden
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="text-center max-w-3xl text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]"
      >
        <span className="text-gradient">We build websites</span>
        <br />
        <span className="text-gradient-pink">that get you found.</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.16 }}
        className="mt-5 text-center max-w-md text-base text-white/45 leading-relaxed"
      >
        Growable is a two-person studio. We design and build fast, professional
        websites for small businesses — and stay by your side after launch.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.24 }}
        className="mt-9 flex flex-col sm:flex-row items-center gap-3"
      >
        <Link
          href="/contact"
          className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-door text-[#0A0A0A] text-sm font-semibold hover:bg-pink-door-dark transition-colors duration-200 cursor-pointer"
        >
          Get in touch
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
        </Link>
        <Link
          href="/services"
          className="px-5 py-2.5 rounded-xl glass border border-white/10 text-sm text-white/60 hover:text-white hover:border-white/20 transition-all duration-200 cursor-pointer"
        >
          What we do
        </Link>
      </motion.div>

      {/* Pillars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.38 }}
        className="mt-16 flex flex-col sm:flex-row items-center gap-3"
      >
        {pillars.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass border border-white/8 text-sm text-white/50"
          >
            <Icon className="w-4 h-4 text-white/30" strokeWidth={1.8} />
            {label}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
