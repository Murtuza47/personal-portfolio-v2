import React from "react"
import { AvatarFallback } from "@/components/ui/avatar"
import { AvatarImage } from "@/components/ui/avatar"
import { Avatar } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedCounter } from "@/components/animation/animated-counter"
import { AnimatedText } from "@/components/animation/animated-text"
import { ProjectCard } from "@/components/project-card"
import { ServiceCard } from "@/components/service-card"
import { ContactForm } from "@/components/contact-form"
import { HeroAnimation } from "@/components/animation/hero-animation"
import { SocialLinks } from "@/components/social-links"
import { AnimatedBadge } from "@/components/animation/animated-badge"

export default function Home() {
  return (
    <>
      {/* home Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">\
        <div className="absolute inset-0 z-0">
          <HeroAnimation />
        </div>

        <div className="container relative z-10 px-4">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <AnimatedBadge
                  prefix="I'm a"
                  services={["Web Developer", "Mobile Dev", "Consultant", "Tech Expert", "Full-Stack Dev"]}
                />
                <AnimatedText
                  text="Creating digital experiences that inspire"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                />
                <p className="text-muted-foreground max-w-md">
                  I design and build beautiful websites and digital products that put user experience first.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Contact Me
                </Button>
              </div>
              <SocialLinks />
            </div>
            <div className="relative hidden md:block">
              <div className="relative z-10 aspect-square overflow-hidden rounded-full border-4 border-background shadow-xl mx-auto max-w-md">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Alex Smith"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl -z-10" />
            </div>

            <div className="relative md:hidden mx-auto">
              <div className="relative z-10 aspect-square overflow-hidden rounded-full border-4 border-background shadow-xl mx-auto max-w-[250px]">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Alex Smith"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl -z-10" />
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <Link
              href="#about"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary/20 transition-all duration-300 shadow-sm hover:shadow-md animate-border"
            >
              <ChevronDown className="h-6 w-6" />
              <span className="sr-only">Scroll Down</span>
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-primary/5 rounded-l-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-tr-full blur-3xl -z-10" />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-muted/30">
        <div className="container px-4 sm:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-background shadow-xl">
                <Image
                  src=""
                  alt="About Ali Murtaza"
                  width={600}
                  height={640}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute top-8 -right-4 sm:-right-8 z-20 bg-background rounded-lg p-3 sm:p-4 shadow-lg">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center">
                    <AnimatedCounter value={5} duration={2} className="text-2xl sm:text-3xl font-bold text-primary" />
                    <p className="text-xs sm:text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter value={15} duration={2} className="text-2xl sm:text-3xl font-bold text-primary" />
                    <p className="text-xs sm:text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter value={100} duration={2} className="text-2xl sm:text-3xl font-bold text-primary" />
                    <p className="text-xs sm:text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter value={3} duration={2} className="text-2xl sm:text-3xl font-bold text-primary" />
                    <p className="text-xs sm:text-sm text-muted-foreground">Achievements & Certifications</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <Badge className="mb-2 px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  About Me
                </Badge>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                  Crafting digital experiences with passion and precision
                </h2>
              </div>
              <p className="text-muted-foreground">
                I'm Alex Smith, a passionate UI/UX designer and developer with over 5 years of experience creating
                beautiful, functional digital experiences. I specialize in translating complex problems into intuitive
                interfaces that users love.
              </p>
              <p className="text-muted-foreground">
                My approach combines creative design thinking with technical expertise to deliver solutions that not
                only look great but also perform exceptionally. I believe in user-centered design and creating products
                that make a difference.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <h3 className="font-medium">Name:</h3>
                  <p className="text-muted-foreground">Alex Smith</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Email:</h3>
                  <p className="text-muted-foreground">hello@alexsmith.com</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Location:</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Availability:</h3>
                  <p className="text-muted-foreground">Freelance / Full-time</p>
                </div>
              </div>
              <Button size="lg" className="w-full sm:w-auto group">
                Download CV
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
            <Link href="/services/web-development">
              <ServiceCard
                icon="code"
                title="Web Development"
                description="Building responsive, performant websites and web applications using modern technologies and best practices."
              />
            </Link>
            <ServiceCard
              icon="smartphone"
              title="Mobile Development"
              description="Developing cross-platform mobile applications that provide seamless experiences across iOS and Android devices."
            />
            <ServiceCard
              icon="move"
              title="Migration Services"
              description="Seamlessly migrate your existing systems to modern platforms with minimal disruption to your business operations."
            />
            <ServiceCard
              icon="spider"
              title="Web Scrapping"
              description="Extract valuable data from websites with custom web scraping solutions that deliver accurate, structured information."
            />
            <ServiceCard
              icon="shopping-bag"
              title="E-Commerce Solutions"
              description="Create powerful online stores with secure payment processing, inventory management, and optimized user experiences."
            />
            <ServiceCard
              icon="bar-chart-2"
              title="SEO & Web Analytics"
              description="Improve your website's visibility in search engines and gain valuable insights into user behavior and performance."
            />
            <ServiceCard
              icon="zap"
              title="Performance Optimization"
              description="Speed up your websites and applications with expert optimization techniques for better user experience and SEO rankings."
            />
            <ServiceCard
              icon="briefcase"
              title="Technical Consulting"
              description="Get expert advice on technology choices, architecture decisions, and digital strategy to achieve your business goals."
            />
            <ServiceCard
              icon="cpu"
              title="AI Agents & Automation"
              description="Implement AI-powered solutions and automation workflows to increase efficiency and reduce manual tasks in your business."
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              My Portfolio
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured projects I've worked on</h2>
            <p className="text-muted-foreground">
              Browse through a selection of my recent work showcasing my skills and expertise.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="E-commerce Website Redesign"
              category="UI/UX Design"
              image="/placeholder.svg?height=600&width=800"
              href="#"
            />
            <ProjectCard
              title="Financial Dashboard App"
              category="Web Development"
              image="/placeholder.svg?height=600&width=800"
              href="#"
            />
            <ProjectCard
              title="Travel Booking Platform"
              category="UI/UX Design"
              image="/placeholder.svg?height=600&width=800"
              href="#"
            />
            <ProjectCard
              title="Fitness Tracking Mobile App"
              category="Mobile Development"
              image="/placeholder.svg?height=600&width=800"
              href="#"
            />
            <ProjectCard
              title="Restaurant Ordering System"
              category="Web Development"
              image="/placeholder.svg?height=600&width=800"
              href="#"
            />
            <ProjectCard
              title="Creative Agency Website"
              category="Web Development"
              image="/placeholder.svg?height=600&width=800"
              href="#"
            />
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What clients say about my work</h2>
            <p className="text-muted-foreground">
              Don't just take my word for it - hear what my clients have to say about working with me.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-amber-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <p className="italic text-muted-foreground">
                  "Alex transformed our outdated website into a modern, user-friendly platform that perfectly represents
                  our brand. The attention to detail and creative solutions exceeded our expectations."
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Avatar className="h-12 w-12 border-2 border-background">
                    <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Sarah Johnson" />
                    <AvatarFallback>SJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Marketing Director, TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-amber-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <p className="italic text-muted-foreground">
                  "Working with Alex was a game-changer for our startup. The mobile app he designed not only looks
                  beautiful but also provides an intuitive user experience that our customers love."
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Avatar className="h-12 w-12 border-2 border-background">
                    <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Michael Chen" />
                    <AvatarFallback>MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Michael Chen</h4>
                    <p className="text-sm text-muted-foreground">CEO, InnovateLabs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-amber-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <p className="italic text-muted-foreground">
                  "Alex's ability to understand our vision and translate it into a stunning website was impressive. His
                  technical expertise combined with creative design skills made the process smooth and the results
                  exceptional."
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <Avatar className="h-12 w-12 border-2 border-background">
                    <AvatarImage src="/placeholder.svg?height=50&width=50" alt="Emily Rodriguez" />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Emily Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Founder, StyleHouse</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-2 px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  Get In Touch
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let's discuss your project</h2>
              </div>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Mail me at</h3>
                    <p className="text-muted-foreground">hello@alexsmith.com</p>
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
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
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
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Visit me at</h3>
                    <p className="text-muted-foreground">123 Design Street, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
