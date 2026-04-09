import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Avtryck Digital — Hemsidor åt företag",
    template: "%s | Avtryck Digital",
  },
  description:
    "Vi designar och bygger snabba, professionella hemsidor för småföretag. Hosting, support och synlighet på nätet ingår. Baserade i Sverige.",
  keywords: ["webbdesign", "hemsida småföretag", "webbdesign Sverige", "hosting", "synlighet på nätet"],
  openGraph: {
    type: "website",
    locale: "sv_SV",
    siteName: "Avtryck Digital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`dark ${inter.variable}`}>
      <body className="bg-background text-white antialiased">
        <MotionProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
