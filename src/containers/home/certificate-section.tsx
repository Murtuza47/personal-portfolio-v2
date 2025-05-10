import { CertificationCarousel } from "@/components/certification-crousel";
import { Badge } from "@/components/ui/badge";

// Certificate data
const certificates = [
  {
    id: "1",
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    date: "Janurary 22, 2024",
    description: "Expertise in designing distributed systems and deploying applications on AWS infrastructure.",
    image: "/assets/Microsoft Certified - Azure Administrator Associate.png",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/AliMurtaza-0549/6F0345B36A9D70DB?sharingId=80164617471243A0",
  },
  {
    id: "2",
    title: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    date: "February 21, 2025",
    description: "Advanced skills in building scalable and secure applications using Google Cloud technologies.",
    image: "/assets/Microsoft Certified - Azure Solutions Architect Expert.png",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/AliMurtaza-0549/E4475FE8351DD387?sharingId=80164617471243A0",
  },
  {
    id: "3",
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "March 28, 2024",
    description: "Proficiency in designing, building, testing, and maintaining cloud applications on Microsoft Azure.",
    image: "/assets/Microsoft Certified - Azure Developer Associate.png",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/AliMurtaza-0549/AE2B5830AF4F02AE?sharingId=80164617471243A0",
  },
]

export function CertificateSection() {
  return (
    <section id="certifications" className="relative py-16 md:py-20 lg:h-[calc(100vh-65px)] lg:flex lg:items-center lg:justify-center lg:overflow-hidden bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <Badge className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
            Certifications
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Professional Credentials</h2>
          <p className="text-muted-foreground">
            Industry-recognized certifications that validate my expertise and commitment to excellence.
          </p>
        </div>

        <CertificationCarousel certificates={certificates} />
      </div>
    </section>
  )
}
