import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

interface BlogAuthorProps {
  name: string
  avatar: string
  bio: string
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export function BlogAuthor({ name, avatar, bio, social }: BlogAuthorProps) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border bg-background p-6 text-center sm:flex-row sm:text-left">
      <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-background shadow-md">
        <Image src={avatar || "/placeholder.svg?height=100&width=100"} alt={name} fill className="object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="mb-1 text-xl font-bold">{name}</h3>
        <p className="mb-3 text-muted-foreground">{bio}</p>
        {social && (
          <div className="flex justify-center gap-3 sm:justify-start">
            {social.twitter && (
              <Link
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            )}
            {social.linkedin && (
              <Link
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            )}
            {social.github && (
              <Link
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
