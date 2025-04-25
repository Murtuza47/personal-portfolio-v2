import React from "react"
import { AboutSection } from "@/containers/about-section"
import { HomeSection } from "@/containers/home-section"
import { ServiceSection } from "@/containers/service-section"
import { PortfolioSection } from "@/containers/portfolio-section"
import { ContactSection } from "@/containers/contact-section"
// import { TestimonialSection } from "@/containers/testimonial-section"

export default function Home() {
  return (
    <>
      <HomeSection />

      <AboutSection />

      <ServiceSection />

      <PortfolioSection />

      {/* <TestimonialSection /> */}

      <ContactSection />
    </>
  )
}
