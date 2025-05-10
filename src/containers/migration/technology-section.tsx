"use client"

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function MigrationTechnologySection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  const technologies = [
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "NestJS", icon: "https://skillicons.dev/icons?i=nestjs" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "GraphQL", icon: "https://skillicons.dev/icons?i=graphql" },
    { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgresql" },
    { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
    { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
    { name: "Azure", icon: "https://skillicons.dev/icons?i=azure" },
    { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
    { name: "Kubernetes", icon: "https://skillicons.dev/icons?i=kubernetes" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
    { name: "Redux", icon: "https://skillicons.dev/icons?i=redux" },
    { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
    { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
    { name: "Prisma", icon: "https://skillicons.dev/icons?i=prisma" },
    { name: "Redis", icon: "https://skillicons.dev/icons?i=redis" },
    { name: "Jest", icon: "https://skillicons.dev/icons?i=jest" },
    { name: "Webpack", icon: "https://skillicons.dev/icons?i=webpack" },
  ];

  return (
    <section className="relative py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            My Reach
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">I use modern technologies to build secure and scalable applications</h2>
          <p className="text-muted-foreground">
            I stay up-to-date with the latest technologies to deliver modern, efficient solutions.
          </p>
        </div>
        
        {/* Infinite Scrolling Tech Stack */}
        <div className="relative overflow-hidden w-full">
          <div 
            ref={scrollRef}
            className="flex space-x-8 py-4 overflow-x-auto scrollbar-hide"
            style={{ 
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }}
          >
            {/* First set of technologies */}
            {technologies.map((tech, index) => (
              <div
                key={`tech-${index}`}
                className="flex flex-col items-center justify-center p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[120px] border border-border"
              >
                <div className="relative h-16 w-16 mb-3">
                  <Image 
                    src={tech.icon} 
                    alt={tech.name} 
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-medium text-sm text-center">{tech.name}</p>
              </div>
            ))}
            
            {/* Duplicate set for seamless scrolling */}
            {technologies.map((tech, index) => (
              <div
                key={`tech-duplicate-${index}`}
                className="flex flex-col items-center justify-center p-4 bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-[120px] border border-border"
              >
                <div className="relative h-16 w-16 mb-3">
                  <Image 
                    src={tech.icon} 
                    alt={tech.name} 
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="font-medium text-sm text-center">{tech.name}</p>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  )
}
