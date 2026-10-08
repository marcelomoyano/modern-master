import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice | Modern Master",
  description:
    "What modern-master.com collects when you get in touch, what we do with it, and how to ask us to delete it. Modern Master Remodeling LLC, Hillsborough NJ.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
