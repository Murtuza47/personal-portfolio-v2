"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordian";
import { Badge } from "@/components/ui/badge";

export function PerformanceOptimizationFAQSection() {
  return (
    <section className="relative py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">FAQ – Get Answers Before We Start</h2>
          <p className="text-muted-foreground">Still curious? Here are the most common questions clients ask before we kick off a project.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Can you scrape any website I ask for?</AccordionTrigger>
              <AccordionContent>
                We can scrape most public-facing websites, but always ensure it complies with legal and ethical standards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How often can you deliver updated data?</AccordionTrigger>
              <AccordionContent>
                Depending on the project, we can set up real-time, daily, weekly, or custom delivery schedules.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What formats will the scraped data be in?</AccordionTrigger>
              <AccordionContent>
                Data can be delivered in CSV, Excel, JSON, or pushed to your database or API endpoint.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Will the scraper still work if the website changes?</AccordionTrigger>
              <AccordionContent>
                Yes — we offer maintenance packages to keep your scraper up-to-date with structural changes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Is this solution scalable for large datasets?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We design scrapers with multi-threading and queue systems to handle massive volumes efficiently.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
