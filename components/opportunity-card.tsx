import type { ReactNode } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface OpportunityCardProps {
  title: string
  description: string
  icon: ReactNode
}

export function OpportunityCard({ title, description, icon }: OpportunityCardProps) {
  return (
    <Card className="h-full transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">{icon}</div>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="mt-2 text-sm text-foreground/70">{description}</p>
      </CardContent>
    </Card>
  )
}
