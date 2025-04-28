"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordian";
import { Badge } from "@/components/ui/badge";

export function WebFAQSection() {
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
              <AccordionTrigger>What is full-stack development, and why do I need it?</AccordionTrigger>
              <AccordionContent>
              Full-stack development covers both frontend and backend development. It ensures your
              web application is seamless, scalable, and fully functional.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can you build mobile applications as part of full-stack development?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer both web and mobile development as part of our full-stack services.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How long does it take to build a custom web application?</AccordionTrigger>
              <AccordionContent>
                Timelines vary depending on complexity, but we provide a clear project timeline 
                and milestones from the beginning.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What technologies do you use for full-stack development?</AccordionTrigger>
              <AccordionContent>
                We use cutting-edge technologies such as <strong>React, Node.js, and Python</strong> ensuring optimal performance and security.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Will my web application be scalable for future growth?</AccordionTrigger>
              <AccordionContent>
                Yes, scalability is a key focus of our development process. We build applications that grow with your business needs.
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
