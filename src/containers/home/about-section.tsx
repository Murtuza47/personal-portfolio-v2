"use client"

import { AnimatedCounter } from "@/components/animation/animated-counter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/Ali Murtaza Resume.pdf';
    link.download = 'Ali Murtaza Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <section id="about" className="py-16 sm:py-20 bg-muted/30">
      <div className="container px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-background shadow-xl">
              <Image
                src=""
                alt="About Ali Murtaza"
                width={600}
                height={640}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute top-8 -right-4 sm:-right-8 z-20 bg-background rounded-lg p-3 sm:p-4 shadow-lg">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center">
                  <AnimatedCounter value={5} duration={2} className="text-2xl sm:text-3xl font-bold text-primary" />
                  <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter value={15} duration={2} className="text-2xl sm:text-3xl font-bold text-primary" />
                  <p className="text-xs sm:text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter value={100} duration={2} className="text-2xl sm:text-3xl font-bold text-primary" />
                  <p className="text-xs sm:text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center">
                  <AnimatedCounter value={3} duration={2} className="text-2xl sm:text-3xl font-bold text-primary" />
                  <p className="text-xs sm:text-sm text-muted-foreground">Achievements & Certifications</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <Badge className="mb-2 px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                Meet Ali Murtaza
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Full-Stack Developer | Automation Expert | Microsoft 365 Solutions Architect
              </h2>
            </div>
            <p className="text-muted-foreground">
              I build modern, scalable, and intelligent digital solutions for businesses that want more than just
              code—they want results. With 10+ years of hands-on experience, I fuse development with innovation,
              delivering robust, secure, and automation-driven products.
            </p>
            <p className="text-muted-foreground font-bold text-lg">
              What Sets Me Apart:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">Delivered end-to-end solutions across web, mobile, and cloud</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">Specializing in AI-powered agents and custom automation with OpesnAI & LangChain</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">Expertise in PowerShell scripting & SharePoint Framework for enterprise-grade solutions</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">Built and optimized solutions for startups and Fortune 500s alike</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              I don’t just build applications — I solve real problems with purpose-built technology that works for you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <h3 className="font-medium">Name:</h3>
                <p className="text-muted-foreground">Ali Murtaza</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Email:</h3>
                <p className="text-muted-foreground">azatrum.005@gmail.com</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Location:</h3>
                <p className="text-muted-foreground">Karachi, Pakistan</p>
              </div>
            </div>
            <Button
              size="lg"
              className="w-full sm:w-auto group"
              onClick={handleDownloadCV}
            >
              Download CV
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}