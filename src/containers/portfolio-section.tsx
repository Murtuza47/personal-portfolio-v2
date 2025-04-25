import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PortfolioSection() {
  return (
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
  )
}
