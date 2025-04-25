"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState<string>("home")
  const isHomePage = pathname === "/"

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("")
      return
    }

    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"]
      const scrollPosition = window.scrollY + 100 // offset for header height

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isHomePage])

  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      // Only check section active state on home page
      return isHomePage && activeSection === path.split("#")[1]
    }
    return pathname === path
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <span className="text-primary">Ali</span> Murtaza
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/#home" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive("/#home") 
                ? "text-primary" 
                : "text-foreground/60 hover:text-primary"
            )}
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
          >
            About
          </Link>
          <Link 
            href="/#services" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive("/#services") 
                ? "text-primary" 
                : "text-foreground/60 hover:text-primary"
            )}
          >
            Services
          </Link>
          <Link 
            href="/#portfolio" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive("/#portfolio") 
                ? "text-primary" 
                : "text-foreground/60 hover:text-primary"
            )}
          >
            Portfolio
          </Link>
          <Link 
            href="/#contact" 
            className={cn(
              "text-sm font-medium transition-colors",
              isActive("/#contact") 
                ? "text-primary" 
                : "text-foreground/60 hover:text-primary"
            )}
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
          <Link 
            href="/services/web-development" 
            className={cn(
              "hidden md:inline-flex",
              isActive("/services/web-development") && "text-primary"
            )}
          >
            <Button variant="outline" size="sm">
              Services
            </Button>
          </Link>
          <Button className="hidden md:flex">Let's Talk</Button>
          <div className="flex items-center">
            <div className="flex items-center justify-center h-10 w-10">
              <ThemeToggle />
            </div>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
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
          </Button>
        </div>
      </div>
    </header>
  )
} 