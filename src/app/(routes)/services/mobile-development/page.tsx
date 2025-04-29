
import { MobileCTASection } from "@/containers/mobile/cta-section"
import { MobileFAQSection } from "@/containers/mobile/faq-section"
import { MobileHomeSection } from "@/containers/mobile/home-section"
import { MobileOverviewSection } from "@/containers/mobile/overview-section"
import { MobileProcessSection } from "@/containers/mobile/process-section"
import { MobileTechnologySection } from "@/containers/mobile/technology-section"

export default function MobileDevelopmentPage() {
  return (
    <>
      <MobileHomeSection />

      <MobileOverviewSection />

      <MobileProcessSection />

      <MobileTechnologySection />

      {/* Pricing Section */}

      <MobileFAQSection />

      <MobileCTASection />
    </>
  )
}
