"use client"

import { useEffect, useRef } from "react"
import { useInView, useAnimation } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { ClientOnly } from "@/components/client-only"
import { SafeMotionDiv } from "@/components/safe-motion-div"

export function FundStructureSection() {
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
    <section id="fund-structure" className="bg-slate-50 py-20 md:py-32">
      <div className="container">
        <ClientOnly>
          <SafeMotionDiv ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
            <SafeMotionDiv
              variants={itemVariants}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="bg-bertha-blue/10 text-bertha-blue hover:bg-bertha-blue/20">Estrutura de Fundos</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-bertha-blue sm:text-4xl md:text-5xl">
                  Modelo conceitual da estrutura de Fundos Bertha
                </h2>
                <p className="max-w-[800px] text-slate-600 md:text-xl">
                  Conheça nossa estrutura de fundos que suporta as operações de Embedded Finance
                </p>
              </div>
            </SafeMotionDiv>

            <SafeMotionDiv variants={itemVariants} className="mx-auto max-w-4xl">
              <div className="relative p-8 bg-white rounded-xl shadow-lg">
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-bertha-blue/5"></div>
                  <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-bertha-blue/5"></div>
                </div>

                <div className="relative">
                  <div className="flex flex-col items-center justify-center mb-12">
                    <div className="h-16 w-16 rounded-full bg-bertha-blue flex items-center justify-center text-white text-2xl font-bold mb-4">
                      FIM
                    </div>
                    <div className="text-xl font-bold text-bertha-blue">Empresa Mãe</div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="h-16 w-1 bg-bertha-blue/20"></div>

                    <div className="h-16 w-16 rounded-full bg-bertha-blue/80 flex items-center justify-center text-white text-xl font-bold mb-4">
                      FIP
                    </div>
                    <div className="text-lg font-medium text-bertha-blue mb-8">Embedded Finance</div>

                    <div className="h-16 w-1 bg-bertha-blue/20"></div>

                    <div className="h-16 w-16 rounded-full bg-bertha-blue/60 flex items-center justify-center text-white text-xl font-bold mb-4">
                      FIC
                    </div>

                    <div className="grid grid-cols-2 gap-8 w-full max-w-md mt-8">
                      <div className="flex flex-col items-center">
                        <div className="h-16 w-1 bg-bertha-blue/20 mb-4"></div>
                        <div className="h-16 w-16 rounded-full bg-bertha-blue/40 flex items-center justify-center text-white text-xl font-bold">
                          EQ
                        </div>
                        <div className="text-base font-medium text-bertha-blue mt-2">EQUITY</div>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="h-16 w-1 bg-bertha-blue/20 mb-4"></div>
                        <div className="h-16 w-16 rounded-full bg-bertha-blue/40 flex items-center justify-center text-white text-xl font-bold">
                          CR
                        </div>
                        <div className="text-base font-medium text-bertha-blue mt-2">CRÉDITO</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="rounded-lg border p-6 bg-bertha-blue/5 hover:bg-bertha-blue/10 transition-all duration-300">
                      <h3 className="text-lg font-bold text-bertha-blue mb-4">Investidores</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <div className="mr-2 h-2 w-2 rounded-full bg-bertha-blue"></div>
                          <span className="text-slate-600">Cota A</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-2 w-2 rounded-full bg-bertha-blue"></div>
                          <span className="text-slate-600">Cota B</span>
                        </li>
                        <li className="flex items-center">
                          <div className="mr-2 h-2 w-2 rounded-full bg-bertha-blue"></div>
                          <span className="text-slate-600">Cota C</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg border p-6 bg-bertha-blue/5 hover:bg-bertha-blue/10 transition-all duration-300">
                      <h3 className="text-lg font-bold text-bertha-blue mb-4">CredTech</h3>
                      <p className="text-slate-600">
                        Plataforma tecnológica que conecta todos os elementos da estrutura, garantindo eficiência e
                        segurança nas operações.
                      </p>
                    </div>

                    <div className="rounded-lg border p-6 bg-bertha-blue/5 hover:bg-bertha-blue/10 transition-all duration-300">
                      <h3 className="text-lg font-bold text-bertha-blue mb-4">Setoriais</h3>
                      <p className="text-slate-600">
                        Fundos específicos para diferentes setores do mercado, permitindo uma abordagem especializada
                        para cada segmento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SafeMotionDiv>
          </SafeMotionDiv>
        </ClientOnly>
      </div>
    </section>
  )
}
