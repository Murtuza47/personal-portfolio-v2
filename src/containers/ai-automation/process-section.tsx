import { Badge } from "@/components/ui/badge";
import { GradientCard } from "@/components/ui/gradient-card";

export function AIProcessSection() {
  return (
    <section className="relative py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
            My Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our 5-Step AI Automation Framework
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <GradientCard
            number="01"
            title="Initial Consultation"
            description="Understanding your automation needs and current workflows."
          />
          <GradientCard
            number="02"
            title="AI Solution Design"
            description="Designing custom AI agents for specific tasks."
          />
          <GradientCard
            number="03"
            title="Development & Integration"
            description="Building and integrating the AI solutions into your workflow."
          />
          <GradientCard
            number="04"
            title="Testing & Optimization"
            description="Ensuring AI agents work seamlessly and optimize performance."
          />
          <GradientCard
            number="05"
            title="Deployment & Ongoing Support"
            description="Deploying AI agents and offering continued support for long-term success."
          />
        </div>
      </div>
    </section>
  );
}
