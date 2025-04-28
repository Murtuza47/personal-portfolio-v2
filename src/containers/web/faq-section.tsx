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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently asked questions</h2>
          <p className="text-muted-foreground">Answers to common questions about my web development services.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How long does it take to build a website?</AccordionTrigger>
              <AccordionContent>
                The timeline varies depending on the complexity of the project. A basic website typically takes 2-4
                weeks, while more complex projects can take 2-3 months. I'll provide a detailed timeline during our
                initial consultation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you provide website maintenance services?</AccordionTrigger>
              <AccordionContent>
                Yes, I offer ongoing maintenance packages to keep your website secure, up-to-date, and performing
                optimally. These packages include regular updates, security monitoring, backups, and technical
                support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Will my website be mobile-friendly?</AccordionTrigger>
              <AccordionContent>
                All websites I build are fully responsive and optimized for all devices, including smartphones,
                tablets, and desktop computers. This ensures your users have a seamless experience regardless of the
                device they're using.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you help with website hosting?</AccordionTrigger>
              <AccordionContent>
                Yes, I can recommend and set up reliable hosting solutions based on your specific needs. I work with
                industry-leading hosting providers to ensure your website is fast, secure, and has excellent uptime.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Can you help with SEO for my website?</AccordionTrigger>
              <AccordionContent>
                Yes, I implement SEO best practices during the development process to ensure your website is optimized
                for search engines. This includes proper HTML structure, fast loading times, mobile optimization, and
                other on-page SEO factors. For more comprehensive SEO services, I can create a custom strategy for
                your business.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
