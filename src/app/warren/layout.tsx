import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Remodeling in Warren, NJ | Bathrooms, Kitchens & Basements | Modern Master",
  description:
    "Custom home remodels for Warren Township, NJ — luxury bathrooms, kitchen renovations, finished basements with home theaters and wet bars. Licensed, insured, 20+ years.",
  alternates: {
    canonical: "/warren",
  },
  openGraph: {
    title: "Home Remodeling in Warren, NJ | Modern Master",
    description:
      "Custom home remodels for Warren Township, NJ — luxury bathrooms, kitchens, and finished basements.",
    url: "/warren",
    type: "website",
  },
};

export default function WarrenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
