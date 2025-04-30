import { Badge } from "@/components/ui/badge";
import { GradientCard } from "@/components/ui/gradient-card";

export function ECommerceProcessSection() {
  return (
    <section className="relative py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
            My Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our 5-Step Store Success Workflow
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <GradientCard
            number="01"
            title="Discovery & Strategy"
            description="We define your business goals, target market, and feature needs."
          />
          <GradientCard
            number="02"
            title="UI/UX Design"
            description="Our design team crafts a visually stunning and conversion-focused storefront."
          />
          <GradientCard
            number="03"
            title="Custom Development"
            description="We develop a fully functional, responsive, and scalable e-commerce site."
          />
          <GradientCard
            number="04"
            title="Integration & Testing"
            description="Payment systems, inventory tools, and CRMs are integrated and tested."
          />
          <GradientCard
            number="05"
            title="Launch & Optimize"
            description="We launch your store and optimize performance post-launch for speed and sales."
          />
        </div>
      </div>
    </section>
  );
}
