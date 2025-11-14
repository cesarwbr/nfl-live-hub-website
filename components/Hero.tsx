"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import NextImage from "next/image";
import { FaInstagram, FaXTwitter, FaChrome } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Hero() {
  const router = useRouter();
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const socialLinks = [
    {
      name: "X",
      href: "https://x.com/NFLLiveHub",
      icon: <FaXTwitter size={24} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/nfllivehub",
      icon: <FaInstagram size={24} />,
    },
  ];

  return (
    <section
      id="hero"
      className="relative bg-black flex flex-col items-center justify-center overflow-hidden h-screen min-h-[950px]"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 h-screen min-h-[950px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          aria-label="Background video of abstract gradients"
          className="w-full h-full object-cover opacity-10"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black" />
      </div>

      {/* Background Gradient Shapes */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[793px] h-[499px] opacity-15 z-10">
        <div className="w-full h-full bg-gradient-radial from-white/60 to-transparent rounded-lg transform rotate-[-13deg]" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center px-10 pt-10 pb-5 max-w-6xl mx-auto text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative"
        >
          {/* <div className="w-36 h-36 p-2 bg-gradient-to-br from-gray-800 to-black rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(64,120,168,0.3)]"> */}
          <NextImage
            src="/logo.png"
            alt="NFL Live Hub logo"
            width={150}
            height={150}
            className="w-28 md:w-36"
            priority
          />
          {/* </div> */}
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="-mt-3 md:-mt-6"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 rounded-full backdrop-blur-sm">
            {/* Pulsing Dot */}
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-400 rounded-full opacity-50"
              />
              <div className="absolute inset-0 w-2 h-2 bg-green-300 rounded-full shadow-[0_0_20px_rgba(168,209,255,0.5)]" />
            </div>
            <span className="text-white/60 text-xs md:text-sm font-medium tracking-wide">
              LIVE UPDATE
            </span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col justify-start flex-shrink-0 outline-none my-6 md:my-8"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium leading-tight tracking-tight mb-4">
            <span className="bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">
              The Chrome Extension for NFL Fans.{" "}
              <span className="font-serif italic font-normal">With AI.</span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mb-8 border border-white/20 px-4 py-2 rounded-2xl md:rounded-full backdrop-blur-sm"
        >
          <p className="text-sm md:text-base text-white/60 max-w-2xl leading-relaxed">
            Live Scores, Instant Highlights, AI Team Analysis, and More.
          </p>
        </motion.div>

        {/* Mobile: Email me the link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="mb-8 w-full max-w-md block md:hidden"
        >
          <form
            noValidate
            className="relative"
            onSubmit={async (e) => {
              e.preventDefault();
              const email = emailInput.trim();
              const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
              if (!isValid) {
                setEmailError("Enter a valid email");
                return;
              }
              setEmailError(null);
              try {
                await fetch("/api/send-link", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ email }),
                });
              } catch {
                // Silently ignore email send errors for UX; user still lands on confirmation
              }
              router.push(
                `/email-confirmation?email=${encodeURIComponent(email)}`,
              );
            }}
          >
            <label
              htmlFor="mobile-email"
              className="block text-sm text-white/70 mb-2"
            >
              Email me the link
            </label>
            <div className="flex flex-col items-stretch gap-2">
              <input
                id="mobile-email"
                type="email"
                inputMode="email"
                placeholder="Email me the link"
                aria-label="Email me the link"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="flex-1 rounded-xl bg-black/60 border border-white/15 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-400/60"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
              >
                <FaChrome className="text-white text-base" />
                Get it for free
              </button>
            </div>
            {emailError && (
              <p className="mt-2 text-xs text-red-400">{emailError}</p>
            )}
          </form>
        </motion.div>

        {/* Desktop: CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.9,
            type: "spring",
            stiffness: 400,
            damping: 16,
          }}
          className="mb-8 hidden md:block"
        >
          <Link
            href="https://chromewebstore.google.com/detail/nfl-live-hub-scores-stats/djfgoccgbpkgoejomjbadfppighhikhh"
            target="_blank"
            rel="noopener"
            aria-label="Install Chrome Extension from the Chrome Web Store"
            className="group relative inline-flex items-center rounded-2xl px-5 py-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 transition-shadow duration-300 shadow-[0_6px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_10px_28px_rgba(37,99,235,0.35)]"
          >
            <div
              className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-70"
              style={{
                background:
                  "radial-gradient(40% 60% at 50% 100%, rgba(59,130,246,0.55) 0%, rgba(59,130,246,0) 100%)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,#3B82F6_0%,#2563EB_100%)] opacity-90 transition-opacity duration-200 group-hover:opacity-100" />
            <div className="relative z-10 flex items-center gap-3 text-white">
              <div className="flex items-center justify-center rounded-full border border-white/20 bg-white/20 backdrop-blur-sm size-7">
                <FaChrome className="text-white text-lg" />
              </div>
              <span className="font-semibold tracking-tight">
                Get Chrome Extension
              </span>
              <span className="ml-1 hidden md:inline-flex items-center rounded-full border border-white/25 bg-white/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/90">
                Free
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex items-center gap-4"
        >
          {socialLinks.map((social, index) => (
            <React.Fragment key={social.name}>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener"
                className="p-3 text-gray-400 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/5"
              >
                {social.icon}
              </Link>
              {index < socialLinks.length - 1 && (
                <div className="w-px h-6 bg-white/30" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-10 z-40"
      >
        <Link
          href="#founder-note"
          className="inline-flex items-center justify-center w-9 h-9 "
        >
          <motion.svg
            width="32"
            height="32"
            viewBox="0 0 256 256"
            className="text-gray-400"
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <path
              d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"
              fill="currentColor"
            />
          </motion.svg>
        </Link>
      </motion.div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent z-30" />
    </section>
  );
}
