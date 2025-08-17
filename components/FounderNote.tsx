"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export default function FounderNote() {
  // Split the text into words for animation
  const text =
    "We turn your browser into your NFL command center with live scores, instant highlights, AI insights, and a community built for fans. Enjoy complete coverage wherever you browse.";
  const words = text.split(" ");

  return (
    <section
      id="founder-note"
      className="relative bg-black py-24 overflow-hidden border-t border-white/5 rounded-t-[50px]"
    >
      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[793px] h-[499px] opacity-10 z-0">
        <div className="w-full h-full bg-gradient-radial from-gray-300/70 to-transparent rounded-lg transform rotate-[-13deg]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-10 text-center">
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
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M20.188 10.934c.388.472.582.707.582 1.066 0 .359-.194.594-.582 1.066C18.768 14.79 15.636 18 12 18c-3.636 0-6.768-3.21-8.188-4.934-.388-.472-.582-.707-.582-1.066 0-.359.194-.594.582-1.066C5.232 9.21 8.364 6 12 6c3.636 0 6.768 3.21 8.188 4.934z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span className="text-white/80 text-sm font-medium tracking-wide">
              WE BRING THE NFL TO YOU
            </span>
          </div>
        </motion.div>

        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl lg:text-4xl leading-relaxed tracking-tight max-w-4xl mx-auto">
            {words.map((word, index) => {
              const isItalic = [
                "NFL",
                "command",
                "center",
                "live",
                "scores",
                "instant",
                "highlights",
                "AI",
                "insights",
                "community",
                "coverage",
              ].includes(word.replace(/[.,]/g, ""));

              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05 + 0.5,
                  }}
                  viewport={{ once: true }}
                  className={`inline-block mr-2 ${
                    isItalic
                      ? "font-serif italic text-gray-300"
                      : "text-gray-400"
                  }`}
                >
                  {word}
                </motion.span>
              );
            })}
          </h3>
        </motion.div>

        {/* Founder Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6"
        >
          {/* Profile Image */}
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-14 h-14 rounded-full border-2 border-white/20 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900"
            >
              <Image
                src="/founder.jpg"
                alt="Co-founder profile"
                width={52}
                height={52}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Profile Info */}
          <div className="text-left">
            <p className="text-white/60 text-base leading-relaxed">
              Founder & AI Strategy Lead
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Light Effect */}
      <div className="absolute top-0 right-0 w-[437px] h-[306px] opacity-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-gray-400/50 to-transparent" />
      </div>
    </section>
  );
}
