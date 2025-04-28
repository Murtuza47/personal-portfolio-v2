"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "relative h-8 w-[3.5rem] rounded-full transition-colors duration-300",
        "bg-primary/10 hover:bg-primary/20",
        "flex items-center px-1",
        theme === "dark" ? "justify-end" : "justify-start"
      )}
      aria-label="Toggle theme"
    >
      <div 
        className={cn(
          "absolute w-[3.5rem] inset-0 rounded-full transition-colors duration-300",
          theme === "dark" ? "bg-primary/10" : "bg-primary/5"
        )}
      />
      <div 
        className={cn(
          "relative h-6 w-6 rounded-full bg-background shadow-sm flex items-center justify-center",
          "transform transition-all duration-300",
          "before:absolute before:inset-0 before:rounded-full before:bg-primary/10 before:opacity-0 before:transition-opacity hover:before:opacity-100",
          theme === "dark" 
            ? "translate-x-[0.1rem] rotate-0" 
            : "translate-x-0 rotate-180"
        )}
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4 text-primary transform transition-transform duration-300 rotate-0" />
        ) : (
          <Moon className="h-4 w-4 text-primary transform transition-transform duration-300 -rotate-180" />
        )}
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
