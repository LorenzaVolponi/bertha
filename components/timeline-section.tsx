export function TimelineSection() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Connector line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-primary/20 md:left-1/2 md:-ml-0.5"></div>

      <div className="space-y-12">
        {/* Phase 1 */}
        <div className="relative md:flex md:items-center md:justify-between">
          <div className="flex md:w-1/2 md:justify-end md:pr-8">
            <div className="w-full rounded-lg border p-4 shadow-sm md:max-w-md">
              <div className="text-lg font-bold text-primary">Fase 1 (1998–2008)</div>
              <div className="mt-2 text-sm text-foreground/70">
                Introdução de serviços financeiros online, como PayPal, que revolucionaram as transações digitais.
              </div>
            </div>
          </div>

          <div className="absolute left-2 -mt-2 h-8 w-8 rounded-full border-4 border-background bg-primary md:left-1/2 md:-ml-4 md:mt-0"></div>

          <div className="mt-4 md:mt-0 md:w-1/2 md:pl-8">
            <div className="text-sm font-medium text-muted-foreground">Serviços financeiros digitais</div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="relative md:flex md:items-center md:justify-between">
          <div className="flex md:w-1/2 md:justify-end md:pr-8">
            <div className="text-sm font-medium text-muted-foreground md:text-right">Expansão móvel</div>
          </div>

          <div className="absolute left-2 -mt-2 h-8 w-8 rounded-full border-4 border-background bg-primary md:left-1/2 md:-ml-4 md:mt-0"></div>

          <div className="mt-4 md:mt-0 md:w-1/2 md:pl-8">
            <div className="w-full rounded-lg border p-4 shadow-sm md:max-w-md">
              <div className="text-lg font-bold text-primary">Fase 2 (2009–2014)</div>
              <div className="mt-2 text-sm text-foreground/70">
                Boom de tecnologia móvel e redes sociais, criando novas plataformas para serviços financeiros.
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="relative md:flex md:items-center md:justify-between">
          <div className="flex md:w-1/2 md:justify-end md:pr-8">
            <div className="w-full rounded-lg border p-4 shadow-sm md:max-w-md">
              <div className="text-lg font-bold text-primary">Fase 3 (2015–2021)</div>
              <div className="mt-2 text-sm text-foreground/70">
                Expansão rápida das fintechs, impulsionada pela pandemia e mudanças nos hábitos de consumo digitais.
              </div>
            </div>
          </div>

          <div className="absolute left-2 -mt-2 h-8 w-8 rounded-full border-4 border-background bg-primary md:left-1/2 md:-ml-4 md:mt-0"></div>

          <div className="mt-4 md:mt-0 md:w-1/2 md:pl-8">
            <div className="text-sm font-medium text-muted-foreground">Crescimento das fintechs</div>
          </div>
        </div>

        {/* Phase 4 */}
        <div className="relative md:flex md:items-center md:justify-between">
          <div className="flex md:w-1/2 md:justify-end md:pr-8">
            <div className="text-sm font-medium text-muted-foreground md:text-right">Era atual</div>
          </div>

          <div className="absolute left-2 -mt-2 h-8 w-8 rounded-full border-4 border-background bg-primary md:left-1/2 md:-ml-4 md:mt-0"></div>

          <div className="mt-4 md:mt-0 md:w-1/2 md:pl-8">
            <div className="w-full rounded-lg border p-4 shadow-sm md:max-w-md">
              <div className="text-lg font-bold text-primary">Fase 4 (2022+)</div>
              <div className="mt-2 text-sm text-foreground/70">
                Regulamentações proativas e inovações tecnológicas (IA, DLT) impulsionando o Embedded Finance.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
