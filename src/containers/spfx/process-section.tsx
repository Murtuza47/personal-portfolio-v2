import { Badge } from "@/components/ui/badge";
import { GradientCard } from "@/components/ui/gradient-card";

export function SPFXProcessSection() {
  return (
    <section className="relative py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
            My Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Custom SharePoint Solutions: Our 5-Step SPFx Development Process
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <GradientCard
            number="01"
            title="Discovery & Requirements Gathering"
            description="Understanding your business and SharePoint needs."
          />
          <GradientCard
            number="02"
            title="Solution Design"
            description="Designing the architecture and user interface of the SPFx solution."
          />
          <GradientCard
            number="03"
            title="Development & Customization"
            description="Building and customizing web parts and apps."
          />
          <GradientCard
            number="04"
            title="Testing & Optimization"
            description="Ensuring solutions are responsive, secure, and high-performing."
          />
          <GradientCard
            number="05"
            title="Deployment & Maintenance"
            description="Deploying the solutions into your Microsoft 365 environment and offering ongoing support."
          />
        </div>
      </div>
    </section>
  );
}
