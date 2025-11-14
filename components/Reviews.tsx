"use client";

import React from "react";
import { motion } from "motion/react";
import NextImage from "next/image";
import StructuredData from "@/components/StructuredData";

export default function Reviews() {
  const reviews = [
    {
      name: "Bruno Cavaliere",
      date: "Aug 19, 2025",
      rating: 5,
      comment:
        "It's awesome to be able to follow it anytime! Really cool experience!",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjWcrmGJ5QH2u1LF8fbOSwo0NliWP5MCx4LeUCsalmoeu8fjknFF=s96-w96-h96",
    },
    {
      name: "Shail Patel",
      date: "May 24, 2025",
      rating: 4,
      comment:
        "Great extension, but I wish there were also a way to see past seasons scores.",
      avatar:
        "https://lh3.googleusercontent.com/a/ACg8ocKEBiY0HMTcy_E3vNiZuGTcxNlbU2XFPcBOG5xeiL6qv6v4og=s96-w96-h96",
    },
    {
      name: "Adekeye Ifedayo",
      date: "Jan 3, 2025",
      rating: 5,
      comment:
        "Amazing extension\n\nJust what Chrome has been missing for Sports fans",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjWWuxw_1DuHt8hXsCwLGbKl6u3C2sxid2Vp6m-kvfT-g7w7a60s=s96-w96-h96",
    },
    {
      name: "Gabriel Carvalho",
      date: "Jan 19, 2023",
      rating: 5,
      comment:
        "I loved this extension because it presents the results easily accessible",
      avatar:
        "https://lh3.googleusercontent.com/a-/ALV-UjXvFcRMXvioF8y22MwluWKtm30FXL8xD2R1HK3PfADlk7Y_7NAi=s96-w96-h96",
    },
  ];

  // Generate Review structured data
  const reviewStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "NFL Live Hub",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "9",
      reviewCount: "5",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
      },
      datePublished: new Date(review.date).toISOString().split("T")[0],
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: review.comment,
    })),
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "text-yellow-400" : "text-gray-600"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="relative bg-black py-24 overflow-hidden">
      <StructuredData data={reviewStructuredData} />

      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[793px] h-[499px] opacity-10 z-0">
        <div className="w-full h-full bg-gradient-radial from-gray-300/70 to-transparent rounded-lg transform rotate-[-13deg]" />
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
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-white/80 text-sm font-medium tracking-wide">
                REVIEWS
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
                What NFL Fans{" "}
                <span className="font-serif italic font-normal">Are Saying</span>
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
              Join thousands of satisfied users who have transformed their NFL
              experience
            </p>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-colors duration-300"
            >
              {/* Review Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-800">
                  <NextImage
                    src={review.avatar}
                    alt={`${review.name}'s profile picture`}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium mb-1">
                    {review.name}
                  </h3>
                  <p className="text-white/40 text-sm mb-2">{review.date}</p>
                  {renderStars(review.rating)}
                </div>
              </div>

              {/* Review Content */}
              <p className="text-white/70 leading-relaxed whitespace-pre-line">
                {review.comment}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/60 mb-6">
            See more reviews on the Chrome Web Store
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://chromewebstore.google.com/detail/nfl-live-hub-scores-stats/djfgoccgbpkgoejomjbadfppighhikhh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Read All Reviews
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
