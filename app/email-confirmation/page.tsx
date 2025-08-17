"use client";

import React, { useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "motion/react";
import NextImage from "next/image";

function EmailConfirmationContent() {
  const params = useSearchParams();
  const email = params.get("email") || "your email";
  const safeEmail = useMemo(() => email.slice(0, 254), [email]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      <main className="pt-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[560px] opacity-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-radial from-gray-300/70 to-transparent rounded-[32px]" />
        </div>

        <section className="relative z-10 max-w-4xl mx-auto px-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight bg-gradient-to-r from-gray-200 to-gray-600 bg-clip-text text-transparent">
              Get ready for ridiculously fast NFL updates!
            </h1>
            <p className="mt-4 text-white/70">
              Link has been sent to{" "}
              <span className="text-white">{safeEmail}</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-8"
          >
            <div className="relative w-full h-48 md:h-80 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
              <NextImage
                src="/screenshot_home.png"
                alt="NFL Live Hub screenshot"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="p-6 bg-black/60 border border-white/10 rounded-2xl"
            >
              <h2 className="text-xl font-semibold mb-2">
                What is NFL Live Hub?
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                NFL Live Hub is a Chrome extension that brings live scores,
                instant highlights, and AI-powered team analysis right to your
                browser. Watch above to see it in action.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 bg-black/60 border border-white/10 rounded-2xl"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-white/80">
                    Amazing extension — just what Chrome has been missing for
                    sports fans.
                  </p>
                  <div className="mt-3 text-white/60 text-sm">
                    <div className="font-medium">Adekeye Ifedayo</div>
                    <div>Jan 3, 2025</div>
                  </div>
                </div>

                <div>
                  <p className="text-white/80">
                    I loved this extension because it presents the results
                    easily accessible.
                  </p>
                  <div className="mt-3 text-white/60 text-sm">
                    <div className="font-medium">Gabriel Carvalho</div>
                    <div>Jan 19, 2023 · 12 out of 16 found this helpful</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 text-center"
          >
            <a
              href="https://chromewebstore.google.com/detail/nfl-live-hub-scores-stats/djfgoccgbpkgoejomjbadfppighhikhh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl px-5 py-2.5 bg-blue-600 text-white font-medium hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
            >
              Open Chrome Web Store
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function EmailConfirmationPage() {
  return (
    <Suspense fallback={null}>
      <EmailConfirmationContent />
    </Suspense>
  );
}
