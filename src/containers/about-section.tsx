"use client"

import { AnimatedCounter } from "@/components/animation/animated-counter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
                About Me
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Crafting digital experiences with passion and precision
              </h2>
            </div>
            <p className="text-muted-foreground">
              I'm Alex Smith, a passionate UI/UX designer and developer with over 5 years of experience creating
              beautiful, functional digital experiences. I specialize in translating complex problems into intuitive
              interfaces that users love.
            </p>
            <p className="text-muted-foreground">
              My approach combines creative design thinking with technical expertise to deliver solutions that not
              only look great but also perform exceptionally. I believe in user-centered design and creating products
              that make a difference.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <h3 className="font-medium">Name:</h3>
                <p className="text-muted-foreground">Alex Smith</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Email:</h3>
                <p className="text-muted-foreground">hello@alexsmith.com</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Location:</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Availability:</h3>
                <p className="text-muted-foreground">Freelance / Full-time</p>
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