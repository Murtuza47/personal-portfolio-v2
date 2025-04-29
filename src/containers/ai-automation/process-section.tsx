import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function AIProcessSection() {
  return (
    <section className="relative py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
            My Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Revolutionizing Your Workflow: Our 5-Step AI Automation Process
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold">Initial Consultation</h3>
              <p className="text-muted-foreground">
                Understanding your automation needs and current workflows.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold">AI Solution Design</h3>
              <p className="text-muted-foreground">
                Designing custom AI agents for specific tasks.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold">Development & Integration</h3>
              <p className="text-muted-foreground">
                Building and integrating the AI solutions into your workflow.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">04</span>
              </div>
              <h3 className="text-xl font-bold">Testing & Optimization</h3>
              <p className="text-muted-foreground">
                Ensuring AI agents work seamlessly and optimize performance.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">05</span>
              </div>
              <h3 className="text-xl font-bold">Deployment & Ongoing Support</h3>
              <p className="text-muted-foreground">
                Deploying AI agents and offering continued support for long-term success.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
