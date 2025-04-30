import { Badge } from "@/components/ui/badge";
import { GradientCard } from "@/components/ui/gradient-card";

export function MigrationProcessSection() {
  return (
    <section className="relative py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
            My Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our 5-Step Precision Migration Framework
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <GradientCard
            number="01"
            title="Assessment & Planning"
            description="We evaluate your current setup, define goals, and identify risks."
          />
          <GradientCard
            number="02"
            title="Blueprint Design"
            description="We develop a custom migration strategy aligned with your business operations."
          />
          <GradientCard
            number="03"
            title="Pre-Migration Testing"
            description="We perform test runs in a sandbox environment to verify accuracy."
          />
          <GradientCard
            number="04"
            title="Secure Migration Execution"
            description="Real-time data and asset transfer without disruption or loss."
          />
          <GradientCard
            number="05"
            title="Post-Migration Support"
            description="We provide testing, tweaks, and 24/7 support to ensure everything works perfectly."
          />
        </div>
      </div>
    </section>
  );
}
