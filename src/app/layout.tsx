import type { Metadata } from "next";
import { Outfit, Manrope, IBM_Plex_Mono } from "next/font/google";
import { DemoBanner } from "@/components/DemoBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "@/styles/globals.css";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display-loaded",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body-loaded",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Canaray — Oral Radiology Vision POC",
    template: "%s · Canaray POC",
  },
  description:
    "A modern proof-of-concept website for Canaray: clearer patient and dentist journeys, interactive 3D reporting vision, and premium oral radiology experience.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body
        style={
          {
            ["--font-display" as string]: "var(--font-display-loaded), Outfit, sans-serif",
            ["--font-body" as string]: "var(--font-body-loaded), Manrope, sans-serif",
            ["--font-mono" as string]: "var(--font-mono-loaded), IBM Plex Mono, monospace",
          } as React.CSSProperties
        }
      >
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <DemoBanner />
        <Header />
        <main id="main" className="site-main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
