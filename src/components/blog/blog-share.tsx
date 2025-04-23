"use client"

import { Facebook, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BlogShareProps {
  title: string
  url: string
  className?: string
}

export function BlogShare({ title, url, className }: BlogShareProps) {
  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(url)

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`, "_blank")
  }

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, "_blank")
  }

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, "_blank")
  }

  const shareByEmail = () => {
    window.open(`mailto:?subject=${encodedTitle}&body=${encodedUrl}`, "_blank")
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <span className="text-sm font-medium text-muted-foreground">Share:</span>
      <Button variant="outline" size="icon" onClick={shareOnTwitter} className="rounded-full h-9 w-9 sm:h-8 sm:w-8">
        <Twitter className="h-4 w-4" />
        <span className="sr-only">Share on Twitter</span>
      </Button>
      <Button variant="outline" size="icon" onClick={shareOnFacebook} className="rounded-full h-9 w-9 sm:h-8 sm:w-8">
        <Facebook className="h-4 w-4" />
        <span className="sr-only">Share on Facebook</span>
      </Button>
      <Button variant="outline" size="icon" onClick={shareOnLinkedIn} className="rounded-full h-9 w-9 sm:h-8 sm:w-8">
        <Linkedin className="h-4 w-4" />
        <span className="sr-only">Share on LinkedIn</span>
      </Button>
      <Button variant="outline" size="icon" onClick={shareByEmail} className="rounded-full h-9 w-9 sm:h-8 sm:w-8">
        <Mail className="h-4 w-4" />
        <span className="sr-only">Share by Email</span>
      </Button>
    </div>
  )
}
