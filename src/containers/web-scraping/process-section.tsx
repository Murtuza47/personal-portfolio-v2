import { Badge } from "@/components/ui/badge";
import { GradientCard } from "@/components/ui/gradient-card";

export function WebScrapingProcessSection() {
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
          <GradientCard
            number="01"
            title="Discovery & Target Mapping"
            description="We define your data needs and identify the right websites and structures."
          />
          <GradientCard
            number="02"
            title="Script Development"
            description="Custom scraping tools are built using Python, BeautifulSoup, or Scrapy."
          />
          <GradientCard
            number="03"
            title="Data Extraction & Structuring"
            description="Clean, formatted data is parsed and packaged as per your preference."
          />
          <GradientCard
            number="04"
            title="Validation & Quality Check"
            description="We ensure accuracy and consistency through automated tests and manual QA."
          />
          <GradientCard
            number="05"
            title="Delivery & Automation Setup"
            description="You receive your data on schedule via API, email, or cloud storage."
          />
        </div>
      </div>
    </section>
  );
}
