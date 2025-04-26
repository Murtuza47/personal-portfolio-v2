import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordian"
import { HeroAnimation } from "@/components/animation/hero-animation"

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-65px)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Web Development
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Modern Web Development Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Creating fast, responsive, and user-friendly websites and web applications that drive results for your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-primary/5 rounded-l-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-tr-full blur-3xl -z-10" />
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                Overview
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Crafting exceptional web experiences</h2>
              <p className="text-muted-foreground">
                I specialize in building modern, high-performance websites and web applications that provide exceptional
                user experiences. Using the latest technologies and best practices, I create solutions that are not only
                visually appealing but also functional, accessible, and optimized for search engines.
              </p>
              <p className="text-muted-foreground">
                Whether you need a simple landing page, a complex e-commerce platform, or a custom web application, I
                have the skills and experience to bring your vision to life.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>Responsive designs that work flawlessly across all devices</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>Fast-loading, optimized code for better performance</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>SEO-friendly structure to improve visibility</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <p>Accessible interfaces that comply with WCAG guidelines</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-background shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Web Development"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-background rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
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
                      className="h-6 w-6"
                    >
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Modern Tech Stack</h4>
                    <p className="text-sm text-muted-foreground">React, Next.js, Tailwind CSS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              My Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How I approach web development</h2>
            <p className="text-muted-foreground">
              A structured, collaborative approach ensures we create the perfect solution for your needs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                  <span className="text-xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold">Discovery & Planning</h3>
                <p className="text-muted-foreground">
                  I begin by understanding your business goals, target audience, and project requirements to create a
                  comprehensive plan.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                  <span className="text-xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold">Design & Prototyping</h3>
                <p className="text-muted-foreground">
                  Creating wireframes and interactive prototypes to visualize the user interface and experience before
                  development begins.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                  <span className="text-xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold">Development</h3>
                <p className="text-muted-foreground">
                  Building the website or application using modern technologies and best practices, with regular updates
                  and feedback sessions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                  <span className="text-xl font-bold">04</span>
                </div>
                <h3 className="text-xl font-bold">Testing & Launch</h3>
                <p className="text-muted-foreground">
                  Rigorous testing across devices and browsers, followed by deployment and post-launch support to ensure
                  everything runs smoothly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Technologies
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tools and technologies I work with</h2>
            <p className="text-muted-foreground">
              I stay up-to-date with the latest technologies to deliver modern, efficient solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "React", icon: "/placeholder.svg?height=80&width=80" },
              { name: "Next.js", icon: "/placeholder.svg?height=80&width=80" },
              { name: "Tailwind CSS", icon: "/placeholder.svg?height=80&width=80" },
              { name: "TypeScript", icon: "/placeholder.svg?height=80&width=80" },
              { name: "Node.js", icon: "/placeholder.svg?height=80&width=80" },
              { name: "MongoDB", icon: "/placeholder.svg?height=80&width=80" },
              { name: "GraphQL", icon: "/placeholder.svg?height=80&width=80" },
              { name: "PostgreSQL", icon: "/placeholder.svg?height=80&width=80" },
              { name: "Vercel", icon: "/placeholder.svg?height=80&width=80" },
              { name: "AWS", icon: "/placeholder.svg?height=80&width=80" },
              { name: "Docker", icon: "/placeholder.svg?height=80&width=80" },
              { name: "Git", icon: "/placeholder.svg?height=80&width=80" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <Image src={tech.icon || "/placeholder.svg"} alt={tech.name} width={80} height={80} className="mb-4" />
                <p className="font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Transparent pricing plans</h2>
            <p className="text-muted-foreground">
              Flexible options to suit your needs and budget, with no hidden costs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                  <span className="text-xl font-bold">$</span>
                </div>
                <h3 className="text-xl font-bold">Basic Website</h3>
                <p className="text-3xl font-bold">$1,499</p>
                <p className="text-muted-foreground">Perfect for small businesses and personal brands.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Up to 5 pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Basic SEO setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Contact form</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>1 month of support</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                  <span className="text-xl font-bold">$</span>
                </div>
                <h3 className="text-xl font-bold">Business Website</h3>
                <p className="text-3xl font-bold">$2,999</p>
                <p className="text-muted-foreground">Ideal for growing businesses and e-commerce.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Up to 10 pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Advanced SEO setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>E-commerce functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>3 months of support</span>
                  </li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                  <span className="text-xl font-bold">$</span>
                </div>
                <h3 className="text-xl font-bold">Custom Solution</h3>
                <p className="text-3xl font-bold">Custom</p>
                <p className="text-muted-foreground">For complex projects with specific requirements.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Unlimited pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Custom design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Advanced functionality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Integration with third-party services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>6 months of support</span>
                  </li>
                </ul>
                <Button className="w-full">Contact Me</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Frequently asked questions</h2>
            <p className="text-muted-foreground">Answers to common questions about my web development services.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How long does it take to build a website?</AccordionTrigger>
                <AccordionContent>
                  The timeline varies depending on the complexity of the project. A basic website typically takes 2-4
                  weeks, while more complex projects can take 2-3 months. I'll provide a detailed timeline during our
                  initial consultation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do you provide website maintenance services?</AccordionTrigger>
                <AccordionContent>
                  Yes, I offer ongoing maintenance packages to keep your website secure, up-to-date, and performing
                  optimally. These packages include regular updates, security monitoring, backups, and technical
                  support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Will my website be mobile-friendly?</AccordionTrigger>
                <AccordionContent>
                  All websites I build are fully responsive and optimized for all devices, including smartphones,
                  tablets, and desktop computers. This ensures your users have a seamless experience regardless of the
                  device they're using.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you help with website hosting?</AccordionTrigger>
                <AccordionContent>
                  Yes, I can recommend and set up reliable hosting solutions based on your specific needs. I work with
                  industry-leading hosting providers to ensure your website is fast, secure, and has excellent uptime.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Can you help with SEO for my website?</AccordionTrigger>
                <AccordionContent>
                  Yes, I implement SEO best practices during the development process to ensure your website is optimized
                  for search engines. This includes proper HTML structure, fast loading times, mobile optimization, and
                  other on-page SEO factors. For more comprehensive SEO services, I can create a custom strategy for
                  your business.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Let's Work Together
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to bring your web project to life?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact me today to discuss your project and how I can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
