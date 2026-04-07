"use client";

import { Globe, Server, Search, Headphones, Cpu, ArrowUpRight } from "lucide-react";
import styles from "./BentoGrid.module.css";

const services = [
  {
    id: "websites",
    icon: Globe,
    label: "Webbdesign & Utveckling",
    headline: "En sajt du är stolt över att dela.",
    body: "Snygga, snabba och mobilanpassade hemsidor byggda från grunden. Vi sköter design, utveckling och lansering — du får en sajt som ser bra ut och faktiskt fungerar.",
    accent: "#F2A7B5",
    size: "large",
  },
  {
    id: "hosting",
    icon: Server,
    label: "Hosting & Underhåll",
    headline: "Vi håller lamporna tända.",
    body: "Pålitlig hosting, säkerhetsuppdateringar och löpande justeringar — så att du aldrig behöver tänka på det.",
    accent: "#a5f3b0",
    size: "medium",
  },
  {
    id: "seo",
    icon: Search,
    label: "Synlighet på nätet",
    headline: "Syns på Google.",
    body: "Grundläggande SEO, Google Business-setup och strukturerat innehåll så att lokala kunder faktiskt hittar dig.",
    accent: "#93c5fd",
    size: "medium",
  },
  {
    id: "support",
    icon: Headphones,
    label: "Löpande Support",
    headline: "Riktig hjälp, riktiga människor.",
    body: "SMS, ring eller maila oss. Vi svarar snabbt och löser problem utan krångel — inga supportköer.",
    accent: "#fcd34d",
    size: "small",
  },
  {
    id: "systems",
    icon: Cpu,
    label: "System & Automatisering",
    headline: "Mindre admin, mer fokus.",
    body: "Enkla verktyg och automatiseringar som tar bort repetitivt arbete — bokningsformulär, e-postflöden, CRM-integrationer.",
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
    <div
      className={`${styles.card} ${isLarge ? styles.cardLarge : ""} ${styles.fadeIn}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className={styles.cardBorderGlow}
        style={{ boxShadow: `inset 0 0 0 1px ${service.accent}20` }}
      />
      <div className={styles.iconWrap} style={{ background: `${service.accent}12` }}>
        <Icon width={16} height={16} style={{ color: service.accent }} strokeWidth={1.8} />
      </div>
      <div>
        <span className={styles.cardLabel}>{service.label}</span>
        <h3 className={`${styles.cardTitle} ${isLarge ? styles.cardTitleLarge : styles.cardTitleSmall}`}>
          {service.headline}
        </h3>
      </div>
      <p className={styles.cardBody}>{service.body}</p>
      <div className={styles.cardMore}>
        <span>Läs mer</span>
        <ArrowUpRight width={12} height={12} />
      </div>
    </div>
  );
}

export default function BentoGrid() {
  return (
    <section className={styles.section}>
      <div className={`${styles.header} ${styles.fadeIn}`}>
        <span className={styles.eyebrow}>Vad vi erbjuder</span>
        <h2 className={styles.title}>Allt ett litet företag behöver på nätet.</h2>
      </div>
      <div className={styles.grid}>
        {services.map((service, i) => (
          <ServiceCard key={service.id} service={service} index={i} />
        ))}
      </div>
    </section>
  );
}
