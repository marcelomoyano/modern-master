import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Bathroom, Kitchen & Basement Remodels in NJ | Modern Master",
  description:
    "Browse Modern Master's portfolio of completed bathroom remodels, kitchen renovations, finished basements, and custom carpentry across Central New Jersey.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio | Modern Master",
    description:
      "Browse completed bathroom remodels, kitchen renovations, finished basements, and custom carpentry across Central New Jersey.",
    url: "/portfolio",
    type: "website",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
