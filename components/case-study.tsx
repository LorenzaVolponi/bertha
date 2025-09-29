import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface CaseStudyProps {
  title: string
  category: string
  description: string
  results: string[]
}

export function CaseStudy({ title, category, description, results }: CaseStudyProps) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-200">
      <CardHeader>
        <div className="flex justify-between">
          <Badge className="w-fit">{category}</Badge>
        </div>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/70 mb-4">{description}</p>
        <h4 className="font-medium mb-2">Resultados:</h4>
        <ul className="space-y-2">
          {results.map((result, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="rounded-full group">
          Ver Case Completo
          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}
