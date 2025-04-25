"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          <span className="text-primary">Ali</span> Murtaza
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#home" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Link href="/blogs" className="text-sm font-medium hover:text-primary transition-colors">
            Blogs
          </Link>
          <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/services/web-development" className="hidden md:inline-flex">
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