import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function WebCTASection() {
  return (
    <section className="py-20 bg-muted/30">
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
  )
}
