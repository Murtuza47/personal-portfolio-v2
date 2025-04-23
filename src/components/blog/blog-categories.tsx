"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BlogCategoriesProps {
  categories: string[]
  onSelectCategory: (category: string | null) => void
  selectedCategory: string | null
}

export function BlogCategories({ categories, onSelectCategory, selectedCategory }: BlogCategoriesProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        size="sm"
        onClick={() => onSelectCategory(null)}
        className={cn(selectedCategory === null ? "bg-primary hover:bg-primary/90" : "", "rounded-full")}
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectCategory(category)}
          className={cn(selectedCategory === category ? "bg-primary hover:bg-primary/90" : "", "rounded-full")}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
