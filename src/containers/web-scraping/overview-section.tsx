import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function WebScrapingOverviewSection() {
  return (
    <section className="relative py-20 sm:py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden bg-muted/30">
      <div className="container">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
          <div className="space-y-4 sm:space-y-6">
            <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              About My Web Scraping Services
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">A Decade of Delivering Robust Web Scraping Solutions</h2>
            <p className="text-muted-foreground">
              Access to accurate and timely information gives businesses a powerful edge in today's data-driven world. 
              I design intelligent web scraping tools that extract data at scale — from e-commerce sites and directories 
              to financial portals and competitor trackers. Whether you need real-time updates or periodic data harvesting, 
              my scraping solutions are tailored to your business goals and compliance needs.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Custom scripts to extract specific data sets at scale.</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Support for structured output: CSV, JSON, Excel, or API-ready.</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Bypass anti-scraping protections with ethical, robust techniques.</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Scheduling and automation for real-time or recurring data extraction.</p>
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
