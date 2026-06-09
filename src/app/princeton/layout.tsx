import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom & Kitchen Remodeling in Princeton, NJ | Modern Master",
  description:
    "Premium bathroom and kitchen remodeling for Princeton, NJ homeowners. Owner-operated craftsmanship, fully licensed and insured. Schedule a free consultation.",
  alternates: {
    canonical: "/princeton",
  },
  openGraph: {
    title: "Bathroom & Kitchen Remodeling in Princeton, NJ | Modern Master",
    description:
      "Premium bathroom and kitchen remodeling for Princeton, NJ homeowners. Owner-operated craftsmanship, fully licensed and insured.",
    url: "/princeton",
    type: "website",
    images: ["/photos/after/bathroom-after-1.jpg"],
  },
};

export default function PrincetonLayout({ children }: { children: React.ReactNode }) {
  return children;
}
