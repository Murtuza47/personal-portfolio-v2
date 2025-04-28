import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function WebOverviewSection() {
  return (
    <section className="py-12 sm:py-20 bg-muted/30">
      <div className="container">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
          <div className="space-y-4 sm:space-y-6">
            <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Overview
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Crafting exceptional web experiences</h2>
            <p className="text-muted-foreground">
              I specialize in building modern, high-performance websites and web applications that provide exceptional
              user experiences. Using the latest technologies and best practices, I create solutions that are not only
              visually appealing but also functional, accessible, and optimized for search engines.
            </p>
            <p className="text-muted-foreground">
              Whether you need a simple landing page, a complex e-commerce platform, or a custom web application, I
              have the skills and experience to bring your vision to life.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Responsive designs that work flawlessly across all devices</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Fast-loading, optimized code for better performance</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>SEO-friendly structure to improve visibility</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Accessible interfaces that comply with WCAG guidelines</p>
              </div>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="relative z-10 rounded-2xl overflow-hidden border-4 sm:border-8 border-background shadow-xl">
              <Image
                src=""
                alt="Web Development"
                width={800}
                height={600}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 z-20 bg-background rounded-lg p-3 sm:p-4 shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  >
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">Modern Tech Stack</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">React, Next.js, Tailwind CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
