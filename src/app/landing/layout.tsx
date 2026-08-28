import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";

/**
 * Fonts for the /landing lead page only. The rest of the site uses
 * Playfair Display + DM Sans from the root layout; those variables stay on
 * <html>, so anything here that doesn't opt into font-display/font-grotesk
 * still falls back to the site typefaces.
 */
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Modern Master — Bathroom Lead Page (Internal)",
  description:
    "Internal preview of the bathroom lead page. Not for public traffic.",
  // Unpublished draft: keep it out of Google entirely. /landing is also
  // disallowed in src/app/robots.ts.
  robots: { index: false, follow: false, nocache: true },
};

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${instrumentSerif.variable} ${manrope.variable}`}>
      {children}
    </div>
  );
}
