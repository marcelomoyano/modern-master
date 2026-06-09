import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

const SITE_URL = "https://modern-master.com";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Modern Master | Premium Home Remodeling in New Jersey",
  description:
    "Transform your home with Modern Master — Central New Jersey's premier remodeling contractor. Specializing in luxury bathrooms, kitchens, and full renovations. 20+ years of craftsmanship.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Modern Master | Premium Home Remodeling in New Jersey",
    description:
      "Transform your home with Modern Master — Central New Jersey's premier remodeling contractor. Specializing in luxury bathrooms, kitchens, and full renovations. 20+ years of craftsmanship.",
    url: SITE_URL,
    siteName: "Modern Master",
    images: [
      {
        url: "/photos/after/bathroom-after-3.jpg",
        width: 1200,
        height: 630,
        alt: "Modern Master — Premium Home Remodeling in New Jersey",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Master | Premium Home Remodeling in New Jersey",
    description:
      "Central New Jersey's premier remodeling contractor — luxury bathrooms, kitchens, and full renovations.",
    images: ["/photos/after/bathroom-after-3.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Modern Master",
  description:
    "Premium home remodeling in Central New Jersey. Specializing in bathrooms, kitchens, finished basements, and custom carpentry.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/photos/after/bathroom-after-3.jpg`,
  telephone: "+1-732-694-9197",
  email: "geza@modern-master.com",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "69 Nostrand Rd",
    addressLocality: "Hillsborough",
    addressRegion: "NJ",
    postalCode: "08844",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.5476334,
    longitude: -74.6041505,
  },
  areaServed: [
    "Hillsborough, NJ",
    "Princeton, NJ",
    "Warren, NJ",
    "Morristown, NJ",
    "Flemington, NJ",
    "Bridgewater, NJ",
    "Somerset, NJ",
    "Bernardsville, NJ",
  ].map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${playfairDisplay.variable} font-sans bg-background-primary text-text-primary antialiased selection:bg-accent-GOLD selection:text-background-primary`}
      >
        {children}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
