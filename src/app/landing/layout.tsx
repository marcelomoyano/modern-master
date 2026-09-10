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

// This is what a homeowner sees in the browser tab after tapping an ad, and
// what Facebook shows if the link is shared, so it reads as the business —
// not as an internal preview.
export const metadata: Metadata = {
  title: "Bathroom Remodeling in Central New Jersey | Modern Master",
  description:
    "Twenty years of bathrooms in Central New Jersey, rated 5.0 across 32 Google reviews. Take the 40-second fit check and Geza calls you himself.",
  openGraph: {
    title: "The bathroom gets finished. Your house stays livable.",
    description:
      "Twenty years of bathrooms in Central New Jersey, rated 5.0 across 32 Google reviews.",
    url: "/landing/bathroom",
    type: "website",
    images: ["/photos/after/bathroom-after-2.jpg"],
  },
  // An ads page, not a search page: kept out of Google so it never competes
  // with the town pages. /landing is also disallowed in src/app/robots.ts.
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
