"use client";

import { m } from "framer-motion";
import {
  Globe,
  Server,
  Search,
  Headphones,
  Cpu,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "websites",
    icon: Globe,
    label: "Webbdesign & Utveckling",
    accent: "#F2A7B5",
    tagline: "Din plats på nätet, gjord ordentligt.",
    description:
      "Vi designar och bygger hemsidor som ser bra ut, laddar snabbt och fungerar på alla enheter. Oavsett om du behöver en enkel sida eller en fullständig flersidessajt bygger vi den från grunden — inga mallar, inga genvägar.",
    includes: [
      "Anpassad design utifrån ditt varumärke",
      "Mobilanpassad layout",
      "Snabba laddningstider från start",
      "Kontaktformulär och grundläggande integrationer",
      "Klar att lansera inom 1–2 veckor",
    ],
  },
  {
    id: "hosting",
    icon: Server,
    label: "Hosting & Underhåll",
    accent: "#a5f3b0",
    tagline: "Alltid online. Alltid uppdaterad.",
    description:
      "Vi hostar din sajt på pålitlig infrastruktur och sköter allt tekniskt underhåll — säkerhetsuppdateringar, säkerhetskopior och mindre innehållsändringar. Du fokuserar på ditt företag.",
    includes: [
      "Hanterad hosting",
      "SSL-certifikat ingår",
      "Regelbundna säkerhetskopior",
      "Säkerhets- och programvaruuppdateringar",
      "Mindre innehållsändringar på begäran",
    ],
  },
  {
    id: "seo",
    icon: Search,
    label: "Synlighet på nätet",
    accent: "#93c5fd",
    tagline: "Syns när folk söker efter dig.",
    description:
      "Vi ger din sajt en solid SEO-grund och sätter upp din Google Business-profil — det grundläggande som faktiskt gör skillnad för lokala företag som vill synas.",
    includes: [
      "On-page SEO (titlar, meta, struktur)",
      "Google Business-profil setup",
      "Bildoptimering och alt-text",
      "Sitemap och robots.txt",
      "Grundläggande prestanda för sökmotorrankning",
    ],
  },
  {
    id: "support",
    icon: Headphones,
    label: "Löpande Support",
    accent: "#fcd34d",
    tagline: "Vi svarar i telefon.",
    description:
      "Har du en fråga? Behöver du uppdatera något? Hör av dig. Vi svarar snabbt och löser saker utan att göra det krångligt. Inget ärendesystem, ingen kö — bara två personer som bryr sig.",
    includes: [
      "Direktkontakt via telefon, e-post eller SMS",
      "Snabba svarstider",
      "Innehålls- och textuppdateringar",
      "Buggfixar",
      "Råd om vad du bör göra härnäst",
    ],
  },
  {
    id: "systems",
    icon: Cpu,
    label: "System & Automatisering",
    accent: "#c4b5fd",
    tagline: "Mindre admin, mer fokus.",
    description:
      "Lägger du timmar på repetitivt arbete kan vi hjälpa till. Vi sätter upp enkla verktyg — bokningsformulär, automatiska e-postsvar, CRM-kopplingar — som sparar tid utan att bli komplicerade.",
    includes: [
      "Automatisering av boknings- och förfrågningsformulär",
      "Automatiska e-postsvar",
      "CRM-integrationer (t.ex. Notion, HubSpot)",
      "Enkla AI-verktyg för innehåll eller svar",
      "Anpassat till ditt arbetsflöde",
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
              "radial-gradient(ellipse at 50% 0%, rgba(242,167,181,0.09) 0%, transparent 70%)",
          }}
        />

        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-7"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/10 text-xs text-white/70">
            Vad vi gör
          </span>
        </m.div>

        <m.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gradient leading-tight mb-5"
        >
          Allt ditt företag behöver
          <br />
          <span className="text-gradient-pink">för att synas på nätet.</span>
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm text-white/75 max-w-sm mx-auto leading-relaxed mb-8"
        >
          Vi håller det enkelt. Här är exakt vad vi erbjuder, vad som ingår och
          hur vi arbetar.
        </m.p>

        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22 }}
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-door text-[#0A0A0A] text-sm font-semibold hover:bg-pink-door-dark transition-colors duration-200 cursor-pointer"
          >
            Prata med oss
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </m.div>
      </section>

      {/* Service cards */}
      <section className="px-4 max-w-4xl mx-auto flex flex-col gap-4 mb-20">
        {services.map((svc, i) => {
          const Icon = svc.icon;
          return (
            <m.div
              key={svc.id}
              id={svc.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass rounded-2xl p-7 md:p-8"
            >
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
                <span className="text-[11px] font-medium tracking-wider uppercase text-white/55">
                  {svc.label}
                </span>
              </div>

              <h2 className="text-lg font-semibold text-white mb-3 leading-snug">
                {svc.tagline}
              </h2>
              <p className="text-sm text-white/75 leading-relaxed">{svc.description}</p>
            </m.div>
          );
        })}
      </section>

      {/* Bottom CTA */}
      <section className="px-4 max-w-2xl mx-auto">
        <m.div
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
            Osäker på vad du behöver?
          </h2>
          <p className="text-sm text-white/75 mb-7 max-w-xs mx-auto leading-relaxed">
            Hör av dig. Vi tar ett snabbt samtal och räknar ut rätt startpunkt
            tillsammans.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pink-door text-[#0A0A0A] text-sm font-semibold hover:bg-pink-door-dark transition-colors duration-200 cursor-pointer"
          >
            Kontakta oss
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </m.div>
      </section>
    </div>
  );
}
