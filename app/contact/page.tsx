"use client";

import React from "react";
import { motion } from "motion/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />

      <main className="pt-20 relative">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[560px] opacity-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-radial from-gray-300/70 to-transparent rounded-[32px]" />
        </div>

        <section className="relative z-10 max-w-7xl mx-auto px-10 py-16">
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
                CONTACT
              </span>
            </motion.div>
          </div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mb-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-gray-200 to-gray-600 bg-clip-text text-transparent">
                We’d love to hear from you
              </span>
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-white/60 max-w-2xl mx-auto mb-12"
          >
            Questions, feedback, or partnership ideas? Email us and we’ll get
            back within 1–2 business days.
          </motion.p>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-10" />
              <div className="relative h-full bg-black/60 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-2">
                      Contact details
                    </h3>
                    <p className="text-white/60 text-sm">
                      We typically reply within 24–48 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-black border border-white/10 rounded-xl">
                      <div className="text-white/60 text-xs mb-1">Email</div>
                      <a
                        href="mailto:contact@nfllivehub.com"
                        className="text-white/80 hover:text-white"
                      >
                        contact@nfllivehub.com
                      </a>
                    </div>
                    <div className="p-4 bg-black border border-white/10 rounded-xl">
                      <div className="text-white/60 text-xs mb-1">Website</div>
                      <a
                        href="https://cesarwilliam.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white"
                      >
                        cesarwilliam.com
                      </a>
                    </div>
                  </div>

                  <div className="p-4 bg-black border border-white/10 rounded-xl">
                    <div className="text-white/60 text-xs mb-2">
                      Support hours
                    </div>
                    <p className="text-white/70 text-sm">
                      Mon–Fri · 9:00–18:00 ET
                    </p>
                  </div>

                  <div className="p-4 bg-black border border-white/10 rounded-xl">
                    <div className="text-white/60 text-xs mb-2">
                      What to include
                    </div>
                    <ul className="list-disc list-inside text-white/70 text-sm space-y-1">
                      <li>Your browser and OS version</li>
                      <li>Any screenshots or steps to reproduce</li>
                      <li>Feature ideas or partnerships</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
