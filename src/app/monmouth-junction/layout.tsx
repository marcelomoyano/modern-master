import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom Remodeling in Monmouth Junction, NJ | Modern Master",
  description:
    "Bathroom remodeling in Monmouth Junction, NJ. Two finished Monmouth Junction bathrooms, before and after — the larger one done in four weeks.",
  alternates: {
    canonical: "/monmouth-junction",
  },
  openGraph: {
    title: "Bathroom Remodeling in Monmouth Junction, NJ | Modern Master",
    description:
      "Bathroom remodeling in Monmouth Junction, NJ. Two finished Monmouth Junction bathrooms, before and after — the larger one done in four weeks.",
    url: "/monmouth-junction",
    type: "website",
    images: ["/photos/after/bathroom-after-2.jpg"],
  },
};

export default function MonmouthJunctionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
