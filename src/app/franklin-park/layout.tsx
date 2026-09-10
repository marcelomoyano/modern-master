import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom & Kitchen Remodeling in Franklin Park, NJ | Modern Master",
  description:
    "Bathroom and kitchen remodeling in Franklin Park, NJ. One Franklin Park family has hired us for four projects in their townhouse. Licensed and insured.",
  alternates: {
    canonical: "/franklin-park",
  },
  openGraph: {
    title: "Bathroom & Kitchen Remodeling in Franklin Park, NJ | Modern Master",
    description:
      "Bathroom and kitchen remodeling in Franklin Park, NJ. One Franklin Park family has hired us for four projects in their townhouse. Licensed and insured.",
    url: "/franklin-park",
    type: "website",
    images: ["/portfolio/kitchens/02.jpg"],
  },
};

export default function FranklinParkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
