"use client";

import React from "react";
import { motion } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  const effectiveDate = "2025-08-07";

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
                TERMS OF SERVICE
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
              Terms and Conditions
            </span>
          </motion.h1>
          <p className="text-center text-white/60 mb-12">
            Effective date: {effectiveDate}
          </p>

          <div className="prose prose-invert prose-p:text-white/70 prose-li:text-white/70 max-w-none space-y-10">
            <section>
              <h2 className="text-2xl font-semibold mb-3">
                1. Acceptance of terms
              </h2>
              <p>
                By installing, accessing, or using NFL Live Hub (the
                “Extension”), you agree to be bound by these Terms of Service
                (the “Terms”) and our Privacy Policy. If you do not agree, do
                not use the Extension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                2. Description of service
              </h2>
              <p>
                NFL Live Hub transforms your browser into an NFL command center
                with live scores, AI insights, team dashboards, news, and
                community features. The Extension integrates into your browsing
                experience via notifications, a side panel, and quick-access UI.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">3. Eligibility</h2>
              <p>
                You must be at least 13 years old to use the Extension. If you
                are between 13 and 18 (or the age of majority in your
                jurisdiction), you represent that you have your parent or
                guardian’s consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                4. Accounts and authentication
              </h2>
              <p>
                Certain features may require sign‑in. You are responsible for
                maintaining the confidentiality of your credentials and for all
                activity that occurs under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                5. Permissions and how they are used
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-medium">notifications</span>: to send
                  alerts about game starts and updates you opt into.
                </li>
                <li>
                  <span className="font-medium">storage</span>: to save your
                  preferences, favorite teams, and limited session data.
                </li>
                <li>
                  <span className="font-medium">sidePanel</span>: to render the
                  Extension’s dashboard (Live Game Center, highlights, team
                  stats, AI analysis) alongside any website.
                </li>
                <li>
                  <span className="font-medium">identity</span>: to enable
                  sign‑in for cross‑device sync, personalized notifications, and
                  community participation.
                </li>
                <li>
                  <span className="font-medium">contextMenus</span>: to provide
                  right‑click shortcuts for looking up NFL information or
                  sharing content while browsing.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">6. Acceptable use</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Do not misuse, interfere with, or disrupt the Extension.
                </li>
                <li>
                  Do not attempt to reverse engineer or circumvent security.
                </li>
                <li>
                  Do not violate applicable laws, third‑party rights, or
                  league/IP rights.
                </li>
                <li>
                  Do not use the Extension to harass, spam, or post unlawful
                  content.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                7. Intellectual property
              </h2>
              <p>
                We and our licensors own all rights in the Extension and
                associated content, excluding third‑party content and trademarks
                which remain the property of their respective owners. You are
                granted a limited, non‑exclusive, non‑transferable license to
                use the Extension for personal, non‑commercial purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                8. Third‑party content and links
              </h2>
              <p>
                The Extension may display or link to third‑party content
                (including news, videos, or statistics). We do not control or
                endorse third‑party sites and are not responsible for their
                content or practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">9. Disclaimers</h2>
              <p>
                THE EXTENSION IS PROVIDED “AS IS” AND “AS AVAILABLE” WITHOUT
                WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, AND NON‑INFRINGEMENT. We do not warrant that
                the Extension will be uninterrupted, timely, secure, or
                error‑free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                10. Limitation of liability
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE
                FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                EXEMPLARY DAMAGES, OR FOR ANY LOSS OF PROFITS OR DATA, ARISING
                OUT OF OR IN CONNECTION WITH YOUR USE OF THE EXTENSION.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                11. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold us harmless from any claims,
                losses, liabilities, and expenses (including reasonable
                attorneys’ fees) arising from your use of the Extension or
                violation of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">12. Termination</h2>
              <p>
                We may suspend or terminate your access to the Extension at any
                time, with or without notice, for conduct that we believe
                violates these Terms or is otherwise harmful to other users, us,
                or third parties. You may stop using and uninstall the Extension
                at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                13. Changes to the service or Terms
              </h2>
              <p>
                We may update or modify the Extension and these Terms from time
                to time. We will update the effective date above and, where
                appropriate, provide notice within the Extension. Continued use
                after changes indicates acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">14. Governing law</h2>
              <p>
                These Terms are governed by the laws of your state or country of
                residence, without regard to its conflict of law principles.
                Where required, disputes will be resolved in the courts located
                in that jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">15. Contact</h2>
              <p>
                Questions about these Terms? Contact us at
                <a
                  href="mailto:contact@nfllivehub.com"
                  className="text-white underline ml-1"
                >
                  contact@nfllivehub.com
                </a>
                .
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

