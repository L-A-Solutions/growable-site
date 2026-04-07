"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, MessageSquare, Clock, Globe } from "lucide-react";



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

export default function ContactPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggle = (s: string) =>
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

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
        className="pointer-events-none fixed inset-x-0 bottom-0 h-[500px] -z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(18,43,20,0.35) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <span className="text-[11px] font-medium tracking-widest uppercase text-white/25 mb-3 block">
            Kontakt
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gradient leading-tight mb-3">
            Låt oss prata om ditt projekt.
          </h1>
          <p className="text-sm text-white/40 max-w-md leading-relaxed">
            Fyll i formuläret så hör vi av oss inom en dag. Eller skicka ett
            meddelande direkt — vi är inte formella.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="glass rounded-2xl p-10 text-center border border-pink-door/15 flex flex-col items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-pink-door/10 border border-pink-door/25 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-pink-door" strokeWidth={1.8} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white mb-2">
                    Meddelande mottaget!
                  </h2>
                  <p className="text-sm text-white/40 max-w-xs leading-relaxed">
                    Vi läser det idag och svarar inom en arbetsdag. Hörs snart.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-7 flex flex-col gap-5 border border-white/8"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs text-white/40">
                      Ditt namn
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Sara"
                      className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/8 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-pink-door/35 transition-colors duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs text-white/40">
                      E-post
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="sara@dittforetag.se"
                      className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/8 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-pink-door/35 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="business" className="text-xs text-white/40">
                    Företagsnamn{" "}
                    <span className="text-white/20">(valfritt)</span>
                  </label>
                  <input
                    id="business"
                    type="text"
                    placeholder="Saras Bageri"
                    className="px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/8 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-pink-door/35 transition-colors duration-200"
                  />
                </div>

               

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs text-white/40">
                    Berätta lite mer
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Vi driver ett litet café och behöver en enkel hemsida med meny, öppettider och ett kontaktformulär..."
                    className="px-4 py-3 rounded-xl bg-white/[0.04] border border-white/8 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-pink-door/35 transition-colors duration-200 resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-pink-door text-[#0A0A0A] text-sm font-semibold hover:bg-pink-door-dark transition-colors duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
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
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {[
              {
                icon: MessageSquare,
                title: "Vi svarar inom en dag",
                body: "Vanligtvis samma dag. Vi läser allt själva.",
              },
              {
                icon: Clock,
                title: "De flesta sajter lanseras inom 1–2 veckor",
                body: "När vi kommit överens om scope kör vi snabbt.",
              },
              {
                icon: Globe,
                title: "Baserade i Sverige",
                body: "Vi jobbar på distans och kommunicerar på svenska eller engelska.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                  className="glass rounded-2xl p-4 flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/8 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-white/40" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white mb-0.5">{item.title}</h4>
                    <p className="text-xs text-white/35 leading-relaxed">{item.body}</p>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="glass rounded-2xl p-5 flex flex-col gap-4"
            >
              <span className="text-[11px] font-semibold tracking-wider uppercase text-white/20">
                Vanliga frågor
              </span>
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <p className="text-xs font-medium text-white/60 mb-1">{faq.q}</p>
                  <p className="text-xs text-white/35 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
