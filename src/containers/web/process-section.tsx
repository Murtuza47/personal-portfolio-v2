import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function WebProcessSection() {
  return (
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
  )
}
