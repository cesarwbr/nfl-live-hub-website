"use client";
import React from "react";
import { motion } from "motion/react";
import { IoStatsChart, IoChatbubbles, IoSparklesSharp } from "react-icons/io5";
import { TbBrowserCheck } from "react-icons/tb";
import { MdNotificationsActive, MdSportsFootball } from "react-icons/md";

type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent: "blue" | "amber" | "emerald" | "cyan" | "fuchsia" | "orange";
};

const FEATURES: FeatureItem[] = [
  {
    icon: <MdSportsFootball className="w-6 h-6" />,
    title: "Live Game Center",
    description:
      "Real-time scores with quarter-by-quarter breakdowns, instant video highlights, live game statistics, and AI-powered game analysis.",
    accent: "orange",
  },
  {
    icon: <IoSparklesSharp className="w-6 h-6" />,
    title: "AI-Powered Insights",
    description:
      "Machine learning algorithms analyze game data to provide intelligent predictions, trend analysis, and contextual information.",
    accent: "amber",
  },
  {
    icon: <TbBrowserCheck className="w-6 h-6" />,
    title: "Seamless Browser Integration",
    description:
      "Works across any website without interrupting your workflow. Get instant updates while working, studying, or browsing.",
    accent: "emerald",
  },
  {
    icon: <MdNotificationsActive className="w-6 h-6" />,
    title: "Smart Notifications",
    description:
      "Customize alerts for your favorite teams, specific game events, breaking news, or community discussions with intelligent filtering.",
    accent: "amber",
  },
  {
    icon: <IoChatbubbles className="w-6 h-6" />,
    title: "News & Community Hub",
    description:
      "Stay informed with breaking NFL news and engage with fellow fans through integrated discussion features and real-time chats.",
    accent: "cyan",
  },
  {
    icon: <IoStatsChart className="w-6 h-6" />,
    title: "Team Intelligence",
    description:
      "Deep dive into your favorite teams with comprehensive profiles, upcoming schedules, historical data, and AI-powered analysis.",
    accent: "fuchsia",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function getAccentClasses(accent: FeatureItem["accent"]) {
  switch (accent) {
    case "blue":
      return {
        iconText: "text-blue-400",
        ring: "from-blue-500/15 to-purple-500/15",
        border: "from-blue-500/20 to-purple-500/20",
      };
    case "amber":
      return {
        iconText: "text-amber-400",
        ring: "from-amber-500/15 to-orange-500/15",
        border: "from-amber-500/20 to-orange-500/20",
      };
    case "emerald":
      return {
        iconText: "text-emerald-400",
        ring: "from-emerald-500/15 to-teal-500/15",
        border: "from-emerald-500/20 to-teal-500/20",
      };
    case "cyan":
      return {
        iconText: "text-cyan-400",
        ring: "from-cyan-500/15 to-blue-500/15",
        border: "from-cyan-500/20 to-blue-500/20",
      };
    case "fuchsia":
      return {
        iconText: "text-fuchsia-400",
        ring: "from-fuchsia-500/15 to-purple-500/15",
        border: "from-fuchsia-500/20 to-purple-500/20",
      };
    case "orange":
    default:
      return {
        iconText: "text-orange-400",
        ring: "from-orange-500/15 to-rose-500/15",
        border: "from-orange-500/20 to-rose-500/20",
      };
  }
}

export default function Features() {
  return (
    <section
      className="relative bg-black py-24 px-6 md:px-10 overflow-hidden"
      id="features"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900/50 border border-gray-800 rounded-full mb-6"
          >
            <svg
              className="w-4 h-4 text-gray-300"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
            </svg>
            <span className="text-gray-300 text-sm font-medium tracking-wider">
              FEATURES
            </span>
          </motion.div>

          <motion.h2
            id="features-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium text-center mb-6"
          >
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-clip-text text-transparent">
              Your complete{" "}
              <span className="font-serif italic text-gray-200">
                NFL companion
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Turn your browser into the ultimate NFL command center with
            real-time scores, AI-powered insights, and fan community features.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          role="list"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature) => {
            const accent = getAccentClasses(feature.accent);
            return (
              <motion.li
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="group relative p-6 bg-gray-900/30 border border-gray-800/50 rounded-2xl hover:border-gray-700/50 transition-all duration-300 focus-within:border-gray-600/60"
              >
                {/* Background glow */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${accent.ring}`}
                />

                {/* Icon */}
                <div className="relative mb-4">
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800/50 group-hover:scale-110 transition-transform duration-200 ${accent.iconText}`}
                  >
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold text-gray-200 mb-3 group-hover:text-white transition-colors duration-200">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-200">
                    {feature.description}
                  </p>
                </div>

                {/* Focusable overlay for keyboard users */}
                <button
                  type="button"
                  aria-label={feature.title}
                  className="absolute inset-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                />

                {/* Animated border */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className={`absolute inset-0 rounded-2xl blur-xl bg-gradient-to-r ${accent.border}`}
                  />
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            href="https://chromewebstore.google.com/detail/nfl-live-hub-scores-stats/djfgoccgbpkgoejomjbadfppighhikhh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get NFL Live Hub for Chrome
          </motion.a>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-700/20 to-transparent" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl opacity-30"
        style={{ transform: "translateX(-50%) rotate(-13deg)" }}
        aria-hidden
      />
    </section>
  );
}
