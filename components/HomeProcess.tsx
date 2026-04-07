"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare, Paintbrush, Rocket } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    label: "Talk to us",
    headline: "Tell us about your business.",
    body: "We have a short call or chat to understand what you do, who you serve, and what you need from a website. No jargon, no sales pitch.",
    accent: "#a5f3b0",
  },
  {
    step: "02",
    icon: Paintbrush,
    label: "We design & build",
    headline: "You get a site in days, not months.",
    body: "We design, build, and test everything. You can give feedback at any point. Most sites are ready to launch within 1–2 weeks.",
    accent: "#93c5fd",
  },
  {
    step: "03",
    icon: Rocket,
    label: "Launch & support",
    headline: "Go live — we stick around.",
    body: "We handle launch, set up hosting, and stay available for updates and questions. You're never left on your own.",
    accent: "#F2A7B5",
  },
];

export default function HomeProcess() {
  return (
    <section className="relative px-4 py-20 max-w-5xl mx-auto">
      <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        className="text-center mb-12"
      >
        <span className="text-[11px] font-medium tracking-widest uppercase text-white/25 mb-3 block">
          How it works
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gradient leading-tight">
          Simple from start to launch.
        </h2>
        <p className="mt-3 text-sm text-white/40 max-w-sm mx-auto leading-relaxed">
          No complicated process. You talk to the people actually doing the work.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-widest text-white/15">
                  {s.step}
                </span>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/8"
                  style={{ background: `${s.accent}12` }}
                >
                  <Icon className="w-4 h-4" style={{ color: s.accent }} strokeWidth={1.8} />
                </div>
              </div>

              <div>
                <span className="text-[11px] font-medium tracking-wider uppercase text-white/25 block mb-1.5">
                  {s.label}
                </span>
                <h3 className="text-base font-semibold text-white leading-snug">
                  {s.headline}
                </h3>
              </div>

              <p className="text-sm text-white/40 leading-relaxed">{s.body}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, delay: 0.35 }}
        className="mt-10 flex justify-center"
      >
        <Link
          href="/contact"
          className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-door text-[#0A0A0A] text-sm font-semibold hover:bg-pink-door-dark transition-colors duration-200 cursor-pointer"
        >
          Start a project
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
        </Link>
      </motion.div>
    </section>
  );
}
