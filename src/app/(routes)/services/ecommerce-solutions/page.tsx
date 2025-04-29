import { ECommerceCTASection } from "@/containers/ecommerce/cta-section";
import { ECommerceFAQSection } from "@/containers/ecommerce/faq-section";
import { ECommerceHomeSection } from "@/containers/ecommerce/home-section";
import { ECommerceOverviewSection } from "@/containers/ecommerce/overview-section";
import { ECommerceProcessSection } from "@/containers/ecommerce/process-section";
import { ECommerceTechnologySection } from "@/containers/ecommerce/technology-section";


export default function ECommerceSolutionPage() {
  return (
    <>
      <ECommerceHomeSection />

      <ECommerceOverviewSection />

      <ECommerceProcessSection />

      <ECommerceTechnologySection />

      {/* Pricing Section */}

      <ECommerceFAQSection />

      <ECommerceCTASection />
    </>
  )
}
