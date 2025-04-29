"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordian";
import { Badge } from "@/components/ui/badge";

export function MobileFAQSection() {
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
              <AccordionTrigger>Can you build an app for both Android and iOS?</AccordionTrigger>
              <AccordionContent>
                Yes, we build cross-platform apps that work on both Android and iOS.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Will I be able to manage updates and push notifications?</AccordionTrigger>
              <AccordionContent>
                Absolutely. We provide admin panels or integrate third-party tools to help you manage features post-launch.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How do I know which features to include in my mobile app?</AccordionTrigger>
              <AccordionContent>
                We guide you during discovery by mapping features to business outcomes and user behaviors.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What happens after the app is launched?</AccordionTrigger>
              <AccordionContent>
                Based on real-time feedback, we offer post-launch support, performance optimization, and feature expansion.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How secure will my mobile app be?</AccordionTrigger>
              <AccordionContent>
              We follow best data encryption, authentication, and secure API development practices to protect your users.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Do you offer ongoing maintenance services?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer ongoing maintenance services to keep your application running smoothly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
