"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  href: string
}

export function ProjectCard({ title, category, image, href }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={800}
          height={600}
          className={cn("object-cover transition-transform duration-500", isHovered ? "scale-110" : "scale-100")}
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-6 text-center text-white transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        >
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-white/80 mb-4">{category}</p>
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
          >
            View Project <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
