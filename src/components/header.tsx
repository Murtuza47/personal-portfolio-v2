"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { cn } from "@/lib/utils"
import { ChevronDown, X, ChevronRight } from "lucide-react"

export function Header() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState<string>("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const isHomePage = pathname === "/"

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("")
      return
    }

    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100 // offset for header height

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const top = rect.top + window.scrollY
          const height = rect.height
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      return isHomePage && activeSection === path.split("#")[1]
    }
    return pathname === path
  }

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
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <span className="text-primary">Ali</span> Murtaza
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive("/#home") 
                ? "text-primary" 
                : "text-foreground/60 hover:text-primary"
            )}
            onClick={(e) => handleSmoothScroll(e, "home")}
          >
            Home
          </Link>
          <Link 
            href="/#about" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive("/#about") 
                ? "text-primary" 
                : "text-foreground/60 hover:text-primary"
            )}
            onClick={(e) => handleSmoothScroll(e, "about")}
          >
            About
          </Link>
          <div className="relative group">
            <Link 
              href="/#services" 
              className={cn(
                "text-sm font-medium transition-colors flex items-center gap-1",
                isActive("/#services") 
                  ? "text-primary" 
                  : "text-foreground/60 group-hover:text-primary"
              )}
              onClick={(e) => handleSmoothScroll(e, "services")}
            >
              Services
              <ChevronDown className="h-3 w-3" />
            </Link>
            
            <div className="absolute top-full left-0 mt-1 w-56 rounded-md border bg-background p-1 text-foreground shadow-md z-[100] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link 
                href="/services/web-development" 
                className="block px-2 py-1.5 text-sm rounded-sm text-foreground/60 hover:text-primary hover:bg-accent/20 transition-all duration-100 hover:translate-x-2"
              >
                Web Development
              </Link>
              <Link 
                href="/services/mobile-development" 
                className="block px-2 py-1.5 text-sm rounded-sm text-foreground/60 hover:text-primary hover:bg-accent/20 transition-all duration-100 hover:translate-x-2"
              >
                Mobile Development
              </Link>
              <Link 
                href="/services/migration-solutions" 
                className="block px-2 py-1.5 text-sm rounded-sm text-foreground/60 hover:text-primary hover:bg-accent/20 transition-all duration-100 hover:translate-x-2"
              >
                Migration Solutions
              </Link>
              <Link 
                href="/services/web-scraping" 
                className="block px-2 py-1.5 text-sm rounded-sm text-foreground/60 hover:text-primary hover:bg-accent/20 transition-all duration-100 hover:translate-x-2"
              >
                Web Scraping
              </Link>
              <Link 
                href="/services/ecommerce-solutions" 
                className="block px-2 py-1.5 text-sm rounded-sm text-foreground/60 hover:text-primary hover:bg-accent/20 transition-all duration-100 hover:translate-x-2"
              >
                E-Commerce Solutions
              </Link>
              <Link 
                href="/services/performance-optimization" 
                className="block px-2 py-1.5 text-sm rounded-sm text-foreground/60 hover:text-primary hover:bg-accent/20 transition-all duration-100 hover:translate-x-2"
              >
                Performance Optimization
              </Link>
              <Link 
                href="/services/technical-consulting" 
                className="block px-2 py-1.5 text-sm rounded-sm text-foreground/60 hover:text-primary hover:bg-accent/20 transition-all duration-100 hover:translate-x-2"
              >
                Technical Consulting
              </Link>
              <Link 
                href="/services/SPFx" 
                className="block px-2 py-1.5 text-sm rounded-sm text-foreground/60 hover:text-primary hover:bg-accent/20 transition-all duration-100 hover:translate-x-2"
              >
                SharePoint Framework Development
              </Link>
              <Link 
                href="/services/ai-automation" 
                className="block px-2 py-1.5 text-sm rounded-sm text-foreground/60 hover:text-primary hover:bg-accent/20 transition-all duration-100 hover:translate-x-2"
              >
                AI Agents & Automation
              </Link>
            </div>
          </div>
          <Link 
            href="/#portfolio" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive("/#portfolio") 
                ? "text-primary" 
                : "text-foreground/60 hover:text-primary"
            )}
            onClick={(e) => handleSmoothScroll(e, "portfolio")}
          >
            Portfolio
          </Link>
          <Link 
            href="/#certifications" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive("/#certifications") 
                ? "text-primary" 
                : "text-foreground/60 hover:text-primary"
            )}
            onClick={(e) => handleSmoothScroll(e, "certifications")}
          >
            Certifications
          </Link>
          <Link 
            href="/#contact" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive("/#contact") 
                ? "text-primary" 
                : "text-foreground/60 hover:text-primary"
            )}
            onClick={(e) => handleSmoothScroll(e, "contact")}
          >
            Contact
          </Link>
          <Link 
            href="/blogs" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive("/blogs") 
                ? "text-primary" 
                : "text-foreground/60 hover:text-primary"
            )}
          >
            Blogs
          </Link>
          <Link 
            href="/projects" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive("/projects") 
                ? "text-primary" 
                : "text-foreground/60 hover:text-primary"
            )}
          >
            Projects
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button 
            className="hidden md:flex"
            onClick={(e) => {
              if (isHomePage) {
                e.preventDefault();
                const element = document.getElementById("contact");
                if (element) {
                  const headerOffset = 65;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              } else {
                window.location.href = "/#contact";
              }
            }}
          >
            Let's Talk
          </Button>
          <div className="flex items-center">
            <div className="flex items-center justify-center">
              <ThemeToggle />
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 top-16 bg-black w-full min-h-screen z-40 md:hidden"
        >
          <div className="container py-6">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/" 
                className={cn(
                  "text-lg font-medium transition-colors",
                  isActive("/#home") 
                    ? "text-primary" 
                    : "text-foreground/60 hover:text-primary"
                )}
                onClick={(e) => handleSmoothScroll(e, "home")}
              >
                Home
              </Link>
              <Link 
                href="/#about" 
                className={cn(
                  "text-lg font-medium transition-colors",
                  isActive("/#about") 
                    ? "text-primary" 
                    : "text-foreground/60 hover:text-primary"
                )}
                onClick={(e) => handleSmoothScroll(e, "about")}
              >
                About
              </Link>
              <div className="flex flex-col gap-2">
                <div
                  className={cn(
                    "text-lg font-medium transition-colors flex items-center justify-between",
                    isActive("/#services") 
                      ? "text-primary" 
                      : "text-foreground/60"
                  )}
                >
                  Services
                </div>
                <div className="pl-4 space-y-2">
                  <Link 
                    href="/services/web-development" 
                    className="block text-base text-foreground/60 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Web Development
                  </Link>
                  <Link 
                    href="/services/mobile-development" 
                    className="block text-base text-foreground/60 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Mobile Development
                  </Link>
                  <Link 
                    href="/services/migration-solutions" 
                    className="block text-base text-foreground/60 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Migration Solutions
                  </Link>
                  <Link 
                    href="/services/web-scraping" 
                    className="block text-base text-foreground/60 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Web Scraping
                  </Link>
                  <Link 
                    href="/services/ecommerce-solutions" 
                    className="block text-base text-foreground/60 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    E-Commerce Solutions
                  </Link>
                  <Link 
                    href="/services/performance-optimization" 
                    className="block text-base text-foreground/60 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Performance Optimization
                  </Link>
                  <Link 
                    href="/services/technical-consulting" 
                    className="block text-base text-foreground/60 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Technical Consulting
                  </Link>
                  <Link 
                    href="/services/SPFx" 
                    className="block text-base text-foreground/60 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    SharePoint Framework Development
                  </Link>
                  <Link 
                    href="/services/ai-automation" 
                    className="block text-base text-foreground/60 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI Agents & Automation
                  </Link>
                </div>
              </div>
              <Link 
                href="/#portfolio" 
                className={cn(
                  "text-lg font-medium transition-colors",
                  isActive("/#portfolio") 
                    ? "text-primary" 
                    : "text-foreground/60 hover:text-primary"
                )}
                onClick={(e) => handleSmoothScroll(e, "portfolio")}
              >
                Portfolio
              </Link>
              <Link 
                href="/#contact" 
                className={cn(
                  "text-lg font-medium transition-colors",
                  isActive("/#contact") 
                    ? "text-primary" 
                    : "text-foreground/60 hover:text-primary"
                )}
                onClick={(e) => handleSmoothScroll(e, "contact")}
              >
                Contact
              </Link>
              <Link 
                href="/blogs" 
                className={cn(
                  "text-lg font-medium transition-colors",
                  isActive("/blogs") 
                    ? "text-primary" 
                    : "text-foreground/60 hover:text-primary"
                )}
              >
                Blogs
              </Link>
              <Link 
                href="/projects" 
                className={cn(
                  "text-lg font-medium transition-colors",
                  isActive("/projects") 
                    ? "text-primary" 
                    : "text-foreground/60 hover:text-primary"
                )}
              >
                Projects
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 