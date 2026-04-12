import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Villkor",
  description: "Allmänna villkor för Avtryck Digitals tjänster.",
};

export default function VillkorPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
          Allmänna villkor
        </h1>
        <p className="text-sm text-white/50 mb-10">Senast uppdaterad: April 2025</p>

        <div className="glass rounded-2xl p-8 border border-white/15 space-y-6 text-sm text-white/75 leading-relaxed">
          <p>
            Vi håller på att uppdatera våra allmänna villkor för att säkerställa att de är tydliga
            och rättvisa för alla parter.
          </p>
          <p>
            Under tiden är du välkommen att kontakta oss direkt om du har frågor om våra tjänster
            eller samarbetsvillkor.
          </p>
          <div className="pt-2 border-t border-white/10">
            <p className="text-white/50 text-xs mb-1">Kontakta oss</p>
            <a
              href="mailto:kontakt@avtryckdigital.se"
              className="text-white hover:text-white/80 transition-colors duration-200 font-medium"
            >
              kontakt@avtryckdigital.se
            </a>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors duration-200">
            ← Tillbaka till startsidan
          </Link>
        </div>
      </div>
    </div>
  );
}
