import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom & Kitchen Remodeling in Princeton, NJ | Modern Master",
  description:
    "Premium bathroom remodels, kitchen renovations, and custom carpentry for Princeton, NJ homeowners. 20+ years of craftsmanship — licensed, insured, and Princeton-experienced.",
  alternates: {
    canonical: "/princeton",
  },
  openGraph: {
    title: "Bathroom & Kitchen Remodeling in Princeton, NJ | Modern Master",
    description:
      "Premium bathroom remodels, kitchen renovations, and custom carpentry for Princeton, NJ homeowners.",
    url: "/princeton",
    type: "website",
  },
};

export default function PrincetonLayout({ children }: { children: React.ReactNode }) {
  return children;
}
