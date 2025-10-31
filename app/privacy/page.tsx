"use client";

import React from "react";
import { motion } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  const effectiveDate = "2025-10-30";

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      <main className="pt-20 relative">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[560px] opacity-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-radial from-gray-300/70 to-transparent rounded-[32px]" />
        </div>

        <section className="relative z-10 max-w-4xl mx-auto px-10 py-16">
          {/* Badge */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-black border border-white/10 rounded-full"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-300"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white/80 text-sm font-medium tracking-wide">
                PRIVACY POLICY
              </span>
            </motion.div>
          </div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium text-center mb-3"
          >
            <span className="bg-gradient-to-r from-gray-200 to-gray-600 bg-clip-text text-transparent">
              Your privacy, protected
            </span>
          </motion.h1>
          <p className="text-center text-white/60 mb-12">
            Effective date: {effectiveDate}
          </p>

          {/* Intro */}
          <div className="prose prose-invert prose-p:text-white/70 prose-li:text-white/70 max-w-none">
            <p>
              NFL Live Hub transforms your browser into an NFL command center
              with live scores, AI insights, and community features. We only
              collect the minimum information needed to deliver these features,
              and we never sell your data.
            </p>
          </div>

          {/* Sections */}
          <div className="mt-10 space-y-10">
            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Information we collect
              </h2>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>
                  <span className="font-medium text-white/90">
                    Product telemetry:
                  </span>{" "}
                  Anonymized, aggregated usage events to ensure features like
                  live score updates and panel rendering work reliably.
                </li>
                <li>
                  <span className="font-medium text-white/90">
                    Session data:
                  </span>{" "}
                  Limited runtime session identifiers used to keep the extension
                  working while your browser is open.
                </li>
                <li>
                  <span className="font-medium text-white/90">
                    Optional account data:
                  </span>{" "}
                  If you sign in, we collect and store:
                  <ul className="list-circle ml-6 mt-2 space-y-1">
                    <li>Email address (for account identification)</li>
                    <li>Team preferences (your favorite NFL teams)</li>
                    <li>
                      Notification settings (which alerts you&apos;ve enabled)
                    </li>
                    <li>Community username (if you participate in fan chat)</li>
                    <li>Account creation date</li>
                  </ul>
                </li>
              </ul>
              <p className="text-white/60 mt-3 text-sm">
                We do not collect the contents of pages you visit.
              </p>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">
                How we use information
              </h2>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>
                  Provide live scores, highlights, and AI-powered analysis
                </li>
                <li>Send notifications you configure for teams and games</li>
                <li>
                  Maintain your preferences and cross‑device sync (if signed in)
                </li>
                <li>Improve reliability and performance of the extension</li>
              </ul>
            </section>

            {/* Chrome Permissions */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Permissions we request and why
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">notifications</h3>
                  <p className="text-white/70">
                    Used to display alerts when games are about to start and to
                    deliver time‑sensitive updates you opt into. This directly
                    supports the extension&apos;s single purpose of keeping you
                    informed.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">storage</h3>
                  <p className="text-white/70">
                    Used to store your preferences (favorite teams, notification
                    settings) and limited session data. Also used with analytics
                    to maintain an active session while the browser is running.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">sidePanel</h3>
                  <p className="text-white/70">
                    Required to display the NFL Live Hub dashboard, including
                    the Live Game Center, video highlights, team statistics, and
                    AI‑powered analysis without disrupting your browsing.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">identity</h3>
                  <p className="text-white/70">
                    Enables sign‑in for personalized features such as syncing
                    preferences across devices, customized notifications, and
                    participation in community discussions with a consistent
                    identity.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium">contextMenus</h3>
                  <p className="text-white/70">
                    Provides quick access to NFL features from the right‑click
                    menu (e.g., look up news, share to community, or open team
                    info based on selected text or links) so functionality is
                    available on any website you browse.
                  </p>
                </div>
              </div>
            </section>

            {/* Third-Party Services - UPDATED */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Third‑party services and data sharing
              </h2>
              <p className="text-white/70 mb-4">
                We share limited data with the following third parties to
                provide our services:
              </p>
              <div className="space-y-4">
                <div className="border-l-2 border-white/20 pl-4">
                  <h3 className="font-medium text-white/90">
                    Analytics provider: Google Analytics
                  </h3>
                  <ul className="list-disc list-inside text-white/70 mt-2 space-y-1">
                    <li>
                      Data shared: Anonymized usage events, feature
                      interactions, error logs
                    </li>
                    <li>
                      Purpose: Performance monitoring and feature improvement
                    </li>
                    <li>
                      Privacy policy:{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        className="text-white underline"
                      >
                        https://policies.google.com/privacy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="border-l-2 border-white/20 pl-4">
                  <h3 className="font-medium text-white/90">
                    Authentication service: Google Identity import
                  </h3>
                  <ul className="list-disc list-inside text-white/70 mt-2 space-y-1">
                    <li>Data shared: Email address, authentication tokens</li>
                    <li>Purpose: Account sign-in and cross-device sync</li>
                    <li>
                      Privacy policy:{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        className="text-white underline"
                      >
                        https://policies.google.com/privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white/5 rounded-lg">
                <p className="font-medium text-white/90 mb-2">We do NOT:</p>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  <li>Sell your personal data to any third party</li>
                  <li>Share your data with advertisers</li>
                  <li>
                    Allow third parties to use your data for their own purposes
                  </li>
                </ul>
              </div>
            </section>

            {/* Data Storage - NEW SECTION */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Data storage and location
              </h2>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>
                  User data is stored on secure servers located in the United
                  States (Supabase)
                </li>
                <li>
                  Session data and preferences are stored locally in your
                  browser using Chrome&s storage API
                </li>
                <li>
                  Optional account data is stored on Supabase Storage (AWS S3)
                </li>
                <li>
                  Data in transit is encrypted using industry-standard TLS/SSL
                  protocols
                </li>
                <li>Data at rest is encrypted using AES-256 encryption</li>
              </ul>
            </section>

            {/* Data Retention - UPDATED */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Data retention</h2>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>Session data: Deleted when you close your browser</li>
                <li>
                  Usage analytics: Retained for 12 months, then automatically
                  deleted
                </li>
                <li>
                  Account preferences: Retained while your account is active
                </li>
                <li>Community chat messages: Retained for 90 days</li>
                <li>
                  Deleted account data: Permanently removed within 30 days of
                  deletion request
                </li>
                <li>Backup data: Deleted within 90 days of account deletion</li>
              </ul>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Security</h2>
              <p className="text-white/70">
                We implement technical and organizational measures to protect
                your information. No method of transmission or storage is 100%
                secure, but we strive to use commercially acceptable means to
                protect your data.
              </p>
            </section>

            {/* Children */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Children&apos;s privacy
              </h2>
              <p className="text-white/70">
                NFL Live Hub is not intended for children under 13. We do not
                knowingly collect personal information from children under 13.
              </p>
            </section>

            {/* Your Choices - UPDATED */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Your choices and controls
              </h2>
              <ul className="list-disc list-inside text-white/70 space-y-2">
                <li>
                  <span className="font-medium text-white/90">
                    Adjust notification preferences:
                  </span>{" "}
                  In the extension settings
                </li>
                <li>
                  <span className="font-medium text-white/90">Sign out:</span>{" "}
                  To stop syncing data across devices
                </li>
                <li>
                  <span className="font-medium text-white/90">
                    Request data access:
                  </span>{" "}
                  Email{" "}
                  <a
                    href="mailto:contact@nfllivehub.com"
                    className="text-white underline"
                  >
                    contact@nfllivehub.com
                  </a>{" "}
                  with &quot;Data Access Request&quot; in the subject line. We
                  will provide your data within 30 days.
                </li>
                <li>
                  <span className="font-medium text-white/90">
                    Request data deletion:
                  </span>{" "}
                  Email{" "}
                  <a
                    href="mailto:contact@nfllivehub.com"
                    className="text-white underline"
                  >
                    contact@nfllivehub.com
                  </a>{" "}
                  with &quot;Delete My Data&quot; in the subject line. We will
                  delete your data within 30 days and confirm by email.
                </li>
                <li>
                  <span className="font-medium text-white/90">
                    Disable specific features:
                  </span>{" "}
                  You can disable notifications, chat, and other features in the
                  extension settings menu
                </li>
                <li>
                  <span className="font-medium text-white/90">
                    Uninstall the extension:
                  </span>{" "}
                  Removes all locally stored data immediately
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact us</h2>
              <p className="text-white/70">
                Questions about this policy or our data practices? Email us at
                <a
                  href="mailto:contact@nfllivehub.com"
                  className="text-white underline ml-1"
                >
                  contact@nfllivehub.com
                </a>
                .
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Changes to this policy
              </h2>
              <p className="text-white/70">
                We may update this policy to reflect changes to the extension or
                legal requirements. We will update the effective date above and,
                when appropriate, notify you within the extension.
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
