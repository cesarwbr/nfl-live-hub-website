"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { FaChrome } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Benefits", href: "/#benefits" },
    { name: "Features", href: "/#features" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/75 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/logo.png"
              alt="NFL Live Hub logo"
              width={60}
              height={60}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 px-6 py-3 bg-black/30 border border-white/10 rounded-full backdrop-blur-sm">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              <Link
                href={item.href}
                className="text-white/75 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 16,
          }}
          className="hidden md:block"
        >
          <Link
            href="https://chromewebstore.google.com/detail/nfl-live-hub-scores-stats/djfgoccgbpkgoejomjbadfppighhikhh"
            target="_blank"
            rel="noopener"
            aria-label="Install Chrome Extension from the Chrome Web Store"
            className="group relative inline-flex items-center rounded-xl px-3.5 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 transition-shadow duration-300 shadow-[0_6px_18px_rgba(37,99,235,0.2)] hover:shadow-[0_10px_24px_rgba(37,99,235,0.3)]"
          >
            {/* Outer glow */}
            <div
              className="pointer-events-none absolute -inset-0.5 rounded-xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-70"
              style={{
                background:
                  "radial-gradient(40% 60% at 50% 100%, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0) 100%)",
              }}
            />

            {/* Border / stroke */}
            <div className="pointer-events-none absolute inset-0 rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5" />

            {/* Fill */}
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-[linear-gradient(135deg,#3B82F6_0%,#2563EB_100%)] opacity-90 transition-opacity duration-200 group-hover:opacity-100" />

            {/* Content */}
            <div className="relative z-10 flex items-center gap-2 text-white">
              <FaChrome className="text-white/90" />
              <span className="text-sm font-semibold tracking-tight">
                Get Extension
              </span>
              <span className="ml-1 hidden md:inline-flex items-center rounded-full border border-white/25 bg-white/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/90">
                Free
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-6 h-0.5 bg-current mb-1.5 origin-center" />
            <div className="w-6 h-0.5 bg-current origin-center" />
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-black/90 backdrop-blur-xl border-t border-white/10"
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-white/75 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
