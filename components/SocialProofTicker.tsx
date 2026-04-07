"use client";

const items = [
  "Fast delivery",
  "Mobile-ready",
  "SEO foundation included",
  "Hosted & maintained",
  "Real support",
  "Affordable pricing",
  "Small business friendly",
  "Launched in days",
  "No long contracts",
  "Swedish studio",
];

const doubled = [...items, ...items];

export default function SocialProofTicker() {
  return (
    <div className="py-10 overflow-hidden relative border-y border-white/5">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="flex gap-3 w-max animate-ticker">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 bg-white/[0.025]"
          >
            <span className="w-1 h-1 rounded-full bg-pink-door/60" />
            <span className="text-xs text-white/35 whitespace-nowrap">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
