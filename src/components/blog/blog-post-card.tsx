"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

interface BlogPostCardProps {
  title: string
  excerpt: string
  slug: string
  coverImage: string
  date: string
  readingTime: string
  author: {
    name: string
    avatar: string
  }
  category: string
  featured?: boolean
}

export function BlogPostCard({
  title,
  excerpt,
  slug,
  coverImage,
  date,
  readingTime,
  author,
  category,
  featured = false,
}: BlogPostCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={`/blogs/${slug}`}
      className={cn(
        "group block overflow-hidden rounded-xl border bg-background transition-all duration-300 hover:shadow-lg",
        featured ? "md:grid md:grid-cols-2 md:gap-6" : "",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn("relative aspect-video overflow-hidden", featured ? "md:aspect-auto md:h-full" : "")}>
        <Image
          src={coverImage || "/placeholder.svg?height=600&width=800"}
          alt={title}
          fill
          className={cn("object-cover transition-transform duration-500", isHovered ? "scale-105" : "scale-100")}
        />
        <div className="absolute left-4 top-4">
          <Badge className="bg-primary hover:bg-primary/90">{category}</Badge>
        </div>
      </div>
      <div className="p-6">
        <h3 className={cn("mb-2 line-clamp-2 font-bold tracking-tight", featured ? "text-2xl" : "text-xl")}>{title}</h3>
        <p className="mb-4 line-clamp-2 text-muted-foreground">{excerpt}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readingTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6 overflow-hidden rounded-full">
              <Image
                src={author.avatar || "/placeholder.svg?height=50&width=50"}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <span>{author.name}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
