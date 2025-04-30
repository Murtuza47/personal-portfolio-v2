import { WebScrapingCTASection } from "@/containers/web-scraping/cta-section";
import { WebScrapingFAQSection } from "@/containers/web-scraping/faq-section";
import { WebScrapingHomeSection } from "@/containers/web-scraping/home-section";
import { WebScrapingOverviewSection } from "@/containers/web-scraping/overview-section";
import { WebScrapingProcessSection } from "@/containers/web-scraping/process-section";
import { WebScrapingTechnologySection } from "@/containers/web-scraping/technology-section";


export default function WebScrapingPage() {
  return (
    <>
      <WebScrapingHomeSection />

      <WebScrapingOverviewSection />

      <WebScrapingProcessSection />

      <WebScrapingTechnologySection />

      {/* Pricing Section */}

      <WebScrapingFAQSection />

      <WebScrapingCTASection />
    </>
  )
}
