import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function PerformanceOptimizationProcessSection() {
  return (
    <section className="relative py-20 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary">
            My Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Our 5-Step Data Harvesting Framework
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">01</span>
              </div>
              <h3 className="text-xl font-bold">Discovery & Target Mapping</h3>
              <p className="text-muted-foreground">
                We define your data needs and identify the right websites and structures.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">02</span>
              </div>
              <h3 className="text-xl font-bold">Script Development</h3>
              <p className="text-muted-foreground">
                Custom scraping tools are built using Python, BeautifulSoup, or Scrapy.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">03</span>
              </div>
              <h3 className="text-xl font-bold">Data Extraction & Structuring</h3>
              <p className="text-muted-foreground">
                Clean, formatted data is parsed and packaged as per your preference.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">04</span>
              </div>
              <h3 className="text-xl font-bold">Validation & Quality Check</h3>
              <p className="text-muted-foreground">
                We ensure accuracy and consistency through automated tests and manual QA.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-background border-2 border-primary/10">
            <CardContent className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
                <span className="text-xl font-bold">05</span>
              </div>
              <h3 className="text-xl font-bold">Delivery & Automation Setup</h3>
              <p className="text-muted-foreground">
                You receive your data on schedule via API, email, or cloud storage.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
