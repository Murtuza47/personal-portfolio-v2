"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordian";
import { Badge } from "@/components/ui/badge";

export function ECommerceFAQSection() {
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
              <AccordionTrigger>Can you build a store for my specific product or niche?</AccordionTrigger>
              <AccordionContent>
                Absolutely. Every store we build is customized to reflect your brand, audience, and unique selling points.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Will my store be mobile-friendly?</AccordionTrigger>
              <AccordionContent>
                Yes — we follow a mobile-first approach to ensure a flawless experience on phones and tablets.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I manage my inventory and orders myself?</AccordionTrigger>
              <AccordionContent>
                Definitely. We integrate intuitive dashboards so you can track and manage everything in real time.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you handle payment gateway integration?</AccordionTrigger>
              <AccordionContent>
                Yes, we integrate major gateways like Stripe, PayPal, and regional options based on your location and audience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Will my store be SEO-optimized?</AccordionTrigger>
              <AccordionContent>
                Of course. We bake in SEO best practices from the start to help your store rank and attract organic traffic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Do you offer ongoing support and maintenance?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer post-launch support and regular maintenance to keep your store running smoothly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
