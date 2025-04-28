"use client"

import { AnimatedBadge } from "@/components/animation/animated-badge";
import { AnimatedText } from "@/components/animation/animated-text";
import { HomeAnimation } from "@/components/animation/home-animation";
import { SocialLinks } from "@/components/social-links";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HomeSection() {
  return (
    <section id="home" className="relative h-[calc(100vh-65px)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HomeAnimation />
        </div>

        <div className="container relative z-10 px-4">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <AnimatedBadge
                  prefix="I'm a"
                  services={["Web Developer", "Mobile Dev", "Consultant", "Tech Expert", "Full-Stack Dev"]}
                />
                <AnimatedText
                  text="I Built Smart & Scalable Solutions"
                  className="text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                />
                <p className="text-muted-foreground max-w-md">
                  Transform your ideas into secure, high-performance digital products powered by full-stack development and intelligent automation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Contact Me
                </Button>
              </div>
              <SocialLinks />
            </div>
            <div className="relative hidden md:block">
              <div className="relative z-10 aspect-square overflow-hidden rounded-full border-4 border-background shadow-xl mx-auto max-w-md">
                <Image
                  src=""
                  alt="Ali Murtaza"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl -z-10" />
            </div>

            <div className="relative md:hidden mx-auto">
              <div className="relative z-10 aspect-square overflow-hidden rounded-full border-4 border-background shadow-xl mx-auto max-w-[250px]">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Ali Murtaza"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl -z-10" />
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <Link
              href="#about"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary/20 transition-all duration-300 shadow-sm hover:shadow-md animate-border"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("about");
                if (element) {
                  const headerOffset = 65;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
            >
              <ChevronDown className="h-6 w-6" />
              <span className="sr-only">Scroll Down</span>
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-primary/5 rounded-l-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-tr-full blur-3xl -z-10" />
      </section>
  )
}
