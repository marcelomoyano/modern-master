import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom & Kitchen Remodeling in North Brunswick, NJ | Modern Master",
  description:
    "Bathroom and kitchen remodeling for North Brunswick, NJ homeowners. Owner-operated, licensed and insured — the craftsman who quotes it is the one who builds it. Free consultation.",
  alternates: {
    canonical: "/north-brunswick",
  },
  openGraph: {
    title: "Bathroom & Kitchen Remodeling in North Brunswick, NJ | Modern Master",
    description:
      "Bathroom and kitchen remodeling for North Brunswick, NJ homeowners. Owner-operated, licensed and insured craftsmanship.",
    url: "/north-brunswick",
    type: "website",
    images: ["/photos/after/bathroom-after-3.jpg"],
  },
};

export default function NorthBrunswickLayout({ children }: { children: React.ReactNode }) {
  return children;
}
