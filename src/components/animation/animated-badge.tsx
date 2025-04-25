"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { AnimatedServicesText } from "./animated-services-text"

interface AnimatedBadgeProps {
  prefix?: string
  services: string[]
  className?: string
}

export function AnimatedBadge({ prefix = "I'm a", services, className }: AnimatedBadgeProps) {
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Badge
        className={cn(
          "px-4 py-2 text-base font-medium rounded-full bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary/20 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 animate-border relative z-50",
          className,
        )}
      >
        {prefix} {services[0]}
      </Badge>
    )
  }

  return (
    <Badge
      className={cn(
        "px-4 py-2 text-base font-medium rounded-full bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary/20 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 animate-border relative z-50",
        className,
      )}
    >
      <span className="mr-1">{prefix}</span>{" "}
      <AnimatedServicesText
        services={services}
        typingSpeed={80}
        deletingSpeed={40}
        delayBetween={2000}
        className="inline-block"
        showCursor={true}
      />
    </Badge>
  )
}
