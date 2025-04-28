import React from "react"
import { AboutSection } from "@/containers/home/about-section"
import { HomeSection } from "@/containers/home/home-section"
import { ServiceSection } from "@/containers/home/service-section"
import { PortfolioSection } from "@/containers/home/portfolio-section"
import { ContactSection } from "@/containers/home/contact-section"
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
