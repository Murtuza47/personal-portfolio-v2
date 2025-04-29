import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function ECommerceProcessSection() {
  return (
    <section className="relative py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
            My Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our 5-Step Store Success Workflow
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold">Discovery & Strategy</h3>
              <p className="text-muted-foreground">
                We define your business goals, target market, and feature needs.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold">UI/UX Design </h3>
              <p className="text-muted-foreground">
                Our design team crafts a visually stunning and conversion-focused storefront.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold">Custom Development</h3>
              <p className="text-muted-foreground">
                We develop a fully functional, responsive, and scalable e-commerce site.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">04</span>
              </div>
              <h3 className="text-xl font-bold">Integration & Testing</h3>
              <p className="text-muted-foreground">
                Payment systems, inventory tools, and CRMs are integrated and tested.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">05</span>
              </div>
              <h3 className="text-xl font-bold">Launch & Optimize</h3>
              <p className="text-muted-foreground">
                We launch your store and optimize performance post-launch for speed and sales.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
