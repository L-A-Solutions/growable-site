import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        "matcha-deep": "#122B14",
        "matcha-mid": "#1A3D1C",
        "pink-door": "#F2A7B5",
        "pink-door-dark": "#E8849A",
        "surface": "#111111",
        "surface-2": "#181818",
        "border-subtle": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.7" },
        },
        "border-glow": {
          "0%, 100%": { borderColor: "rgba(242, 167, 181, 0.2)" },
          "50%": { borderColor: "rgba(242, 167, 181, 0.6)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "border-glow": "border-glow 3s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
