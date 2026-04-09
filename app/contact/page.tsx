"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Hur snabbt kan ni börja?",
    a: "Vanligtvis inom några dagar efter vårt första samtal.",
  },
  {
    q: "Vad kostar en hemsida?",
    a: "Det beror på vad du behöver. Vi ger dig en tydlig offert efter ett kort samtal — inga dolda avgifter.",
  },
  {
    q: "Behöver jag kunna något tekniskt?",
    a: "Inte alls. Vi sköter allt och förklarar saker på vanlig svenska.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-3.5 text-left gap-4 cursor-pointer"
      >
        <span className="text-sm font-medium text-white/90">{q}</span>
        <ChevronDown
          className="w-4 h-4 text-white/40 flex-shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-xs text-white/60 leading-relaxed pb-3.5">{a}</p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 overflow-hidden">
      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-[400px] -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(242,167,181,0.09) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-lg mx-auto px-4">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-12 text-center"
        >
          <span className="text-[11px] font-medium tracking-widest uppercase text-white/50 mb-3 block">
            Kontakt
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gradient leading-tight mb-3">
            Låt oss hjälpa dig
          </h1>
          <p className="text-sm text-white/75 leading-relaxed">
            Fyll i formuläret så återkommer vi till dig inom en arbetsdag för att boka in ett
            kostnadsfritt möte. Vi ser fram emot att jobba med er!
          </p>
        </m.div>

        {/* FAQ */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="glass rounded-2xl px-5 py-4 border border-white/15 mb-6"
        >
          <span className="text-[11px] font-semibold tracking-wider uppercase text-white/50 block mb-1">
            Vanliga frågor
          </span>
          {faqs.map((faq) => (
            <FaqItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </m.div>

        {/* Form */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
        >
          {submitted ? (
            <div className="glass rounded-2xl p-10 text-center border border-white/15 flex flex-col items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-[#F2A7B5]" strokeWidth={1.8} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">Meddelande mottaget!</h2>
                <p className="text-sm text-white/60 max-w-xs leading-relaxed">
                  Vi läser det idag och svarar inom en arbetsdag. Hörs snart.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-7 flex flex-col gap-5 border border-white/15"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs text-white/70 font-medium">Ditt namn</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Sara"
                    className="px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs text-white/70 font-medium">E-post</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="sara@dittforetag.se"
                    className="px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-xs text-white/70 font-medium">
                  Telefonnummer <span className="text-white/35 font-normal">(valfritt)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="070 000 00 00"
                  className="px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs text-white/70 font-medium">Berätta lite mer</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Ditt meddelande..."
                  className="px-4 py-3 rounded-xl bg-white/[0.06] border border-white/15 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors duration-200 resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F2A7B5] text-[#0A0A0A] text-sm font-semibold hover:bg-[#E8849A] transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    Skickar...
                  </>
                ) : (
                  <>
                    Bli kontaktad!
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </>
                )}
              </button>
            </form>
          )}
        </m.div>
      </div>
    </div>
  );
}
