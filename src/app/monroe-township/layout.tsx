import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom Remodeling in Monroe Township, NJ | Modern Master",
  description:
    "Bathroom remodeling in Monroe Township, Middlesex County — repeat work in Concordia and 55+ communities, reviewed by Monroe Township homeowners.",
  alternates: {
    canonical: "/monroe-township",
  },
  openGraph: {
    title: "Bathroom Remodeling in Monroe Township, NJ | Modern Master",
    description:
      "Bathroom remodeling in Monroe Township, Middlesex County — repeat work in Concordia and 55+ communities, reviewed by Monroe Township homeowners.",
    url: "/monroe-township",
    type: "website",
    images: ["/portfolio/bathrooms/20.jpg"],
  },
};

export default function MonroeTownshipLayout({ children }: { children: React.ReactNode }) {
  return children;
}
