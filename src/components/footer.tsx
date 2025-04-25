"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { SocialLinks } from "./social-links"

export function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="font-bold text-xl inline-block">
              <span className="text-primary">Ali</span> Murtaza
            </Link>
            <p className="text-muted-foreground">
              Creating beautiful digital experiences that inspire and engage users.
            </p>
            <SocialLinks />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-muted-foreground hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-muted-foreground hover:text-primary transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
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
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-development" className="text-muted-foreground hover:text-primary transition-colors">
                  Mobile Development
                </Link>
              </li>
              <li>
                <Link href="/services/migration" className="text-muted-foreground hover:text-primary transition-colors">
                  Migration Services
                </Link>
              </li>
              <li>
                <Link href="/services/web-scraping" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Scraping
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-muted-foreground hover:text-primary transition-colors">
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-muted-foreground hover:text-primary transition-colors">
                  SEO & Web Analytics
                </Link>
              </li>
              <li>
                <Link href="/services/performance" className="text-muted-foreground hover:text-primary transition-colors">
                  Performance Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="text-muted-foreground hover:text-primary transition-colors">
                  Technical Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/ai" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Agents & Automation
                </Link>
              </li>
            </ul>
          </div>
          <div>
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
          </div>
        </div>
        <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Ali Murtaza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 