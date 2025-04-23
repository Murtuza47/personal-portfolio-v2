"use client"

import { useState } from "react"
import { ArrowRight, Code, Layout, Search, Smartphone, TrendingUp, Users } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: "layout" | "code" | "smartphone" | "search" | "trending-up" | "users"
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const IconComponent = {
    layout: Layout,
    code: Code,
    smartphone: Smartphone,
    search: Search,
    "trending-up": TrendingUp,
    users: Users,
  }[icon]

  return (
    <div
      className={cn(
        "group p-6 rounded-xl border transition-all duration-300",
        isHovered ? "border-primary/50 shadow-lg bg-primary/5" : "border-border bg-background",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="space-y-4">
        <div
          className={cn(
            "h-12 w-12 rounded-lg flex items-center justify-center transition-colors duration-300",
            isHovered ? "bg-primary text-white" : "bg-primary/10 text-primary",
          )}
        >
          <IconComponent className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <div
          className={cn(
            "flex items-center text-sm font-medium transition-colors duration-300",
            isHovered ? "text-primary" : "text-foreground",
          )}
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  )
}
