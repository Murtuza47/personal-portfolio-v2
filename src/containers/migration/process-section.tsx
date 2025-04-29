import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function MigrationProcessSection() {
  return (
    <section className="relative py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
            My Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our 5-Step Precision Migration Framework
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold">Assessment & Planning</h3>
              <p className="text-muted-foreground">
                We evaluate your current setup, define goals, and identify risks.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold">Blueprint Design</h3>
              <p className="text-muted-foreground">
                We develop a custom migration strategy aligned with your business operations.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold">Pre-Migration Testing</h3>
              <p className="text-muted-foreground">
                We perform test runs in a sandbox environment to verify accuracy.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">04</span>
              </div>
              <h3 className="text-xl font-bold">Secure Migration Execution</h3>
              <p className="text-muted-foreground">
                Real-time data and asset transfer without disruption or loss.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">05</span>
              </div>
              <h3 className="text-xl font-bold">Post-Migration Support</h3>
              <p className="text-muted-foreground">
                We provide testing, tweaks, and 24/7 support to ensure everything works perfectly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
