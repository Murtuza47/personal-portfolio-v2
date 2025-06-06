import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Smartphone } from "lucide-react";
import Image from "next/image";

export function MobileOverviewSection() {
  return (
    <section className="relative py-20 sm:py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden bg-muted/30">
      <div className="container">
        <div className="grid gap-8 md:gap-12 md:grid-cols-2 items-center">
          <div className="space-y-4 sm:space-y-6">
            <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              About My Mobile Development Service
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">A Decade of Providing Performance-Driven Mobile Applications</h2>
            <p className="text-muted-foreground">
              From intuitive UI to powerful backends, we build mobile apps that blend seamless design with top-tier functionality. 
              Whether launching a new product, extending your web service to mobile, or building an internal tool, we turn your ideas 
              into high-performing, secure, and scalable mobile apps that users love. Every project is built with cross-platform 
              compatibility and long-term growth in mind.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Native and cross-platform mobile app development</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Responsive design with frictionless user experience</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Integrated features like push notifications, geolocation, and APIs</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p>Performance-tuned apps that are scalable and secure</p>
              </div>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="relative z-10 rounded-2xl overflow-hidden border-4 sm:border-8 border-background shadow-xl">
              <Image
                src=""
                alt="Web Development"
                width={800}
                height={600}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 z-20 bg-background rounded-lg p-3 sm:p-4 shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Smartphone />
                </div>
                <div>
                  <h4 className="font-medium text-sm sm:text-base">Modern Tech Stack</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">React Native, Android, iOS, Firebase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
