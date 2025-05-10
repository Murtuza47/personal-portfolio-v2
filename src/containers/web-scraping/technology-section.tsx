"use client"

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function WebScrapingTechnologySection() {
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
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
    { name: "BeautifulSoup", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Scrapy", icon: "https://img.icons8.com/color/48/spider.png" },
    { name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },
    { name: "Puppeteer", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/puppeteer/puppeteer-original.svg" },
    { name: "Requests", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
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
