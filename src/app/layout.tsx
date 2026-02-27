import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "Modern Master | Premium Home Remodeling in New Jersey",
  description:
    "Transform your home with Modern Master — Central New Jersey's premier remodeling contractor. Specializing in luxury bathrooms, kitchens, and full renovations. 20+ years of craftsmanship.",
  openGraph: {
    title: "Modern Master | Premium Home Remodeling in New Jersey",
    description:
      "Transform your home with Modern Master — Central New Jersey's premier remodeling contractor. Specializing in luxury bathrooms, kitchens, and full renovations. 20+ years of craftsmanship.",
    url: "https://modern-master.com",
    siteName: "Modern Master",
    images: [
      {
        url: "/photos/after/bathroom-after-3.jpg",
        width: 1200,
        height: 630,
        alt: "Modern Master - Premium Home Remodeling in New Jersey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${playfairDisplay.variable} font-sans bg-background-primary text-text-primary antialiased selection:bg-accent-GOLD selection:text-background-primary`}
      >
        {children}
      </body>
    </html>
  );
}
