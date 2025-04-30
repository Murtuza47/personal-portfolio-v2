"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { AnimatedBadge } from "@/components/animation/animated-badge"
import { HomeAnimation } from "@/components/animation/home-animation"
import { CTASection } from "@/containers/home/cta-section"

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
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
    description:
      "A complete redesign of an e-commerce platform focusing on improved user experience, mobile responsiveness, and conversion optimization.",
  },
  {
    id: "2",
    title: "Financial Dashboard App",
    slug: "financial-dashboard-app",
    category: "Web Development",
    tags: ["Dashboard", "React", "Data Visualization"],
    client: "FinTech Solutions",
    completionDate: "April 2023",
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
    description:
      "An interactive financial dashboard that visualizes complex data sets and provides real-time insights for financial analysts.",
  },
  {
    id: "3",
    title: "Travel Booking Platform",
    slug: "travel-booking-platform",
    category: "UI/UX Design",
    tags: ["Travel", "Booking", "Mobile App"],
    client: "Wanderlust Travels",
    completionDate: "March 2023",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
    description:
      "A comprehensive travel booking platform that simplifies the process of finding and booking flights, hotels, and experiences.",
  },
  {
    id: "4",
    title: "Fitness Tracking Mobile App",
    slug: "fitness-tracking-app",
    category: "Mobile Development",
    tags: ["Fitness", "Mobile", "Health"],
    client: "FitLife",
    completionDate: "January 2023",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
    description:
      "A mobile application that helps users track their fitness goals, workouts, and nutrition with personalized recommendations.",
  },
  {
    id: "5",
    title: "Restaurant Ordering System",
    slug: "restaurant-ordering-system",
    category: "Web Development",
    tags: ["Food", "E-commerce", "SaaS"],
    client: "Gourmet Group",
    completionDate: "December 2022",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
    description:
      "An online ordering system for restaurants that streamlines the ordering process and improves customer experience.",
  },
  {
    id: "6",
    title: "Creative Agency Website",
    slug: "creative-agency-website",
    category: "Web Development",
    tags: ["Agency", "Portfolio", "Creative"],
    client: "Spark Creative",
    completionDate: "November 2022",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
    description:
      "A dynamic and visually striking website for a creative agency that showcases their portfolio and services.",
  },
  {
    id: "7",
    title: "Healthcare Patient Portal",
    slug: "healthcare-patient-portal",
    category: "Web Development",
    tags: ["Healthcare", "Portal", "Accessibility"],
    client: "MediCare Solutions",
    completionDate: "October 2022",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
    description:
      "A secure patient portal that allows users to access their medical records, schedule appointments, and communicate with healthcare providers.",
  },
  {
    id: "8",
    title: "Educational Learning Platform",
    slug: "educational-learning-platform",
    category: "Web Development",
    tags: ["Education", "E-learning", "Interactive"],
    client: "EduTech Innovations",
    completionDate: "September 2022",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
    description:
      "An interactive learning platform that provides personalized educational content and tracks student progress.",
  },
  {
    id: "9",
    title: "Real Estate Listing App",
    slug: "real-estate-listing-app",
    category: "Mobile Development",
    tags: ["Real Estate", "Mobile", "Maps"],
    client: "HomeFind Realty",
    completionDate: "August 2022",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
    description:
      "A mobile application for browsing real estate listings with advanced search filters and interactive maps.",
  },
]

// Extract unique categories and tags
const categories = Array.from(new Set(projects.map((project) => project.category)))
const allTags = projects.flatMap((project) => project.tags)
const uniqueTags = Array.from(new Set(allTags))

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter projects based on category, tag, and search query
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory ? project.category === selectedCategory : true
    const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true
    const matchesSearch = searchQuery
      ? project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true
    return matchesCategory && matchesTag && matchesSearch
  })

  // Get featured projects
  const featuredProjects = filteredProjects.filter((project) => project.featured)
  const regularProjects = filteredProjects.filter((project) => !project.featured)

  return (
    <>
      <section className="relative h-[calc(100vh-65px)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HomeAnimation />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedBadge
              prefix="My"
              services={["Projects", "Portfolio", "Work", "Creations", "Designs"]}
              className="mb-6 inline-flex"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Showcasing my creative work
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Browse through my portfolio of projects spanning web development, mobile apps, UI/UX design, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <Filter className="mr-2 h-4 w-4" />
                Filter Projects
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl -z-10" />
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-primary/5 rounded-l-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-tr-full blur-3xl -z-10" />
      </section>

      {/* Filter Section */}
      <section
        className={cn(
          "py-8 bg-muted/30 transition-all duration-300 overflow-hidden",
          isFilterOpen ? "max-h-96" : "max-h-0 py-0",
        )}
      >
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Category Filter */}
            <div>
              <h3 className="text-lg font-medium mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(null)}
                  className="rounded-full"
                >
                  All
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="rounded-full"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Tag Filter */}
            <div>
              <h3 className="text-lg font-medium mb-4">Filter by Tag</h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedTag === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(null)}
                  className="rounded-full"
                >
                  All
                </Button>
                {uniqueTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                    className="rounded-full"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </div>

            {/* Search */}
            <div>
              <h3 className="text-lg font-medium mb-4">Search Projects</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-20">
          <div className="container">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <div className="text-sm text-muted-foreground">
                Showing {filteredProjects.length} of {projects.length} projects
              </div>
            </div>

            <div className="grid gap-12">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`grid gap-8 items-center ${index % 2 === 0 ? "md:grid-cols-[3fr,2fr]" : "md:grid-cols-[2fr,3fr] md:[&>div:first-child]:order-2"
                    }`}
                >
                  <div className="space-y-4">
                    <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      {project.category}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="pt-4">
                      <Button asChild className="group">
                        <Link href={`/projects/${project.slug}`}>
                          View Project
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="relative aspect-video overflow-hidden rounded-xl border-8 border-background shadow-xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Projects Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">All Projects</h2>

          {regularProjects.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {regularProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="group overflow-hidden rounded-xl border bg-background transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <Badge className="bg-primary hover:bg-primary/90">{project.category}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-2">Client:</span>
                      <span className="font-medium">{project.client}</span>
                      <span className="mx-2">•</span>
                      <span>{project.completionDate}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border bg-background p-12 text-center">
              <h3 className="mb-2 text-xl font-medium">No projects found</h3>
              <p className="mb-6 text-muted-foreground">We couldn't find any projects matching your search criteria.</p>
              <Button
                onClick={() => {
                  setSelectedCategory(null)
                  setSelectedTag(null)
                  setSearchQuery("")
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}
