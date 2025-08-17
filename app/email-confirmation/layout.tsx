import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Confirmation",
  description:
    "We emailed you the link to install NFL Live Hub — the Chrome extension for live scores and instant highlights.",
  alternates: {
    canonical: "/email-confirmation",
  },
};

export default function EmailConfirmationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
