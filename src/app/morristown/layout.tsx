import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom & Kitchen Remodeling in Morristown, NJ | Modern Master",
  description:
    "Bathroom, kitchen, and custom carpentry remodels for Morristown, NJ. Experienced with historic homes, period trim restoration, and downtown condo renovations. Licensed and insured.",
  alternates: {
    canonical: "/morristown",
  },
  openGraph: {
    title: "Bathroom & Kitchen Remodeling in Morristown, NJ | Modern Master",
    description:
      "Bathroom, kitchen, and custom carpentry remodels for Morristown, NJ — including historic homes and downtown condos.",
    url: "/morristown",
    type: "website",
  },
};

export default function MorristownLayout({ children }: { children: React.ReactNode }) {
  return children;
}
