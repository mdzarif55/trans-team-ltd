import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ttlrmk.com"),
  title: {
    default: "Trans Team Ltd. (TTL) | Premier International Freight & Logistics Bangladesh",
    template: "%s | Trans Team Ltd. (TTL)"
  },
  description: "Trans Team Ltd. (TTL) is an established international freight-forwarding and multi-modal logistics enterprise in Bangladesh. 18+ years experience in air & sea freight, licensed customs brokerage, heavy-lift project cargo, and specialized transport under RMK Group.",
  keywords: [
    "Trans Team Ltd",
    "TTL Bangladesh",
    "RMK Group logistics",
    "freight forwarding Bangladesh",
    "air freight Dhaka",
    "ocean freight Chittagong",
    "customs clearance Bangladesh",
    "project cargo heavy lift",
    "Khulna power plant logistics",
    "BAFFA freight forwarder",
    "FIATA Bangladesh",
    "IATA cargo agent Dhaka"
  ],
  authors: [{ name: "Trans Team Ltd." }],
  creator: "Trans Team Ltd. (TTL)",
  publisher: "Trans Team Ltd.",
  formatDetection: {
    email: true,
    telephone: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Trans Team Ltd. (TTL) | Moving Your Business Forward",
    description: "Reliable logistics solutions, professional freight forwarding, and seamless global connectivity. An RMK Group sister concern with 18+ years of industry leadership.",
    url: "https://ttlrmk.com",
    siteName: "Trans Team Ltd.",
    images: [
      {
        url: "/images/hero/hero-port.jpg",
        width: 1600,
        height: 600,
        alt: "Trans Team Ltd. Global Logistics & Freight Forwarding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "LogisticsService",
    "name": "Trans Team Ltd.",
    "alternateName": "TTL",
    "url": "https://ttlrmk.com",
    "logo": "https://ttlrmk.com/logos/logo-main.png",
    "description": "Progressive logistics management, multi-modal freight forwarding, licensed customs brokerage, and heavy lift project cargo in Bangladesh.",
    "parentOrganization": {
      "@type": "Organization",
      "name": "RMK Group"
    },
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "House # 04 (3rd Floor), Road # 07, Sector # 01, Uttara",
        "addressLocality": "Dhaka",
        "postalCode": "1230",
        "addressCountry": "BD"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "South Land Center (3rd Floor), 5 Agrabad C/A",
        "addressLocality": "Chittagong",
        "postalCode": "4100",
        "addressCountry": "BD"
      }
    ],
    "telephone": "+88027912990",
    "email": "info@ttlrmk.com"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased bg-white text-navy-900 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
