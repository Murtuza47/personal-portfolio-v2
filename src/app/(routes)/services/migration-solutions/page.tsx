import { MigrationHomeSection } from "@/containers/migration/home-section"
import { MigrationOverviewSection } from "@/containers/migration/overview-section"
import { MigrationProcessSection } from "@/containers/migration/process-section"
import { MigrationTechnologySection } from "@/containers/migration/technology-section"
import { MigrationFAQSection } from "@/containers/migration/faq-section"
import { MigrationCTASection } from "@/containers/migration/cta-section"

export default function MigrationServicesPage() {
  return (
    <>
      <MigrationHomeSection />

      <MigrationOverviewSection />

      <MigrationProcessSection />

      <MigrationTechnologySection />

      {/* Pricing Section */}

      <MigrationFAQSection />

      <MigrationCTASection />
    </>
  )
}
