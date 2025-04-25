"use client"

import {
  ArrowRight,
  Code,
  Layout,
  Search,
  Smartphone,
  TrendingUp,
  Users,
  BarChart2,
  ShoppingBag,
  Zap,
  Move,
  BugIcon as Spider,
  Briefcase,
  Cpu,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon:
    | "layout"
    | "code"
    | "smartphone"
    | "search"
    | "trending-up"
    | "users"
    | "bar-chart-2"
    | "shopping-bag"
    | "zap"
    | "move"
    | "spider"
    | "briefcase"
    | "cpu"
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const IconComponent = {
    layout: Layout,
    code: Code,
    smartphone: Smartphone,
    search: Search,
    "trending-up": TrendingUp,
    users: Users,
    "bar-chart-2": BarChart2,
    "shopping-bag": ShoppingBag,
    zap: Zap,
    move: Move,
    spider: Spider,
    briefcase: Briefcase,
    cpu: Cpu,
  }[icon]

  return (
    <div
      className="group p-6 rounded-xl border bg-background border-border hover:border-primary/50 hover:shadow-lg hover:bg-primary/5 transition-all duration-300"
    >
      <div className="space-y-4">
        <div
          className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300"
        >
          <IconComponent className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <div
          className="flex items-center text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-300"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  )
}
