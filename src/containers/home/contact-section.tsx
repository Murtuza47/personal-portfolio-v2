"use client"

import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section 
      id="contact" 
      className="relative py-16 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden"
    >
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          <div className="space-y-6">
            <div>
              <Badge className="mb-2 px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                Get In Touch
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let's Build Something Powerful Together</h2>
            </div>
            <p className="text-muted-foreground">
              Have a project in mind or need expert advice? I'm just a message away.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Mail me at</h3>
                <p className="text-muted-foreground">azatrum.005@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
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
                  className="h-5 w-5"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Call me at</h3>
                <p className="text-muted-foreground">+92 333-2018764</p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
