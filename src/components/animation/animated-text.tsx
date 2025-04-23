"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

export function AnimatedText({ 
  text, 
  className, 
  delay = 0.05, 
  duration = 0.5 
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Reset visibility when text changes
    setIsVisible(false)
    
    // Trigger animation after a small delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [text])

  return (
    <div 
      ref={containerRef} 
      className={cn("overflow-hidden", className)}
    >
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={cn(
            "inline-block opacity-0",
            isVisible && "animate-fade-up"
          )}
          style={{
            animationDuration: `${duration}s`,
            animationDelay: `${index * delay}s`,
            animationFillMode: "forwards",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  )
}
