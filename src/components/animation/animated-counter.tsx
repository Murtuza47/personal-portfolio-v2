"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedCounterProps {
  value: number
  duration?: number
  className?: string
}

export function AnimatedCounter({ value, duration = 1, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const step = Math.ceil(value / (duration * 60))

    if (timerRef.current) {
      clearInterval(timerRef.current)
    }

    timerRef.current = setInterval(() => {
      countRef.current += step

      if (countRef.current >= value) {
        countRef.current = value
        if (timerRef.current) clearInterval(timerRef.current)
      }

      setCount(countRef.current)
    }, 1000 / 60)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [value, duration, isVisible])

  return <span ref={containerRef} className={cn(className)}>{count}</span>
}
