"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordian";
import { Badge } from "@/components/ui/badge";

export function MigrationFAQSection() {
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
              <AccordionTrigger>Will my data be safe during the migration?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We implement high-end encryption protocols and perform rigorous checks to protect your data integrity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can you migrate from legacy systems to modern cloud platforms?</AccordionTrigger>
              <AccordionContent>
                Yes, we specialize in migrating outdated systems to modern cloud, hybrid, or on-premise environments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How long does the average migration take?</AccordionTrigger>
              <AccordionContent>
                Timelines vary, but we always aim for minimal disruption—most migrations are completed within a few days.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What if something goes wrong after migration?</AccordionTrigger>
              <AccordionContent>
                We’ve got your back! Our post-migration support includes debugging, system tests, and on-call experts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Will there be any downtime for my customers?</AccordionTrigger>
              <AccordionContent>
              Nope. We use zero-downtime deployment strategies to keep your business running smoothly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>What is the timeline for implementing migration?</AccordionTrigger>
              <AccordionContent>
                We provide a clear timeline for the implementation process, ensuring timely delivery of your migration.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
