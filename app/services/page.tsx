"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Server,
  Search,
  Headphones,
  Cpu,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

const services = [
  {
    id: "websites",
    icon: Globe,
    label: "Website Design & Build",
    accent: "#F2A7B5",
    tagline: "Your corner of the internet, done properly.",
    description:
      "We design and build websites that look great, load fast, and work on every device. Whether you need a simple one-pager or a full multi-page site, we build it from scratch — no templates, no shortcuts.",
    includes: [
      "Custom design tailored to your brand",
      "Mobile-first, responsive layout",
      "Fast load times out of the box",
      "Contact forms and basic integrations",
      "Launch-ready in 1–2 weeks",
    ],
  },
  {
    id: "hosting",
    icon: Server,
    label: "Hosting & Maintenance",
    accent: "#a5f3b0",
    tagline: "Always online. Always up to date.",
    description:
      "We host your site on reliable infrastructure and handle all the technical upkeep — security patches, software updates, backups, and minor content changes. You focus on your business.",
    includes: [
      "Managed hosting setup",
      "SSL certificate included",
      "Regular backups",
      "Security & software updates",
      "Small content changes on request",
    ],
  },
  {
    id: "seo",
    icon: Search,
    label: "Online Visibility",
    accent: "#93c5fd",
    tagline: "Show up when people search for you.",
    description:
      "We give your site a solid SEO foundation and set up your Google Business profile — the basics that actually make a difference for local businesses trying to get found.",
    includes: [
      "On-page SEO (titles, meta, structure)",
      "Google Business Profile setup",
      "Image optimisation & alt text",
      "Sitemap & robots.txt",
      "Basic performance for search ranking",
    ],
  },
  {
    id: "support",
    icon: Headphones,
    label: "Ongoing Support",
    accent: "#fcd34d",
    tagline: "We pick up the phone.",
    description:
      "Got a question? Need to update something? Just reach out. We reply fast and fix things without making it complicated. No ticket system, no waiting in a queue — just two people who care.",
    includes: [
      "Direct contact via phone, email, or text",
      "Quick response times",
      "Content and copy updates",
      "Bug fixes",
      "Advice on what to do next",
    ],
  },
  {
    id: "systems",
    icon: Cpu,
    label: "Systems & Automation",
    accent: "#c4b5fd",
    tagline: "Cut the admin, keep the focus.",
    description:
      "If you're spending hours on repetitive tasks, we can help. We set up simple tools — booking forms, automated email replies, CRM connections — that save you time without the complexity.",
    includes: [
      "Booking and enquiry form automation",
      "Email autoresponders",
      "CRM integrations (e.g. Notion, HubSpot)",
      "Simple AI tools for content or responses",
      "Custom to your workflow",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-24 overflow-hidden">
      {/* Page hero */}
      <section className="px-4 max-w-4xl mx-auto text-center mb-20">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[400px] -z-10"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(18,43,20,0.35) 0%, transparent 70%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-7"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 text-xs text-white/45">
            What we do
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gradient leading-tight mb-5"
        >
          Everything your business
          <br />
          <span className="text-gradient-pink">needs to be online.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-white/40 max-w-sm mx-auto leading-relaxed mb-8"
        >
          We keep it straightforward. Here&apos;s exactly what we offer, what&apos;s
          included, and how we work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22 }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-door text-[#0A0A0A] text-sm font-semibold hover:bg-pink-door-dark transition-colors duration-200 cursor-pointer"
          >
            Talk to us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </section>

      {/* Service cards */}
      <section className="px-4 max-w-4xl mx-auto flex flex-col gap-4 mb-20">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <motion.div
              key={svc.id}
              id={svc.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass rounded-2xl p-7 md:p-8 grid md:grid-cols-2 gap-7 items-start"
            >
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/8"
                    style={{ background: `${svc.accent}12` }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: svc.accent }}
                      strokeWidth={1.8}
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium tracking-wider uppercase text-white/25 block">
                      {svc.label}
                    </span>
                  </div>
                </div>

                <h2 className="text-lg font-semibold text-white mb-3 leading-snug">
                  {svc.tagline}
                </h2>
                <p className="text-sm text-white/40 leading-relaxed">{svc.description}</p>
              </div>

              {/* Right — what's included */}
              <div>
                <span className="text-[11px] font-semibold tracking-wider uppercase text-white/20 mb-4 block">
                  What&apos;s included
                </span>
                <ul className="flex flex-col gap-3">
                  {svc.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: svc.accent }}
                        strokeWidth={2}
                      />
                      <span className="text-sm text-white/50">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.45 }}
          className="glass rounded-2xl p-10 text-center border border-pink-door/12 relative overflow-hidden"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(242,167,181,0.04) 0%, transparent 70%)",
            }}
          />
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 leading-tight">
            Not sure what you need?
          </h2>
          <p className="text-sm text-white/40 mb-7 max-w-xs mx-auto leading-relaxed">
            Just reach out. We&apos;ll have a quick chat and figure out the right
            starting point together.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-door text-[#0A0A0A] text-sm font-semibold hover:bg-pink-door-dark transition-colors duration-200 cursor-pointer"
          >
            Get in touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
