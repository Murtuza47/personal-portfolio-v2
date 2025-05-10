"use client"

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function ECommerceTechnologySection() {
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
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
    { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/6772E5" },
    { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify/95BF47" },
    { name: "PayPal", icon: "https://cdn.simpleicons.org/paypal/003087" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
    { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
    { name: "AWS", icon: "https://cdn.simpleicons.org/amazon/232F3E" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/000000" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "Jest", icon: "https://cdn.simpleicons.org/jest/C21325" },
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
