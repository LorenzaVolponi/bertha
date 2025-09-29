"use client"

import { useEffect, useRef } from "react"
import { ShoppingCart, Stethoscope, Car, GraduationCap } from "lucide-react"
import { useInView, useAnimation } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { ClientOnly } from "@/components/client-only"
import { SafeMotionDiv } from "@/components/safe-motion-div"

export function MarketSectorsSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="market-sectors" className="bg-bertha-blue text-white py-20 md:py-32">
      <div className="container">
        <ClientOnly>
          <SafeMotionDiv ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
            <SafeMotionDiv
              variants={itemVariants}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="bg-white/10 text-white hover:bg-white/20">Setores</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Onde estão as maiores oportunidades?
                </h2>
                <p className="max-w-[800px] text-white/80 md:text-xl">
                  Conheça os setores com maior potencial para integração de serviços financeiros
                </p>
              </div>
            </SafeMotionDiv>

            <SafeMotionDiv variants={itemVariants} className="grid gap-8 md:grid-cols-2">
              <div className="space-y-8">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <ShoppingCart className="mr-3 h-6 w-6 text-white" />
                      <h3 className="text-xl font-bold">Varejo e E-commerce</h3>
                    </div>
                    <div className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">USD 3.500 bi</div>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-white/20">
                    <div
                      className={`h-2 rounded-full bg-white transition-all duration-1500 ease-out ${
                        inView ? "w-[85%]" : "w-0"
                      }`}
                    ></div>
                  </div>
                  <p className="mt-4 text-sm text-white/80">
                    O setor de varejo representa a maior oportunidade para Embedded Finance, especialmente em
                    marketplaces B2B que podem oferecer financiamento para compras de estoque.
                  </p>
                </div>

                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Stethoscope className="mr-3 h-6 w-6 text-white" />
                      <h3 className="text-xl font-bold">Saúde</h3>
                    </div>
                    <div className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">USD 1.500 bi</div>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-white/20">
                    <div
                      className={`h-2 rounded-full bg-white transition-all duration-1500 ease-out ${
                        inView ? "w-[60%]" : "w-0"
                      }`}
                    ></div>
                  </div>
                  <p className="mt-4 text-sm text-white/80">
                    Plataformas de saúde podem integrar soluções de pagamento e financiamento para tratamentos e
                    equipamentos, facilitando o acesso a serviços médicos.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Car className="mr-3 h-6 w-6 text-white" />
                      <h3 className="text-xl font-bold">Mobilidade</h3>
                    </div>
                    <div className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">USD 1.200 bi</div>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-white/20">
                    <div
                      className={`h-2 rounded-full bg-white transition-all duration-1500 ease-out ${
                        inView ? "w-[45%]" : "w-0"
                      }`}
                    ></div>
                  </div>
                  <p className="mt-4 text-sm text-white/80">
                    Empresas de transporte e logística podem oferecer financiamento de frota e seguros integrados,
                    otimizando a gestão de ativos e reduzindo custos operacionais.
                  </p>
                </div>

                <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/15">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <GraduationCap className="mr-3 h-6 w-6 text-white" />
                      <h3 className="text-xl font-bold">Outros Setores</h3>
                    </div>
                    <div className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">Em Expansão</div>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-white/90">
                    <li className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-white"></div>
                      <span>Educação: Financiamento de cursos e material didático</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-white"></div>
                      <span>Turismo: Pagamentos flexíveis e seguros de viagem</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-white"></div>
                      <span>Entretenimento: Monetização de conteúdo e assinaturas</span>
                    </li>
                    <li className="flex items-center">
                      <div className="mr-2 h-2 w-2 rounded-full bg-white"></div>
                      <span>Agricultura: Financiamento de equipamentos e insumos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </SafeMotionDiv>

            <SafeMotionDiv variants={itemVariants} className="mt-16 mx-auto max-w-2xl text-center">
              <div className="rounded-lg bg-white/5 p-6 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">Potencial Total do Mercado</h3>
                <div className="text-5xl font-bold mb-4 text-bertha-gray-light">USD 7.2 Trilhões</div>
                <p className="text-white/80">
                  Projeção do mercado global de Embedded Finance até 2030, representando uma oportunidade sem
                  precedentes para empresas B2B.
                </p>
              </div>
            </SafeMotionDiv>
          </SafeMotionDiv>
        </ClientOnly>
      </div>
    </section>
  )
}
