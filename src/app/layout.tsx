import type { Metadata } from "next";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Janata Electric & Engineering Workshop",
    template: "%s | Janata Electric & Engineering Workshop",
  },

  description:
    "Professional marine engineering, ship repair, pipeline renewal, electrical automation and hydraulic services in Chattogram, Bangladesh.",

  keywords: [
    "Marine Engineering Bangladesh",
    "Ship Repair Chattogram",
    "Marine Workshop Chittagong",
    "Engine Overhauling Bangladesh",
    "Pipeline Renewal Bangladesh",
    "Marine Electrical Repair",
    "Hydraulic Repair Bangladesh",
  ],

  openGraph: {
    title: "Janata Electric & Engineering Workshop",
    description:
      "One-stop marine engineering and ship repair solutions in Chattogram since 1995.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "Janata Electric & Engineering Workshop",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Janata Electric & Engineering Workshop",
    description:
      "One-stop marine engineering and ship repair solutions in Chattogram since 1995.",
    images: ["/images/hero-home.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Janata Electric & Engineering Workshop",
    description:
      "Marine engineering, ship repair, pipeline renewal, electrical automation and hydraulic services.",
    foundingDate: "1995",
    telephone: ["+8801919319350", "+8801819319350"],
    email: "janata.electric.engineering1990@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "62 Strand Road, Bangla Bazar",
      addressLocality: "Chattogram",
      addressCountry: "BD",
    },
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}