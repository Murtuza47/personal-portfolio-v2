import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GradientCardProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export function GradientCard({ number, title, description, className }: GradientCardProps) {
  return (
    <Card className={cn("bg-background border-2 border-primary/10 relative", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 dark:from-primary/10 dark:via-transparent dark:to-primary/10 rounded-lg" />
      <CardContent className="p-6 space-y-4 relative z-10">
        <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-primary/10 text-primary">
          <span className="text-xl font-bold">{number}</span>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
} 