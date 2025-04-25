"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedServicesTextProps {
  services: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  delayBetween?: number
  mobileShrink?: boolean
  showCursor?: boolean
}

export function AnimatedServicesText({
  services,
  className,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
  mobileShrink = true,
  showCursor = true,
}: AnimatedServicesTextProps) {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLSpanElement>(null)

  // Find the longest service text for proper spacing
  const longestService = services.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    "",
  )

  useEffect(() => {
    if (!services.length) return

    let timeout: NodeJS.Timeout

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, delayBetween)
      return () => clearTimeout(timeout)
    }

    const currentService = services[currentServiceIndex]

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false)
        setCurrentServiceIndex((prev) => (prev + 1) % services.length)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, deletingSpeed)
      }
    } else {
      if (currentText === currentService) {
        setIsPaused(true)
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentService.slice(0, currentText.length + 1))
        }, typingSpeed)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentServiceIndex, isDeleting, isPaused, services, typingSpeed, deletingSpeed, delayBetween])

  return (
    <span
      ref={containerRef}
      className={cn(
        "relative inline-block",
        mobileShrink && "text-[0.9em] sm:text-[1em]", // Appropriate text size for badge
        className,
      )}
    >
      <span className="invisible whitespace-nowrap">{longestService}</span>
      <span
        className={cn(
          "absolute left-0 top-0 whitespace-nowrap",
          showCursor && (isDeleting ? "after:animate-blink" : "after:animate-blink-fast"),
          showCursor &&
            "after:ml-1 after:inline-block after:h-[1.1em] after:w-[2px] after:bg-primary after:align-middle after:content-[''] after:opacity-100 after:rounded-full",
        )}
      >
        {currentText}
      </span>
    </span>
  )
}
