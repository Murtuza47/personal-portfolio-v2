import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProjectNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="container flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">404 - Project Not Found</h1>
        <p className="max-w-2xl text-muted-foreground">
          Sorry, we couldn't find the project you're looking for. It might have been moved or deleted.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
