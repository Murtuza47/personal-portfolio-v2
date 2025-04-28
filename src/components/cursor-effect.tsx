"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorStyle = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y)
      const computedStyle = hoveredElement ? window.getComputedStyle(hoveredElement).cursor : ""
      setIsPointer(computedStyle === "pointer")
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousemove", updateCursorStyle)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    document.documentElement.addEventListener("mouseleave", handleMouseLeave)
    document.documentElement.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousemove", updateCursorStyle)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave)
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [position])

  // Don't render on mobile devices or before theme is mounted
  if (typeof window !== "undefined" && (window.matchMedia("(max-width: 768px)").matches || !mounted)) {
    return null
  }

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button, [role="button"], input, select, textarea {
          cursor: none;
        }
      `}</style>
      <div
        className={`fixed pointer-events-none z-[9999] transition-transform duration-300 ${
          isHidden ? "opacity-0" : "opacity-100"
        } ${isClicking ? "scale-90" : "scale-100"}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className={`rounded-full ${
            isDark ? "bg-white" : "bg-black"
          } ${
            isPointer ? "w-3 h-3" : "w-2 h-2"
          } transition-all duration-200`}
          style={{ 
            boxShadow: isDark 
              ? "0 0 0 1px rgba(255,255,255,0.5)" 
              : "0 0 0 1px rgba(0,0,0,0.5)" 
          }}
        />
        
        <div
          className={`absolute rounded-full border ${
            isDark ? "border-white" : "border-black"
          } ${
            isPointer ? "w-8 h-8 -translate-x-1/2 -translate-y-1/2 opacity-60" : "w-6 h-6 -translate-x-1/2 -translate-y-1/2 opacity-50"
          } transition-all duration-300`}
          style={{ 
            boxShadow: isDark 
              ? "0 0 0 1px rgba(255,255,255,0.3)" 
              : "0 0 0 1px rgba(0,0,0,0.3)" 
          }}
        />
      </div>
    </>
  )
}
