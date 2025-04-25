"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Calendar, ExternalLink, Github, Globe, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CursorEffect } from "@/components/cursor-effect"
import { ThemeToggle } from "@/components/theme-toggle"

// Project data
const projects = [
  {
    id: "1",
    title: "E-commerce Website Redesign",
    slug: "ecommerce-website-redesign",
    category: "UI/UX Design",
    tags: ["E-commerce", "UI/UX", "Responsive"],
    client: "FashionBoutique",
    completionDate: "June 2023",
    duration: "3 months",
    services: ["UI/UX Design", "Frontend Development", "Responsive Design"],
    technologies: ["Figma", "React", "Next.js", "Tailwind CSS", "Stripe"],
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    challenge:
      "FashionBoutique was struggling with an outdated e-commerce platform that had poor mobile responsiveness and a complicated checkout process, resulting in high cart abandonment rates and declining sales.",
    solution:
      "I redesigned the entire user experience with a focus on simplicity and mobile-first design. The new interface features intuitive navigation, streamlined product pages, and a simplified checkout process that reduced steps by 40%.",
    results: [
      "50% reduction in cart abandonment rate",
      "35% increase in mobile conversions",
      "28% improvement in average session duration",
      "42% increase in overall sales within the first quarter after launch",
    ],
    testimonial: {
      quote:
        "Alex transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. The attention to detail and creative solutions exceeded our expectations, and the results speak for themselves with significantly improved sales and customer satisfaction.",
      author: "Sarah Johnson",
      position: "Marketing Director, FashionBoutique",
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    relatedProjects: ["financial-dashboard-app", "travel-booking-platform"],
  },
  {
    id: "2",
    title: "Financial Dashboard App",
    slug: "financial-dashboard-app",
    category: "Web Development",
    tags: ["Dashboard", "React", "Data Visualization"],
    client: "FinTech Solutions",
    completionDate: "April 2023",
    duration: "4 months",
    services: ["Web Development", "Data Visualization", "API Integration"],
    technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    challenge:
      "FinTech Solutions needed a comprehensive dashboard to visualize complex financial data for their clients. The challenge was to present intricate financial information in an intuitive and actionable format.",
    solution:
      "I developed a responsive dashboard with interactive charts and customizable widgets that allow users to drill down into specific data points. The solution includes real-time updates, personalized alerts, and exportable reports.",
    results: [
      "Reduced time spent on financial analysis by 65%",
      "Improved client satisfaction scores by 48%",
      "Enabled data-driven decision making with 99.9% accuracy",
      "Increased client retention by 25%",
    ],
    testimonial: {
      quote:
        "The dashboard Alex created has revolutionized how our clients interact with their financial data. Complex information is now presented in a clear, actionable format that helps drive better business decisions. The attention to detail and understanding of our users' needs was exceptional.",
      author: "Michael Chen",
      position: "CEO, FinTech Solutions",
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    relatedProjects: ["ecommerce-website-redesign", "restaurant-ordering-system"],
  },
  {
    id: "3",
    title: "Travel Booking Platform",
    slug: "travel-booking-platform",
    category: "UI/UX Design",
    tags: ["Travel", "Booking", "Mobile App"],
    client: "Wanderlust Travels",
    completionDate: "March 2023",
    duration: "5 months",
    services: ["UI/UX Design", "Prototyping", "User Testing"],
    technologies: ["Figma", "Adobe XD", "InVision", "Sketch"],
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    challenge:
      "Wanderlust Travels wanted to create a comprehensive travel booking platform that would simplify the process of finding and booking flights, hotels, and experiences while standing out in a competitive market.",
    solution:
      "I designed an intuitive and visually appealing platform with personalized recommendations, seamless booking flows, and interactive destination guides. The design incorporates stunning imagery, user reviews, and a unique 'trip planner' feature that helps users create custom itineraries.",
    results: [
      "Increased booking conversions by 42%",
      "Reduced booking abandonment rate by 38%",
      "Improved user satisfaction scores by 4.8/5",
      "Increased average booking value by 27%",
    ],
    testimonial: {
      quote:
        "Alex's design for our booking platform perfectly captures the excitement of travel while making the booking process incredibly simple. The intuitive interface and thoughtful features have significantly improved our conversion rates and customer feedback has been overwhelmingly positive.",
      author: "Emily Rodriguez",
      position: "Product Manager, Wanderlust Travels",
    },
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    relatedProjects: ["ecommerce-website-redesign", "fitness-tracking-app"],
  },
]

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  // If project not found, return 404
  if (!project) {
    notFound()
  }

  // Get related projects
  const relatedProjects = projects.filter((p) => project.relatedProjects.includes(p.slug))

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <CursorEffect />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">Alex</span>Smith
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
            <Link href="/projects" className="text-sm font-medium text-primary transition-colors">
              Projects
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="hidden md:flex">Let's Talk</Button>
            <div className="flex items-center">
              <ThemeToggle />
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

      {/* Project Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="container relative z-10">
          {/* Back to projects */}
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                {project.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{project.title}</h1>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="rounded-full">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col gap-4 pt-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User className="h-4 w-4" />
                  <span>Client:</span>
                  <span className="font-medium text-foreground">{project.client}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Completed:</span>
                  <span className="font-medium text-foreground">{project.completionDate}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span>Duration:</span>
                  <span className="font-medium text-foreground">{project.duration}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                {project.liveUrl && (
                  <Button asChild className="group">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Live Preview
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-background shadow-xl">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl -z-10" />
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-primary/5 rounded-l-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-tr-full blur-3xl -z-10" />
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                  <p className="text-muted-foreground">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">The Solution</h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">The Results</h3>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="h-6 w-6 flex-shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
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
                            className="h-4 w-4"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-background rounded-xl border p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-6">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Services Provided</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <Badge key={service} variant="secondary" className="rounded-full">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="rounded-full">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full" asChild>
                      <Link href="/#contact">
                        Discuss a Similar Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Project Gallery</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-xl border-8 border-background shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
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
                className="h-12 w-12 mx-auto mb-6 text-primary/30"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
              </svg>
              <p className="text-xl md:text-2xl font-medium mb-6 italic">{project.testimonial.quote}</p>
              <div>
                <p className="font-bold">{project.testimonial.author}</p>
                <p className="text-muted-foreground">{project.testimonial.position}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12">Related Projects</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.slug}`}
                  className="group overflow-hidden rounded-xl border bg-background transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={relatedProject.image || "/placeholder.svg"}
                      alt={relatedProject.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <Badge className="bg-primary hover:bg-primary/90">{relatedProject.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold group-hover:text-primary transition-colors">
                      {relatedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {relatedProject.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Let's Work Together
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to start your project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact me today to discuss your project and how I can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="/#contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="font-bold text-xl inline-block">
                <span className="text-primary">Alex</span>Smith
              </Link>
              <p className="text-muted-foreground">
                Creating beautiful digital experiences that inspire and engage users.
              </p>
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
                  <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
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
                  <Link
                    href="/services/mobile-development"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ui-ux-design"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/e-commerce"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    E-Commerce Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-muted-foreground">hello@alexsmith.com</li>
                <li className="text-muted-foreground">+1 (555) 123-4567</li>
                <li className="text-muted-foreground">123 Design Street, San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-6 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Alex Smith. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
