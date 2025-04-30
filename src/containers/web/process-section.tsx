import { Badge } from "@/components/ui/badge";
import { GradientCard } from "@/components/ui/gradient-card";

export function WebProcessSection() {
  return (
    <section className="relative py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
            My Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Turning Ideas into Reality: Our 5-Step Full-Stack Development Process
          </h2>
          <p className="text-muted-foreground">
            A structured, collaborative approach ensures we create the perfect solution for your needs.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <GradientCard
            number="01"
            title="Discovery & Consultation"
            description="Understanding your needs and objectives."
          />
          <GradientCard
            number="02"
            title="Design & Prototyping"
            description="Creating intuitive and interactive designs."
          />
          <GradientCard
            number="03"
            title="Development & Coding"
            description="Building the frontend and backend of your application."
          />
          <GradientCard
            number="04"
            title="Testing & QA"
            description="Ensuring quality, security, and performance."
          />
          <GradientCard
            number="05"
            title="Launch & Support"
            description="Deploying your app and offering ongoing maintenance."
          />
        </div>
      </div>
    </section>
  );
}
