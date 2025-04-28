import { HomeAnimation } from "@/components/animation/home-animation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export function WebHomeSection() {
  return (
    <section className="relative h-[calc(100vh-65px)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HomeAnimation />
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              Web Development
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Web Development Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl font-bold">
              "Your Vision, My Code – Building Scalable Web Applications."
            </p>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Take the first step toward transforming your idea into a fully functional, user-friendly web app today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                GET A FREE ESTIMATE/ DEMO WEBSITE  
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-3xl -z-10" />
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-1/2 bg-primary/5 rounded-l-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-tr-full blur-3xl -z-10" />
      </section>
  )
}
