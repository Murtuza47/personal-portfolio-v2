"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordian";
import { Badge } from "@/components/ui/badge";

export function SPFXFAQSection() {
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
              <AccordionTrigger>What is SPFx and why should I use it?</AccordionTrigger>
              <AccordionContent>
                SPFx enables you to build custom SharePoint solutions that integrate seamlessly with Microsoft 365 and meet your specific business needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can SPFx work with older versions of SharePoint?</AccordionTrigger>
              <AccordionContent>
                SPFx is designed for SharePoint Online and modern SharePoint experiences but can be extended for older versions with specific configurations.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How long does it take to develop a custom SPFx solution?</AccordionTrigger>
              <AccordionContent>
                Development time varies depending on the complexity of the solution, but we ensure transparency throughout the process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can SPFx be integrated with other business tools?</AccordionTrigger>
              <AccordionContent>
                Yes, SPFx can integrate with other business systems, such as CRM, ERP, and more, for a seamless user experience
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Do you provide support after deployment?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer ongoing support and maintenance to ensure your SPFx solution remains up-to-date and functional.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
