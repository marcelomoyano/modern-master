import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom & Kitchen Remodeling in Morristown, NJ | Modern Master",
  description:
    "Premium remodeling for Morristown, NJ homeowners — from historic homes to modern renovations. Owner-operated, licensed and insured. Free consultation.",
  alternates: {
    canonical: "/morristown",
  },
  openGraph: {
    title: "Bathroom & Kitchen Remodeling in Morristown, NJ | Modern Master",
    description:
      "Premium remodeling for Morristown, NJ homeowners — from historic homes to modern renovations. Owner-operated, licensed and insured.",
    url: "/morristown",
    type: "website",
    images: ["/photos/after/bathroom-after-4.jpg"],
  },
};

export default function MorristownLayout({ children }: { children: React.ReactNode }) {
  return children;
}
