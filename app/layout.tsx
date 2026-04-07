import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: {
    default: "Growable — Hemsidor åt företag",
    template: "%s | Growable",
  },
  description:
    "Vi designar och bygger snabba, professionella hemsidor för småföretag. Hosting, support och synlighet på nätet ingår. Baserade i Sverige.",
  keywords: ["webbdesign", "hemsida småföretag", "webbdesign Sverige", "hosting", "synlighet på nätet"],
  openGraph: {
    type: "website",
    locale: "sv_SV",
    siteName: "Growable",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-background text-white antialiased">
        <AnimatedBackground />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
