import { SPFXCTASection } from "@/containers/spfx/cta-section";
import { SPFXFAQSection } from "@/containers/spfx/faq-section";
import { SPFXHomeSection } from "@/containers/spfx/home-section";
import { SPFXOverviewSection } from "@/containers/spfx/overview-section";
import { SPFXProcessSection } from "@/containers/spfx/process-section";
import { SPFXTechnologySection } from "@/containers/spfx/technology-section";


export default function WebDevelopmentPage() {
  return (
    <>
      <SPFXHomeSection  />

      <SPFXOverviewSection />

      <SPFXProcessSection />

      <SPFXTechnologySection />

      {/* Pricing Section */}

      <SPFXFAQSection />

      <SPFXCTASection />
    </>
  )
}
