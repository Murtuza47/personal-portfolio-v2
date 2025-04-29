"use client"

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function MobileTechnologySection() {
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
    { name: "React", icon: "/assets/tech/react.svg" },
    { name: "Next.js", icon: "/assets/tech/nextjs.svg" },
    { name: "Tailwind CSS", icon: "/assets/tech/tailwind.svg" },
    { name: "TypeScript", icon: "/assets/tech/typescript.svg" },
    { name: "Node.js", icon: "/assets/tech/nodejs.svg" },
    { name: "MongoDB", icon: "/assets/tech/mongodb.svg" },
    { name: "GraphQL", icon: "/assets/tech/graphql.svg" },
    { name: "PostgreSQL", icon: "/assets/tech/postgresql.svg" },
    { name: "Vercel", icon: "/assets/tech/vercel.svg" },
    { name: "AWS", icon: "/assets/tech/aws.svg" },
    { name: "Docker", icon: "/assets/tech/docker.svg" },
    { name: "Git", icon: "/assets/tech/git.svg" },
    { name: "JavaScript", icon: "/assets/tech/javascript.svg" },
    { name: "HTML5", icon: "/assets/tech/html5.svg" },
    { name: "CSS3", icon: "/assets/tech/css3.svg" },
    { name: "Redux", icon: "/assets/tech/redux.svg" },
    { name: "Express", icon: "/assets/tech/express.svg" },
    { name: "Firebase", icon: "/assets/tech/firebase.svg" },
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
