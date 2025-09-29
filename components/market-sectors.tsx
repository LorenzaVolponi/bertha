export function MarketSectors() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-8">
        <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Varejo e E-commerce</h3>
            <div className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">USD 3.500 bi</div>
          </div>
          <div className="mt-4 h-2 w-full rounded-full bg-white/20">
            <div className="h-2 w-[85%] rounded-full bg-white"></div>
          </div>
          <p className="mt-4 text-sm text-white/70">
            O setor de varejo representa a maior oportunidade para Embedded Finance, especialmente em marketplaces B2B.
          </p>
        </div>

        <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Saúde</h3>
            <div className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">USD 1.500 bi</div>
          </div>
          <div className="mt-4 h-2 w-full rounded-full bg-white/20">
            <div className="h-2 w-[60%] rounded-full bg-white"></div>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Plataformas de saúde podem integrar soluções de pagamento e financiamento para tratamentos e equipamentos.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Mobilidade</h3>
            <div className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">USD 1.200 bi</div>
          </div>
          <div className="mt-4 h-2 w-full rounded-full bg-white/20">
            <div className="h-2 w-[45%] rounded-full bg-white"></div>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Empresas de transporte e logística podem oferecer financiamento de frota e seguros integrados.
          </p>
        </div>

        <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Outros Setores</h3>
            <div className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">Em Expansão</div>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-white/90">
            <li className="flex items-center">
              <div className="mr-2 h-2 w-2 rounded-full bg-white"></div>
              <span>Educação</span>
            </li>
            <li className="flex items-center">
              <div className="mr-2 h-2 w-2 rounded-full bg-white"></div>
              <span>Turismo</span>
            </li>
            <li className="flex items-center">
              <div className="mr-2 h-2 w-2 rounded-full bg-white"></div>
              <span>Entretenimento</span>
            </li>
            <li className="flex items-center">
              <div className="mr-2 h-2 w-2 rounded-full bg-white"></div>
              <span>Agricultura</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
