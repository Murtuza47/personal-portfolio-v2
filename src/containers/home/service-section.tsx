"use client"

import { ServiceCard } from "@/components/service-card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ServiceSection() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 65; // Adjusted to 65px as requested
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            My Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">I Built Smart Tech Solutions for Businesses</h2>
          <p className="text-muted-foreground">
            From web development to AI automation — I deliver clean, scalable systems that drive real business results
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/services/web-development"
          >
            <ServiceCard
              icon="code"
              title="Web Development"
              description="Build secure, scalable, and lightning-fast websites that turn visitors into loyal users."
            />
          </Link>
          <Link
            href="/services/mobile-development"
          >
            <ServiceCard
              icon="smartphone"
              title="Mobile Development"
              description="Craft intuitive, high-performance mobile apps that bring your brand to every screen."
            />
          </Link>
          <Link
            href="/services/migration-solutions"
          >
            <ServiceCard
              icon="move"
              title="Migration Solutions"
              description="Seamlessly move from outdated systems to modern platforms without losing a byte."
            />
          </Link>
          <Link
            href="/services/web-scraping"
          >
            <ServiceCard
              icon="spider"
              title="Web Scrapping"
              description="Extract valuable data from the web—clean, fast, and ready to drive your business decisions."
            />
          </Link>
          <Link
            href="/services/ecommerce-solutions"
          >
            <ServiceCard
              icon="shopping-bag"
              title="E-Commerce Solutions"
              description="Launch or optimize your online store with conversion-first designs and backend efficiency."
            />
          </Link>
          <Link
            href="/services/performance-optimization"
          >
            <ServiceCard
              icon="zap"
              title="Performance Optimization"
              description="Make your web apps faster, smoother, and more efficient with pro-level performance tuning"
            />
          </Link>
          <Link
            href="/services/technical-consulting"
          >
            <ServiceCard
              icon="briefcase"
              title="Technical Consulting"
              description="Get expert guidance to transform your technical challenges into scalable, smart solutions."
            />
          </Link>
          <Link
            href="/services/SPFx"
          >
            <ServiceCard
              icon="layout"
              title="SharePoint Framework (SPFx)"
              description="Extend Microsoft 365 with powerful, custom-built SharePoint solutions tailored for your team."
            />
          </Link>
          <Link
            href="/services/ai-automation"
          >
            <ServiceCard
              icon="cpu"
              title="AI Agents & Automation"
              description="Automate complex workflows with intelligent agents that think, act, and deliver results."
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
