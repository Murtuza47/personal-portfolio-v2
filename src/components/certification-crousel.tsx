"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ICertificate } from "@/interface"

export function CertificationCarousel({ certificates }: { certificates: ICertificate[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState<"left" | "right" | null>(null)
  const [autoplay, setAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Handle next certificate
  const nextCertificate = () => {
    if (isAnimating) return
    setDirection("right")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length)
  }

  // Handle previous certificate
  const prevCertificate = () => {
    if (isAnimating) return
    setDirection("left")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length)
  }

  // Jump to a specific certificate
  const jumpToCertificate = (index: number) => {
    if (isAnimating || index === currentIndex) return
    setDirection(index > currentIndex ? "right" : "left")
    setIsAnimating(true)
    setCurrentIndex(index)
  }

  // Handle animation end
  const handleAnimationEnd = () => {
    setIsAnimating(false)
    setDirection(null)
  }

  // Setup autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextCertificate()
      }, 5)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [autoplay, currentIndex])

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setAutoplay(false)
  }

  const handleMouseLeave = () => {
    setAutoplay(true)
  }

  // Get certificate indexes for display
  const currentCertificate = certificates[currentIndex]
  const prevCertificateIndex = (currentIndex - 1 + certificates.length) % certificates.length
  const nextCertificateIndex = (currentIndex + 1) % certificates.length

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={carouselRef}
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
      </div>

      {/* Main carousel container */}
      <div className="relative max-w-5xl mx-auto px-4">
        {/* Certificate display */}
        <div className="relative h-[500px] mb-12">
          {/* Current certificate */}
          <div
            className={cn(
              "absolute top-0 left-0 w-full h-full transition-all duration-500 flex flex-col md:flex-row gap-8 items-center",
              isAnimating && direction === "left" && "animate-slide-out-right",
              isAnimating && direction === "right" && "animate-slide-out-left",
              !isAnimating && "opacity-100 scale-100",
            )}
            onAnimationEnd={handleAnimationEnd}
          >
            {/* Certificate image */}
            <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border-8 border-background shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10" />
              <Image
                src={currentCertificate.image || "/placeholder.svg"}
                alt={currentCertificate.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 z-20">
                <Badge className="bg-primary/90 hover:bg-primary text-white">
                  <Award className="h-3 w-3 mr-1" />
                  Certified
                </Badge>
              </div>
            </div>

            {/* Certificate details */}
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
              <Badge
                className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                variant="outline"
              >
                {currentCertificate.issuer}
              </Badge>
              <h3 className="text-2xl md:text-3xl font-bold">{currentCertificate.title}</h3>
              <p className="text-muted-foreground">{currentCertificate.description}</p>
              <p className="text-sm font-medium">Issued: {currentCertificate.date}</p>
              <Button variant="outline" size="sm" className="mt-4" asChild>
                <a href={currentCertificate.credentialUrl} target="_blank" rel="noopener noreferrer">
                  View Credential
                  <ExternalLink className="ml-2 h-3 w-3" />
                </a>
              </Button>
            </div>
          </div>

          {/* Previous certificate (for animation) */}
          {isAnimating && direction === "left" && (
            <div className="absolute top-0 left-0 w-full h-full animate-slide-in-left flex flex-col md:flex-row gap-8 items-center">
              <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border-8 border-background shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10" />
                <Image
                  src={certificates[prevCertificateIndex].image || "/placeholder.svg"}
                  alt={certificates[prevCertificateIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-primary/90 hover:bg-primary text-white">
                    <Award className="h-3 w-3 mr-1" />
                    Certified
                  </Badge>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                <Badge
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  variant="outline"
                >
                  {certificates[prevCertificateIndex].issuer}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold">{certificates[prevCertificateIndex].title}</h3>
                <p className="text-muted-foreground">{certificates[prevCertificateIndex].description}</p>
                <p className="text-sm font-medium">Issued: {certificates[prevCertificateIndex].date}</p>
                <Button variant="outline" size="sm" className="mt-4" asChild>
                  <a href={certificates[prevCertificateIndex].credentialUrl} target="_blank" rel="noopener noreferrer">
                    View Credential
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          )}

          {/* Next certificate (for animation) */}
          {isAnimating && direction === "right" && (
            <div className="absolute top-0 left-0 w-full h-full animate-slide-in-right flex flex-col md:flex-row gap-8 items-center">
              <div className="relative w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden border-8 border-background shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent z-10" />
                <Image
                  src={certificates[nextCertificateIndex].image || "/placeholder.svg"}
                  alt={certificates[nextCertificateIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="bg-primary/90 hover:bg-primary text-white">
                    <Award className="h-3 w-3 mr-1" />
                    Certified
                  </Badge>
                </div>
              </div>
              <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                <Badge
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  variant="outline"
                >
                  {certificates[nextCertificateIndex].issuer}
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold">{certificates[nextCertificateIndex].title}</h3>
                <p className="text-muted-foreground">{certificates[nextCertificateIndex].description}</p>
                <p className="text-sm font-medium">Issued: {certificates[nextCertificateIndex].date}</p>
                <Button variant="outline" size="sm" className="mt-4" asChild>
                  <a href={certificates[nextCertificateIndex].credentialUrl} target="_blank" rel="noopener noreferrer">
                    View Credential
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation controls */}
        <div className="flex items-center justify-between">
          {/* Previous button */}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10 border-primary/20 hover:bg-primary/10 hover:text-primary"
            onClick={prevCertificate}
            disabled={isAnimating}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous certificate</span>
          </Button>

          {/* Indicators */}
          <div className="flex items-center gap-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  index === currentIndex ? "w-8 bg-primary" : "w-2.5 bg-primary/30 hover:bg-primary/50",
                )}
                onClick={() => jumpToCertificate(index)}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>

          {/* Next button */}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-10 w-10 border-primary/20 hover:bg-primary/10 hover:text-primary"
            onClick={nextCertificate}
            disabled={isAnimating}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next certificate</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
