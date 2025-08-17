import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://nfllivehub.com"
  ),
  title: {
    default: "NFL Live Hub — NFL Chrome Extension for Live Scores & Highlights",
    template: "%s | NFL Live Hub",
  },
  description:
    "NFL Live Hub — Live NFL scores, instant highlights, AI team analysis, and more — all inside your browser.",
  applicationName: "NFL Live Hub",
  keywords: [
    "NFL",
    "football",
    "scores",
    "highlights",
    "chrome extension",
    "AI analysis",
    "NFL Live Hub",
  ],
  authors: [{ name: "Cesar" }],
  creator: "NFL Live Hub",
  publisher: "NFL Live Hub",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      en: "/",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "NFL Live Hub — NFL Chrome Extension for Live Scores & Highlights",
    siteName: "NFL Live Hub",
    description:
      "Live NFL scores, instant highlights, AI team analysis, and more.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "NFL Live Hub logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NFL Live Hub — NFL Chrome Extension for Live Scores & Highlights",
    description:
      "Live NFL scores, instant highlights, AI team analysis, and more.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://nfllivehub.com/#organization",
            name: "NFL Live Hub",
            url: "https://nfllivehub.com",
            logo: "https://nfllivehub.com/logo.png",
            sameAs: [
              "https://chromewebstore.google.com/detail/nfl-live-hub-scores-stats/djfgoccgbpkgoejomjbadfppighhikhh",
            ],
          }}
        />
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://nfllivehub.com/#website",
            url: "https://nfllivehub.com",
            name: "NFL Live Hub",
            publisher: { "@id": "https://nfllivehub.com/#organization" },
            inLanguage: "en-US",
          }}
        />
        {children}
      </body>
    </html>
  );
}
