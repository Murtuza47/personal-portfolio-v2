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
        const headerOffset = 80; // Adjust this value based on your header height
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
    <section id="services" className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              My Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Specialized services I offer to clients</h2>
            <p className="text-muted-foreground">
              I provide comprehensive design and development solutions tailored to meet your specific needs and goals.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Link 
              href="/services/web-development"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              <ServiceCard
                icon="code"
                title="Web Development"
                description="Building responsive, performant websites and web applications using modern technologies and best practices."
              />
            </Link>
            <Link 
              href="/services/mobile-development"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              <ServiceCard
                icon="smartphone"
                title="Mobile Development"
                description="Developing cross-platform mobile applications that provide seamless experiences across iOS and Android devices."
              />
            </Link>
            <Link 
              href="/services/migration"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              <ServiceCard
                icon="move"
                title="Migration Services"
                description="Seamlessly migrate your existing systems to modern platforms with minimal disruption to your business operations."
              />
            </Link>
            <Link 
              href="/services/web-scraping"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              <ServiceCard
                icon="spider"
                title="Web Scrapping"
                description="Extract valuable data from websites with custom web scraping solutions that deliver accurate, structured information."
              />
            </Link>
            <Link 
              href="/services/ecommerce"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              <ServiceCard
                icon="shopping-bag"
                title="E-Commerce Solutions"
                description="Create powerful online stores with secure payment processing, inventory management, and optimized user experiences."
              />
            </Link>
            <Link 
              href="/services/seo"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              <ServiceCard
                icon="bar-chart-2"
                title="SEO & Web Analytics"
                description="Improve your website's visibility in search engines and gain valuable insights into user behavior and performance."
              />
            </Link>
            <Link 
              href="/services/performance"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              <ServiceCard
                icon="zap"
                title="Performance Optimization"
                description="Speed up your websites and applications with expert optimization techniques for better user experience and SEO rankings."
              />
            </Link>
            <Link 
              href="/services/consulting"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              <ServiceCard
                icon="briefcase"
                title="Technical Consulting"
                description="Get expert advice on technology choices, architecture decisions, and digital strategy to achieve your business goals."
              />
            </Link>
            <Link 
              href="/services/ai"
              onClick={(e) => handleSmoothScroll(e, "contact")}
            >
              <ServiceCard
                icon="cpu"
                title="AI Agents & Automation"
                description="Implement AI-powered solutions and automation workflows to increase efficiency and reduce manual tasks in your business."
              />
            </Link>
          </div>
        </div>
      </section>
  )
}
