import { Badge } from "@/components/ui/badge";
import { GradientCard } from "@/components/ui/gradient-card";

export function MobileProcessSection() {
  return (
    <section className="relative py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
            My Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            My 5-Step Mobile Momentum Workflow
          </h2>
          <p className="text-muted-foreground">
            A structured, collaborative approach ensures we create the perfect solution for your needs.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <GradientCard
            number="01"
            title="Requirements & Research"
            description="We identify your business goals, user needs, and platform targets."
          />
          <GradientCard
            number="02"
            title="Wireframing & Design"
            description="UX/UI mockups are crafted to define flow, visuals, and behavior."
          />
          <GradientCard
            number="03"
            title="App Development"
            description="Native or hybrid apps are coded for speed, security, and feature compatibility."
          />
          <GradientCard
            number="04"
            title="Testing & QA"
            description="Rigorously tested across devices for bugs, responsiveness, and performance."
          />
          <GradientCard
            number="05"
            title="Deployment & Support"
            description="We launch your app to stores and provide ongoing support and updates."
          />
        </div>
      </div>
    </section>
  );
}
