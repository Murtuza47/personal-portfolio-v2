"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordian";
import { Badge } from "@/components/ui/badge";

export function AIFAQSection() {
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
              <AccordionTrigger>What tasks can AI automation handle?</AccordionTrigger>
              <AccordionContent>
                AI can automate data extraction, summarization, report generation, and more tasks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I know AI is right for my business?</AccordionTrigger>
              <AccordionContent>
                AI automation can significantly increase efficiency if your business has repetitive tasks that consume valuable time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Will AI automation be costly to implement?</AccordionTrigger>
              <AccordionContent>
                We offer scalable and cost-effective solutions, ensuring you only pay for the necessary functionality.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can AI integration be done with my existing tools?</AccordionTrigger>
              <AccordionContent>
                Yes, we integrate AI seamlessly with your current software and tools, ensuring a smooth transition.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How do you ensure the AI is secure?</AccordionTrigger>
              <AccordionContent>
                We implement robust security measures to protect your data during the automation process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>What is the timeline for implementing AI automation?</AccordionTrigger>
              <AccordionContent>
                We provide a clear timeline for the implementation process, ensuring timely delivery of your AI solutions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
