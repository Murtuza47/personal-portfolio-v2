import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function AIOverviewSection() {
  return (
    <section className="relative py-20 sm:py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden bg-muted/30">
      <div className="container">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
          <div className="space-y-4 sm:space-y-6">
            <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Overview
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">A Decade of Providing Performance-Driven Web Applications</h2>
            <p className="text-muted-foreground">
              Our AI-powered automation services leverage the latest in artificial intelligence to streamline your business processes. 
              From data extraction and summarization to task automation, we create intelligent agents that can handle repetitive tasks, 
              saving your team valuable time and effort. With AI on your side, you can focus on strategic goals while automation takes care of the routine.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Build custom AI-powered agents tailored to your needs.</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Automate data extraction, summarization, and other repetitive tasks.</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Boost productivity with intelligent process automation.</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Seamlessly integrate AI solutions into existing workflows.</p>
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
