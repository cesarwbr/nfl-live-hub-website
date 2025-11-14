"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import StructuredData from "@/components/StructuredData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is NFL Live Hub?",
      answer:
        "NFL Live Hub is a free Chrome extension that brings live NFL scores, instant highlights, AI-powered team analysis, and real-time fan discussions directly to your browser. Stay connected to all the NFL action without leaving your current tab.",
    },
    {
      question: "How much does NFL Live Hub cost?",
      answer:
        "NFL Live Hub is completely free to use. There are no hidden fees, subscriptions, or premium tiers. Download it from the Chrome Web Store and enjoy all features at no cost.",
    },
    {
      question: "What browsers are supported?",
      answer:
        "NFL Live Hub works on Google Chrome and all Chromium-based browsers including Microsoft Edge, Brave, Opera, and Vivaldi. Simply install it from the Chrome Web Store.",
    },
    {
      question: "How do I install the extension?",
      answer:
        "Visit the Chrome Web Store, search for 'NFL Live Hub' or use the direct link from this page, and click 'Add to Chrome'. The extension will be installed in seconds and ready to use immediately.",
    },
    {
      question: "Does NFL Live Hub show live game scores?",
      answer:
        "Yes! NFL Live Hub provides real-time score updates for all NFL games. You'll get instant notifications for touchdowns, field goals, and major plays as they happen, keeping you in sync with every game.",
    },
    {
      question: "Can I watch game highlights in the extension?",
      answer:
        "Absolutely! NFL Live Hub delivers instant video highlights for key plays, touchdowns, and game-changing moments. Access condensed game recaps and top plays without leaving your browser.",
    },
    {
      question: "What is the AI team analysis feature?",
      answer:
        "Our AI-powered analysis provides intelligent insights about team performance, player stats, matchup predictions, and strategic breakdowns. Get expert-level analysis powered by advanced AI to help you understand the game deeper.",
    },
    {
      question: "Is my data safe and private?",
      answer:
        "Yes, your privacy is our priority. NFL Live Hub only accesses the data necessary to provide NFL updates and features. We do not collect or sell your personal information. Review our privacy policy for full details.",
    },
    {
      question: "Can I customize notifications?",
      answer:
        "Yes! You can customize which teams you follow, what types of updates you receive, and how frequently you're notified. Tailor the extension to match your NFL preferences and browsing habits.",
    },
    {
      question: "How do I get support or report issues?",
      answer:
        "For support, visit our website or reach out through the Chrome Web Store page. We actively monitor feedback and respond to user issues quickly. You can also check our FAQ and documentation for common solutions.",
    },
  ];

  // Generate FAQPage structured data
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="relative bg-black py-24 overflow-hidden">
      <StructuredData data={faqStructuredData} />

      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-10 z-0">
        <div className="w-full h-full bg-gradient-radial from-blue-500/30 to-transparent rounded-lg" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-black border border-white/10 rounded-full">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-300"
              >
                <path
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white/80 text-sm font-medium tracking-wide">
                FAQ
              </span>
            </div>
          </motion.div>

          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-gray-200 to-gray-600 bg-clip-text text-transparent">
                Frequently Asked{" "}
                <span className="font-serif italic font-normal">Questions</span>
              </span>
            </h2>
          </motion.div>

          {/* Section Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about NFL Live Hub
            </p>
          </motion.div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-black border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg md:text-xl font-medium text-white pr-8">
                    {faq.question}
                  </h3>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white/60 flex-shrink-0"
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-0">
                        <div className="border-t border-white/10 pt-4">
                          <p className="text-white/70 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 mb-4">Still have questions?</p>
          <a
            href="https://chromewebstore.google.com/detail/nfl-live-hub-scores-stats/djfgoccgbpkgoejomjbadfppighhikhh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <span>Visit our Chrome Web Store page</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-current"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
