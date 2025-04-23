import { cn } from "@/lib/utils"

interface ColorSwatch {
  name: string
  color: string
  textColor?: string
}

interface ColorPaletteProps {
  className?: string
}

export function ColorPalette({ className }: ColorPaletteProps) {
  const colors: ColorSwatch[] = [
    { name: "Primary", color: "hsl(var(--primary))", textColor: "text-white" },
    { name: "Secondary", color: "hsl(var(--secondary))", textColor: "text-black" },
    { name: "Accent", color: "hsl(var(--accent))", textColor: "text-black" },
    { name: "Background", color: "hsl(var(--background))", textColor: "text-black" },
    { name: "Muted", color: "hsl(var(--muted))", textColor: "text-black" },
  ]

  return (
    <div className={cn("grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4", className)}>
      {colors.map((swatch) => (
        <div key={swatch.name} className="flex flex-col overflow-hidden rounded-lg shadow-md">
          <div
            className={`h-24 flex items-center justify-center ${swatch.textColor}`}
            style={{ backgroundColor: swatch.color }}
          >
            <span className="font-medium">{swatch.name}</span>
          </div>
          <div className="p-3 text-xs bg-background">
            <p className="font-mono">{swatch.color}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
