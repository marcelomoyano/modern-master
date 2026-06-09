import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leave a Google Review | Modern Master",
  description:
    "Worked with Modern Master? Share your experience on Google — your review helps other Central New Jersey homeowners find craftsmanship they can trust.",
  alternates: {
    canonical: "/review",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  return children;
}
