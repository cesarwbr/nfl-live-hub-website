"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks: {
    [key in "company" | "resources" | "legal"]: {
      name: string;
      href: string;
    }[];
  } = {
    company: [
      // { name: "About", href: "/about" },
      // { name: "Services", href: "#services" },
      // { name: "Process", href: "#process" },
      // { name: "Pricing", href: "#pricing" },
    ],
    resources: [
      // { name: "Blog", href: "/blog" },
      // { name: "Documentation", href: "/docs" },
      // { name: "Support", href: "/support" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      // { name: "Cookie Policy", href: "/cookies" },
    ],
  };

  const socialLinks = [
    {
      name: "X",
      href: "https://x.com/NFLLiveHub",
      icon: <FaXTwitter />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/nfllivehub",
      icon: <FaInstagram />,
    },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[793px] h-[499px] opacity-5 pointer-events-none">
        <div className="w-full h-full bg-gradient-radial from-white/30 to-transparent rounded-lg" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10 py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col-reverse md:flex-row justify-between gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 max-w-xs flex flex-col items-center md:items-start"
          >
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="NFL Live Hub logo"
                width={60}
                height={60}
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 text-center md:text-left">
              Turn your browser into the ultimate NFL command center with
              real-time scores, AI insights, and community features.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener"
                  className="p-2 text-white/60 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-16">
            {/* Company Links */}
            {footerLinks.company.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-medium mb-6">Company</h3>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
            {/* Resources Links */}
            {footerLinks.resources.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-medium mb-6">Resources</h3>
                <ul className="space-y-4">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Legal Links */}
            {footerLinks.legal.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-medium mb-6">Legal</h3>
                <ul className="space-y-4">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/40 text-sm">
            © {currentYear} NFL Live Hub. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="mailto:contact@nfllivehub.com"
              className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
            >
              contact@nfllivehub.com
            </Link>
            <span className="text-white/40">•</span>
            <span className="text-white/60 text-sm">
              Made with ❤️ by{" "}
              <a
                href="https://cesarwilliam.com"
                target="_blank"
                className="hover:text-white"
              >
                Cesar
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
