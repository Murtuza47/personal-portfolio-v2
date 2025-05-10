"use client"

import React from "react"
import Link from "next/link"
import { SocialLinks } from "./social-links"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHomePage) {
      e.preventDefault()
      const element = document.getElementById(id)
      if (element) {
        const headerOffset = 65 // Adjusted to 65px as requested
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }
    }
  }

  return (
    <footer className="py-12 border-t">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="font-bold text-xl inline-block">
              Hello, I'm <span className="text-primary">Ali</span> Murtaza
            </Link>
            <p className="text-muted-foreground">
              A full-stack developer blending code, automation, and intelligent design to build future-ready digital solutions.
            </p>
            <SocialLinks />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/#home" 
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                  onClick={(e) => handleSmoothScroll(e, "home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/#about" 
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                  onClick={(e) => handleSmoothScroll(e, "about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/#services" 
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                  onClick={(e) => handleSmoothScroll(e, "services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/#portfolio" 
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                  onClick={(e) => handleSmoothScroll(e, "portfolio")}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  href="/#certifications" 
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                  onClick={(e) => handleSmoothScroll(e, "certifications")}
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link 
                  href="/#contact" 
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                  onClick={(e) => handleSmoothScroll(e, "contact")}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  href="/blogs" 
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-development"
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/mobile-development" 
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                >
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/migration-solutions" 
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                >
                  Migration Solutions
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/web-scraping" 
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                >
                  Web Scraping
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/ecommerce-solutions" 
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                >
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/performance-optimization" 
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                >
                  Performance Optimization
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/technical-consulting" 
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                >
                  Technical Consulting
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/SPFx" 
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                >
                  SharePoint Framework Development
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/ai-automation" 
                  className="text-muted-foreground hover:text-primary inline-block transition-all duration-100 hover:translate-x-2"
                >
                  AI Agents & Automation
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h3 className="font-medium text-lg mb-4">Subscribe</h3>
            <p className="text-muted-foreground mb-4">Subscribe to get the latest news and updates.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button type="submit" size="sm">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div> */}
        </div>
        <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Ali Murtaza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 