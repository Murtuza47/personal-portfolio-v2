import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function WebCTASection() {
  return (
    <section className="relative py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden bg-muted/30">
      <div className="container">
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto">
          <Badge className="mb-4 px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            "Let’s Build Something Brilliant Together."
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Do you have a project in mind or just want to explore ideas? Contact me, and let’s turn your vision into a smart, scalable solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              FREE ZOOM CALL
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              FREE PROJECT DEMOS 
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
