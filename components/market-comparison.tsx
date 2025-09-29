"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function MarketComparison() {
  return (
    <Card className="shadow-sm overflow-hidden">
      <CardHeader className="bg-primary text-white">
        <CardTitle>Comparação de Mercados B2B vs B2C</CardTitle>
        <CardDescription className="text-white/80">
          Análise comparativa entre os mercados B2B e B2C online e offline
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <div className="w-full overflow-auto">
          <div className="min-w-[600px]">
            <div className="grid grid-cols-5 gap-4 rounded-lg bg-muted p-4 font-medium">
              <div className="col-span-1">Segmento</div>
              <div className="col-span-2">Online (%)</div>
              <div className="col-span-2">Offline (%)</div>
            </div>
            <div className="mt-2 grid grid-cols-5 gap-4 rounded-lg bg-muted/50 p-4">
              <div className="col-span-1 font-medium">B2C</div>
              <div className="col-span-2">
                <div className="flex items-center">
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "17.9%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">17.9%</span>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-center">
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary/30" style={{ width: "82.1%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">82.1%</span>
                </div>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-5 gap-4 rounded-lg bg-muted/50 p-4">
              <div className="col-span-1 font-medium">B2B</div>
              <div className="col-span-2">
                <div className="flex items-center">
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "5.5%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">5.5%</span>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-center">
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary/30" style={{ width: "94.5%" }}></div>
                  </div>
                  <span className="ml-2 text-sm font-medium">94.5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Tamanho do Mercado B2B</h3>
              <p className="text-sm text-muted-foreground">Global, em trilhões de dólares</p>
            </div>
            <div className="text-3xl font-bold text-primary">$120T</div>
          </div>
          <div className="mt-4 flex items-center">
            <div className="relative h-2 w-full rounded-full bg-muted">
              <div className="absolute top-0 left-0 h-2 w-[80%] rounded-full bg-primary"></div>
            </div>
          </div>
          <div className="mt-2 flex justify-between text-sm text-muted-foreground">
            <span>5x maior que o mercado B2C</span>
            <span>Potencial enorme de digitalização</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
