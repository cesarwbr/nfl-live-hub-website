import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "NFL Live Hub Terms of Service — Read the terms and conditions for using the browser extension.",
  alternates: {
    canonical: "/terms",
  },
  robots: { index: true, follow: true },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
