"use client";

import React from "react";
import { motion } from "motion/react";

export default function Benefits() {
  const benefits = [
    {
      title: "Live Game Intelligence",
      description:
        "Real-time scores, AI-powered insights, and instant highlights delivered as you browse",
      graphic: (
        <div className="relative w-32 h-32 mx-auto">
          {/* Mini Field */}
          <div className="absolute inset-x-0 top-0 h-24 rounded-lg border border-white/15 overflow-hidden">
            {/* Turf */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-700 to-emerald-800" />
            {/* End zones */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-blue-700 to-blue-600 opacity-90" />
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-red-700 to-red-600 opacity-90" />

            {/* Yard lines */}
            <div className="absolute inset-0 flex justify-between px-4">
              {[0, 1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="w-0.5 h-full bg-white/35" />
              ))}
            </div>

            {/* Line of scrimmage */}
            <motion.div
              animate={{ opacity: [0.25, 0.65, 0.25] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/60"
            />

            {/* Red zone highlight */}
            <motion.div
              animate={{ opacity: [0.08, 0.22, 0.08] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-0 bottom-0 right-4 w-6 bg-red-500/30"
            />

            {/* Ball + trail */}
            <motion.div
              initial={{ x: 8 }}
              animate={{ x: 88 }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-4 -translate-y-1/2"
            >
              <div className="relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-6 h-1 bg-orange-400/30 rounded-full blur-[1px]" />
                <div className="w-3 h-2.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(251,146,60,0.7)]" />
              </div>
            </motion.div>
          </div>

          {/* Compact Scoreboard (pill) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-9 w-[160px] rounded-full bg-black/70 backdrop-blur-sm border border-white/10 px-2 shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            <div className="h-full grid grid-cols-[1fr_auto_1fr] items-center">
              {/* Left team */}
              <div className="flex items-center justify-start gap-1.5">
                <motion.span
                  animate={{ x: [0, 1, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="inline-block w-0 h-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-amber-300"
                  aria-label="possession"
                />
                <span className="px-1 rounded bg-white/10 text-white/85 text-[10px] font-semibold tracking-tight">
                  KC
                </span>
                <span className="font-mono text-white/90 text-[12px] leading-none">
                  21
                </span>
              </div>

              {/* Clock */}
              <div className="px-2 text-[10px] font-mono text-white/60">
                Q4 2:13
              </div>

              {/* Right team */}
              <div className="flex items-center justify-end gap-1.5">
                <span className="font-mono text-white/90 text-[12px] leading-none">
                  17
                </span>
                <span className="px-1 rounded bg-white/10 text-white/85 text-[10px] font-semibold tracking-tight">
                  SF
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Fan Community Hub",
      description:
        "Connect with thousands of NFL fans through real-time discussions and expert analysis",
      graphic: (
        <div className="relative w-32 h-32 mx-auto">
          {/* Chat Bubbles Graphic */}
          <div className="absolute inset-0 flex flex-col justify-center space-y-2">
            {[0, 1, 2].map((bubble, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className={`${
                  index % 2 === 0 ? "self-start" : "self-end"
                } max-w-16 h-6 rounded-lg px-2 flex items-center`}
                style={{
                  backgroundColor:
                    index === 0
                      ? "#3B82F6"
                      : index === 1
                      ? "#10B981"
                      : "#8B5CF6",
                }}
              >
                <div className="w-2 h-2 bg-white/60 rounded-full" />
                <div className="w-1 h-1 bg-white/40 rounded-full ml-1" />
                <div className="w-1 h-1 bg-white/40 rounded-full ml-0.5" />
              </motion.div>
            ))}
          </div>
          {/* User Icons */}
          <div className="absolute top-0 right-0 flex space-x-1">
            {[0, 1, 2].map((user, index) => (
              <div
                key={index}
                className="w-3 h-3 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full border border-white/10"
              />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Works Everywhere",
      description:
        "Seamless browser integration that delivers NFL updates without interrupting your workflow",
      graphic: (
        <div className="relative w-32 h-32 mx-auto">
          {/* Secondary window behind (contexts/sites) */}
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 0.96 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-x-2 top-2 h-20 rounded-lg border border-white/10 bg-gradient-to-br from-gray-800 to-gray-900"
          />

          {/* Main Browser Window */}
          <div className="absolute inset-x-0 top-0 h-24 rounded-xl border border-white/12 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
            {/* Browser Header */}
            <div className="h-6 bg-gray-800/80 flex items-center px-2 gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <div className="ml-2 flex-1 h-3 rounded bg-gray-700" />
              <div className="w-6 h-3 rounded bg-gray-700" />
            </div>

            {/* Content skeleton */}
            <div className="p-2 space-y-1.5">
              <div className="h-2 rounded bg-gray-700/80" />
              <div className="h-2 rounded bg-gray-700/70 w-3/4" />
              <div className="h-2 rounded bg-gray-700/60 w-2/3" />
            </div>

            {/* Docked sidebar (extension panel) */}
            <div className="absolute top-6 right-1 bottom-1 w-9 rounded-md border border-white/10 bg-gradient-to-b from-gray-800 to-gray-900 p-1">
              <div className="h-2 rounded bg-blue-600/60 mb-1" />
              <div className="h-2 rounded bg-gray-600/80 mb-1.5" />
              <div className="h-2 rounded bg-gray-600/70 w-5/6" />

              {/* Live badge */}
              <motion.div
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-600 text-[8px] font-mono flex items-center justify-center border border-white/20 text-white"
              >
                1
              </motion.div>
            </div>
          </div>

          {/* Slide-in toast notification */}
          <motion.div
            initial={{ x: 18, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
              repeat: Infinity,
              repeatDelay: 2.5,
              repeatType: "reverse",
            }}
            className="absolute bottom-2 right-0 w-20 h-9 rounded-md border border-white/12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] px-2 flex items-center gap-1 shadow-[0_6px_18px_rgba(37,99,235,0.25)]"
          >
            <div className="w-3 h-3 rounded bg-white/20" />
            <span className="font-semibold tracking-tight">Update</span>
            <span className="ml-auto font-mono opacity-90">Now</span>
          </motion.div>

          {/* Cross-browser hint */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border border-white/20" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 border border-white/20" />
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 border border-white/20" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="benefits" className="relative bg-black py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[793px] h-[499px] opacity-10 z-0">
        <div className="w-full h-full bg-gradient-radial from-gray-300/70 to-transparent rounded-lg transform rotate-[-13deg]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10">
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
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-white/80 text-sm font-medium tracking-wide">
                BENEFITS
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
                Make Your{" "}
                <span className="font-serif italic font-normal">Browser</span>{" "}
                Your NFL Command Center
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
              Into the ultimate NFL command center with real-time scores, AI
              insights, and fan community features
            </p>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative h-[347px] min-w-[300px] flex-1"
            >
              <div className="h-full bg-black border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
                {/* Card Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top Decoration */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-12 bg-gradient-to-b from-gray-700/30 to-transparent rounded-b-full" />

                {/* Graphic */}
                <div className="mb-8 relative z-10">{benefit.graphic}</div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-medium text-white mb-4 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed text-center">
                    {benefit.description}
                  </p>
                </div>

                {/* Light Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-gray-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
