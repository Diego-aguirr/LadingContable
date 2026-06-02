import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_METADATA } from "@/app/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  keywords: SITE_METADATA.keywords,
  metadataBase: new URL(SITE_METADATA.siteUrl),
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    url: SITE_METADATA.siteUrl,
    siteName: SITE_METADATA.title,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: SITE_METADATA.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_METADATA.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    images: [SITE_METADATA.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "Estudio Contable",
  description: SITE_METADATA.description,
  url: SITE_METADATA.siteUrl,
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  serviceType: [
    "Alta de Monotributo",
    "Asesoramiento Impositivo",
    "Servicios Contables",
    "Gestión Administrativa",
    "Recategorización de Monotributo",
  ],
  priceRange: "$$",
  telephone: "+54-9-11-1234-5678",
  availableLanguage: "Spanish",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
