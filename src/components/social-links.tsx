import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"

export function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      <Link 
        href="https://github.com/Murtuza47" 
        className="text-muted-foreground hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="h-5 w-5" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link 
        href="https://www.linkedin.com/in/ali-murtaza-4976681a5/" 
        className="text-muted-foreground hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link 
        href="#" 
        className="text-muted-foreground hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter className="h-5 w-5" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link 
        href="https://www.instagram.com/__alimurtuza/" 
        className="text-muted-foreground hover:text-primary transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="h-5 w-5" />
        <span className="sr-only">Instagram</span>
      </Link>
    </div>
  )
} 