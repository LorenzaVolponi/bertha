"use client"

export function ProcessFlow() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-lg border p-6 shadow-sm">
        <div className="flex items-center justify-center">
          <div className="text-center text-2xl font-bold text-primary">Credit as Infrastructure</div>
        </div>
        <div className="mt-2 text-center text-sm text-muted-foreground">A AWS do Crédito B2B</div>

        <div className="mt-12 flex flex-col items-center space-y-8 md:flex-row md:justify-between md:space-y-0 md:space-x-4">
          <div className="flex h-32 w-32 flex-col items-center justify-center rounded-lg bg-primary/10 text-center">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">1</div>
            <div className="px-2 text-sm font-medium">
              Plataformas
              <br />
              (Originadores)
            </div>
          </div>

          <div className="hidden h-0.5 w-16 bg-primary md:block"></div>

          <div className="flex h-32 w-32 flex-col items-center justify-center rounded-lg bg-primary/20 text-center">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">2</div>
            <div className="px-2 text-sm font-medium">
              Bertha Integradora
              <br />
              (Hub Tecnológico)
            </div>
          </div>

          <div className="hidden h-0.5 w-16 bg-primary md:block"></div>

          <div className="flex h-32 w-32 flex-col items-center justify-center rounded-lg bg-primary/10 text-center">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">3</div>
            <div className="px-2 text-sm font-medium">
              Funders
              <br />
              (Capital)
            </div>
          </div>
        </div>

        <div className="mt-8 hidden md:flex md:justify-between md:px-8">
          <div className="text-center text-xs">
            <div className="mb-1 h-0.5 w-16 bg-primary/50 mx-auto"></div>
            <div>APIs</div>
          </div>
          <div className="text-center text-xs">
            <div className="mb-1 h-0.5 w-16 bg-primary/50 mx-auto"></div>
            <div>Compliance</div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border bg-muted/20 p-4 text-center">
            <div className="text-sm font-medium">CreditOps Plug-in</div>
          </div>

          <div className="rounded-lg border bg-muted/20 p-4 text-center">
            <div className="text-sm font-medium">Orquestrador APIs Hub</div>
          </div>

          <div className="rounded-lg border bg-muted/20 p-4 text-center">
            <div className="text-sm font-medium">Compliance Engine</div>
          </div>
        </div>
      </div>
    </div>
  )
}
