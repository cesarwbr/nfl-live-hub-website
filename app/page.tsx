import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FounderNote from "@/components/FounderNote";
import Benefits from "@/components/Benefits";
// import Services from "@/components/Services";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const revalidate = 3600; // ISR for home page

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <main>
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "NFL Live Hub",
            applicationCategory: "BrowserApplication",
            operatingSystem: "Chrome, Chromium-based browsers",
            inLanguage: "en-US",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            url: "https://chromewebstore.google.com/detail/nfl-live-hub-scores-stats/djfgoccgbpkgoejomjbadfppighhikhh",
            image: ["/logo.png"],
            description:
              "Live NFL scores, instant highlights, AI team analysis, and more.",
            downloadUrl:
              "https://chromewebstore.google.com/detail/nfl-live-hub-scores-stats/djfgoccgbpkgoejomjbadfppighhikhh",
            isAccessibleForFree: true,
            screenshot: {
              "@type": "ImageObject",
              url: "/logo.png",
              width: 512,
              height: 512,
            },
            author: { "@type": "Person", name: "Cesar" },
            publisher: { "@type": "Organization", name: "NFL Live Hub" },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: 4.1,
              bestRating: 5,
              worstRating: 1,
              ratingCount: 7,
              reviewCount: 7,
            },
          }}
        />
        <Hero />
        <FounderNote />
        <Benefits />
        {/* <Services /> */}
        <Features />
      </main>
      <Footer />
    </div>
  );
}
