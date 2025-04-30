import { WebHomeSection } from "@/containers/web/home-section"
import { WebOverviewSection } from "@/containers/web/overview-section"
import { WebProcessSection } from "@/containers/web/process-section"
import { WebTechnologySection } from "@/containers/web/technology-section"
import { WebFAQSection } from "@/containers/web/faq-section"
import { WebCTASection } from "@/containers/web/cta-section"

export default function WebDevelopmentPage() {
  return (
    <>
      <WebHomeSection />

      <WebOverviewSection />

      <WebProcessSection />

      <WebTechnologySection />

      {/* Pricing Section */}

      <WebFAQSection />

      <WebCTASection />
    </>
  )
}
