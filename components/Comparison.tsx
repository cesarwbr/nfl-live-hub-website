"use client";

import React from "react";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";

export default function Comparison() {
  const comparisonData = [
    {
      feature: "Live Game Scores & Updates",
      nflLiveHub: true,
      fantasyPros: true,
    },
    {
      feature: "Instant Video Highlights",
      nflLiveHub: true,
      fantasyPros: false,
    },
    {
      feature: "AI-Powered Team Analysis",
      nflLiveHub: true,
      fantasyPros: false,
    },
    {
      feature: "League Standings & Stats",
      nflLiveHub: true,
      fantasyPros: true,
    },
    {
      feature: "Clean, Modern Interface",
      nflLiveHub: true,
      fantasyPros: "basic",
    },
    {
      feature: "Fantasy Football Focus",
      nflLiveHub: "basic",
      fantasyPros: true,
    },
    {
      feature: "100% Free",
      nflLiveHub: true,
      fantasyPros: "limited",
    },
    {
      feature: "No Account Required",
      nflLiveHub: true,
      fantasyPros: false,
    },
  ];

  const chromeVsMobileFeatures = [
    {
      title: "Always visible",
      description: "One click access from any tab",
    },
    {
      title: "No app switching",
      description: "Stay in your workflow",
    },
    {
      title: "Zero phone storage",
      description: "No device space needed",
    },
    {
      title: "Desktop optimized",
      description: "Perfect for working or studying",
    },
    {
      title: "Instant updates",
      description: "Real-time scores without interruption",
    },
  ];

  const mobileAppLimitations = [
    "Requires app switching and losing context",
    "Distracting notifications on your phone",
    "Takes up valuable storage space",
    "Not ideal when working on desktop",
    "Battery drain from background updates",
  ];

  return (
    <section
      id="comparison"
      className="relative bg-black py-24 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-10 z-0">
        <div className="w-full h-full bg-gradient-radial from-blue-500/30 to-transparent rounded-lg" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-10">
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white/80 text-sm font-medium tracking-wide">
                COMPARISON
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
                Why Choose a{" "}
                <span className="font-serif italic font-normal">
                  Chrome Extension
                </span>
                ?
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
              Experience seamless NFL coverage without switching apps or losing
              focus
            </p>
          </motion.div>
        </div>

        {/* Chrome Extension vs Mobile Apps */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-medium text-center mb-10 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            Chrome Extension vs Mobile Apps
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Chrome Extension Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-500/30 rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-2xl font-medium text-blue-400">
                  NFL Live Hub
                </h4>
              </div>
              <ul className="space-y-4">
                {chromeVsMobileFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <Check className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-200">
                      <strong>{feature.title}</strong> - {feature.description}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Mobile Apps Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border border-gray-700 rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                  <X className="w-6 h-6 text-gray-400" />
                </div>
                <h4 className="text-2xl font-medium text-gray-400">
                  Mobile Apps
                </h4>
              </div>
              <ul className="space-y-4">
                {mobileAppLimitations.map((limitation, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <X className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">{limitation}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* NFL Live Hub vs FantasyPros */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-medium text-center mb-10 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
          >
            NFL Live Hub vs FantasyPros Chrome Extension
          </motion.h3>

          {/* Desktop Table View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="bg-black border border-white/10 rounded-3xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-6 px-8 text-white/80 font-medium">
                      Feature
                    </th>
                    <th className="text-center py-6 px-8 text-blue-400 font-medium">
                      NFL Live Hub
                    </th>
                    <th className="text-center py-6 px-8 text-gray-400 font-medium">
                      FantasyPros
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
                    >
                      <td className="py-6 px-8 text-gray-200">{row.feature}</td>
                      <td className="text-center py-6 px-8">
                        {row.nflLiveHub === true ? (
                          <Check className="w-6 h-6 text-blue-400 mx-auto" />
                        ) : row.nflLiveHub === false ? (
                          <X className="w-6 h-6 text-red-400 mx-auto" />
                        ) : (
                          <span className="text-gray-500 text-sm">Basic</span>
                        )}
                      </td>
                      <td className="text-center py-6 px-8">
                        {row.fantasyPros === true ? (
                          <Check className="w-6 h-6 text-gray-500 mx-auto" />
                        ) : row.fantasyPros === false ? (
                          <X className="w-6 h-6 text-red-400 mx-auto" />
                        ) : row.fantasyPros === "basic" ? (
                          <span className="text-gray-500 text-sm">Basic</span>
                        ) : (
                          <span className="text-gray-500 text-sm">
                            Limited (Freemium)
                          </span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {comparisonData.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-black border border-white/10 rounded-2xl p-6"
              >
                <h4 className="text-white font-medium mb-4 text-base text-center">
                  {row.feature}
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-blue-400 text-sm font-medium mb-2">
                      NFL Live Hub
                    </div>
                    {row.nflLiveHub === true ? (
                      <Check className="w-6 h-6 text-blue-400 mx-auto" />
                    ) : row.nflLiveHub === false ? (
                      <X className="w-6 h-6 text-red-400 mx-auto" />
                    ) : (
                      <span className="text-gray-500 text-xs">Basic</span>
                    )}
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400 text-sm font-medium mb-2">
                      FantasyPros
                    </div>
                    {row.fantasyPros === true ? (
                      <Check className="w-6 h-6 text-gray-500 mx-auto" />
                    ) : row.fantasyPros === false ? (
                      <X className="w-6 h-6 text-red-400 mx-auto" />
                    ) : row.fantasyPros === "basic" ? (
                      <span className="text-gray-500 text-xs">Basic</span>
                    ) : (
                      <span className="text-gray-500 text-xs">
                        Limited (Freemium)
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/60 mb-6">
            Join thousands of NFL fans who have made the switch
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://chromewebstore.google.com/detail/nfl-live-hub-scores-stats/djfgoccgbpkgoejomjbadfppighhikhh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Install NFL Live Hub Free
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
