"use client"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { AnimatedServicesText } from "./animated-services-text"

interface AnimatedBadgeProps {
  prefix?: string
  services: string[]
  className?: string
}

export function AnimatedBadge({ prefix = "I'm a", services, className }: AnimatedBadgeProps) {
  return (
    <Badge
      className={cn(
        "px-5 py-2 text-base font-medium rounded-full bg-primary/10 text-primary border-2 border-primary/20 hover:bg-primary/20 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 animate-border relative z-50 w-[200px]",
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
