"use client";

import Link from "next/link";
import { Zap, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const links = {
  Company: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Website Design", href: "/services#websites" },
    { label: "Hosting", href: "/services#hosting" },
    { label: "Online Visibility", href: "/services#seo" },
    { label: "Support", href: "/services#support" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer ref={ref} className="relative border-t border-white/6 mt-16 overflow-hidden">
      {/* Subtle bottom glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px]"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(18,43,20,0.5) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 py-16">
        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16"
        >
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 cursor-pointer w-fit">
              <div className="w-7 h-7 rounded-lg bg-pink-door/10 border border-pink-door/30 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-pink-door" strokeWidth={2.5} />
              </div>
              <span className="font-semibold text-sm text-white">Growable</span>
            </Link>
            <p className="text-xs text-white/30 leading-relaxed max-w-[180px]">
              Web design, hosting, and online visibility for small businesses.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-pink-door hover:text-pink-door-dark transition-colors cursor-pointer"
            >
              Start a project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <span className="text-[11px] font-semibold tracking-wider uppercase text-white/20 mb-4 block">
                {group}
              </span>
              <ul className="flex flex-col gap-2.5">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-xs text-white/40 hover:text-white/80 transition-colors duration-200 cursor-pointer"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-white/5"
        >
          <span className="text-[11px] text-white/20">
            © {new Date().getFullYear()} Growable. All rights reserved.
          </span>
          <span className="text-[11px] text-white/15">
            Two students. Real websites. Honest prices.
          </span>
        </motion.div>
      </div>
    </footer>
  );
}
