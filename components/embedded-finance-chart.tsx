"use client"

export function EmbeddedFinanceChart() {
  return (
    <div className="h-80 w-full">
      <div className="grid h-full w-full grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="relative h-40 w-40 rounded-full">
            <div className="absolute inset-0 flex items-center justify-center rounded-full border-8 border-primary/20">
              <div className="absolute inset-2 rounded-full border-8 border-primary/40"></div>
              <div className="absolute inset-4 rounded-full border-8 border-primary/60"></div>
              <div className="absolute inset-6 rounded-full border-8 border-primary/80"></div>
              <div className="absolute inset-8 rounded-full bg-primary text-white flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold">$124B</div>
                  <div className="text-xs">até 2025</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium">Receitas capturadas</div>
            <div className="text-xs text-muted-foreground">por Embedded Finance</div>
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Pagamentos</span>
              <span>49%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted">
              <div className="h-2 rounded-full bg-[#D5E2DD]" style={{ width: "49%" }}></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Empréstimos</span>
              <span>21%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted">
              <div className="h-2 rounded-full bg-[#A7B8BD]" style={{ width: "21%" }}></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Seguros</span>
              <span>17%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted">
              <div className="h-2 rounded-full bg-[#82A2A6]" style={{ width: "17%" }}></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Banking</span>
              <span>7%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted">
              <div className="h-2 rounded-full bg-[#598389]" style={{ width: "7%" }}></div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Wealth Management</span>
              <span>6%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-muted">
              <div className="h-2 rounded-full bg-[#244E5B]" style={{ width: "6%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
