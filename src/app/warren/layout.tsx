import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom & Kitchen Remodeling in Warren, NJ | Modern Master",
  description:
    "Luxury bathroom and kitchen remodeling for Warren, NJ homeowners. Owner-operated, licensed and insured craftsmanship. Schedule a free consultation.",
  alternates: {
    canonical: "/warren",
  },
  openGraph: {
    title: "Bathroom & Kitchen Remodeling in Warren, NJ | Modern Master",
    description:
      "Luxury bathroom and kitchen remodeling for Warren, NJ homeowners. Owner-operated, licensed and insured craftsmanship.",
    url: "/warren",
    type: "website",
    images: ["/photos/after/bathroom-after-2.jpg"],
  },
};

export default function WarrenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
