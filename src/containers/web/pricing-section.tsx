import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function WebPricingSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            Pricing
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Transparent pricing plans</h2>
          <p className="text-muted-foreground">
            Flexible options to suit your needs and budget, with no hidden costs.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">$</span>
              </div>
              <h3 className="text-xl font-bold">Basic Website</h3>
              <p className="text-3xl font-bold">$1,499</p>
              <p className="text-muted-foreground">Perfect for small businesses and personal brands.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Up to 5 pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Responsive design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Basic SEO setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Contact form</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>1 month of support</span>
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>
          <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">$</span>
              </div>
              <h3 className="text-xl font-bold">Business Website</h3>
              <p className="text-3xl font-bold">$2,999</p>
              <p className="text-muted-foreground">Ideal for growing businesses and e-commerce.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Up to 10 pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Responsive design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Advanced SEO setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>E-commerce functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>3 months of support</span>
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>
          <Card className="bg-background border-none shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">$</span>
              </div>
              <h3 className="text-xl font-bold">Custom Solution</h3>
              <p className="text-3xl font-bold">Custom</p>
              <p className="text-muted-foreground">For complex projects with specific requirements.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Unlimited pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Advanced functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Integration with third-party services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>6 months of support</span>
                </li>
              </ul>
              <Button className="w-full">Contact Me</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
