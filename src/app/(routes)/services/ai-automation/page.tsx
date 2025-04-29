import { AIHomeSection } from "@/containers/ai-automation/home-section"
import { AIOverviewSection } from "@/containers/ai-automation/overview-section"
import { AIProcessSection } from "@/containers/ai-automation/process-section"
import { AITechnologySection } from "@/containers/ai-automation/technology-section"
import { AIFAQSection } from "@/containers/ai-automation/faq-section"
import { AICTASection } from "@/containers/ai-automation/cta-section"

export default function AiAgentsAndAutomationPage() {
  return (
    <>
      <AIHomeSection />

      <AIOverviewSection />

      <AIProcessSection />

      <AITechnologySection />

      {/* Pricing Section */}

      <AIFAQSection />

      <AICTASection />
    </>
  )
}
