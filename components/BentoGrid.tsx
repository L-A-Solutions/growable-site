"use client";

import { motion } from "framer-motion";
import { Globe, Server, Search, Headphones, Cpu, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "websites",
    icon: Globe,
    label: "Website Design & Build",
    headline: "A site you're proud to share.",
    body: "Clean, fast, mobile-ready websites built from scratch. We handle design, development, and launch — you get a site that looks great and actually works.",
    accent: "#F2A7B5",
    size: "large",
  },
  {
    id: "hosting",
    icon: Server,
    label: "Hosting & Maintenance",
    headline: "We keep the lights on.",
    body: "Reliable hosting, security updates, and ongoing tweaks — so you never have to think about it.",
    accent: "#a5f3b0",
    size: "medium",
  },
  {
    id: "seo",
    icon: Search,
    label: "Online Visibility",
    headline: "Get found on Google.",
    body: "Basic SEO, Google Business setup, and structured content so local customers can actually find you.",
    accent: "#93c5fd",
    size: "medium",
  },
  {
    id: "support",
    icon: Headphones,
    label: "Ongoing Support",
    headline: "Real help, real people.",
    body: "Text, call, or email us. We respond quickly and fix things fast — no ticket queues.",
    accent: "#fcd34d",
    size: "small",
  },
  {
    id: "systems",
    icon: Cpu,
    label: "Systems & Automation",
    headline: "Less admin, more focus.",
    body: "Simple tools and automations that cut repetitive work — booking forms, email flows, CRM integrations.",
    accent: "#c4b5fd",
    size: "small",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;
  const isLarge = service.size === "large";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
      className={`group relative glass glass-hover rounded-2xl p-6 flex flex-col gap-4 cursor-pointer overflow-hidden
        ${isLarge ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      {/* Subtle border highlight on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: `inset 0 0 0 1px ${service.accent}20` }}
      />

      {/* Icon */}
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/8"
        style={{ background: `${service.accent}12` }}
      >
        <Icon className="w-4 h-4" style={{ color: service.accent }} strokeWidth={1.8} />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-medium tracking-wider uppercase text-white/25">
          {service.label}
        </span>
        <h3
          className={`font-semibold tracking-tight text-white leading-snug ${
            isLarge ? "text-xl sm:text-2xl" : "text-base"
          }`}
        >
          {service.headline}
        </h3>
      </div>

      <p className="text-sm text-white/40 leading-relaxed flex-1">{service.body}</p>

      <div className="flex items-center gap-1 text-xs text-white/25 group-hover:text-white/50 transition-colors duration-200">
        <span>Learn more</span>
        <ArrowUpRight className="w-3 h-3" />
      </div>
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <section className="px-4 py-20 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.45 }}
        className="mb-12"
      >
        <span className="text-[11px] font-medium tracking-widest uppercase text-white/25 mb-3 block">
          What we offer
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gradient leading-tight">
          Everything a small business needs online.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-auto gap-3">
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
