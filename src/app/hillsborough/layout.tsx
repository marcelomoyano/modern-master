import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom & Kitchen Remodeling in Hillsborough, NJ | Modern Master",
  description:
    "Bathroom and kitchen remodeling in Hillsborough, NJ — the town Modern Master is based in. Owner-operated, licensed and insured. Free consultation.",
  alternates: {
    canonical: "/hillsborough",
  },
  openGraph: {
    title: "Bathroom & Kitchen Remodeling in Hillsborough, NJ | Modern Master",
    description:
      "Bathroom and kitchen remodeling in Hillsborough, NJ — the town Modern Master is based in. Owner-operated, licensed and insured.",
    url: "/hillsborough",
    type: "website",
    images: ["/portfolio/bathrooms/19.jpg"],
  },
};

export default function HillsboroughLayout({ children }: { children: React.ReactNode }) {
  return children;
}
