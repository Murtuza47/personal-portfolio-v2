import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function MobileProcessSection() {
  return (
    <section className="relative py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
            My Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            My 5-Step Mobile Momentum Workflow
          </h2>
          <p className="text-muted-foreground">
            A structured, collaborative approach ensures we create the perfect solution for your needs.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold">Requirements & Research</h3>
              <p className="text-muted-foreground">
                We identify your business goals, user needs, and platform targets.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold">Wireframing & Design </h3>
              <p className="text-muted-foreground">
                UX/UI mockups are crafted to define flow, visuals, and behavior.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold">App Development</h3>
              <p className="text-muted-foreground">
                Native or hybrid apps are coded for speed, security, and feature compatibility.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">04</span>
              </div>
              <h3 className="text-xl font-bold">Testing & QA</h3>
              <p className="text-muted-foreground">
                Rigorously tested across devices for bugs, responsiveness, and performance.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">05</span>
              </div>
              <h3 className="text-xl font-bold">Deployment & Support </h3>
              <p className="text-muted-foreground">
                We launch your app to stores and provide ongoing support and updates.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
