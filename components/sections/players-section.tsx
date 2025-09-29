"use client"

import { useEffect, useRef } from "react"
import { Code, Database, Shield } from "lucide-react"
import { useInView, useAnimation } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClientOnly } from "@/components/client-only"
import { SafeMotionDiv } from "@/components/safe-motion-div"

export function PlayersSection() {
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
    <section id="players" className="bg-slate-50 py-20 md:py-32">
      <div className="container">
        <ClientOnly>
          <SafeMotionDiv ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
            <SafeMotionDiv
              variants={itemVariants}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="bg-bertha-blue/10 text-bertha-blue hover:bg-bertha-blue/20">Players</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-bertha-blue sm:text-4xl md:text-5xl">
                  Quem são os principais players do Embedded Finance?
                </h2>
                <p className="max-w-[800px] text-slate-600 md:text-xl">
                  Conheça os atores e suas funções no ecossistema B2B
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
                      B2B
                    </div>
                    <div className="text-xl font-bold text-bertha-blue">Ecossistema Embedded Finance</div>
                  </div>

                  <div className="grid gap-8 md:grid-cols-3">
                    <Card
                      className="shadow-md hover:shadow-xl transition-all duration-500 transform-gpu hover:-translate-y-1"
                      style={{ transitionDelay: "200ms" }}
                    >
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                          <Code className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg text-bertha-blue">Software, Plataformas e Marketplaces</CardTitle>
                      </CardHeader>
                      <CardContent className="text-slate-600">
                        <p>
                          Originadores e distribuidores de produtos financeiros, integrando serviços em suas plataformas
                          existentes.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm">
                          <li className="flex items-center">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                            <span>ERPs e sistemas de gestão</span>
                          </li>
                          <li className="flex items-center">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                            <span>Marketplaces B2B</span>
                          </li>
                          <li className="flex items-center">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                            <span>Plataformas verticais</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card
                      className="shadow-md hover:shadow-xl transition-all duration-500 transform-gpu hover:-translate-y-1"
                      style={{ transitionDelay: "400ms" }}
                    >
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                          <Database className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg text-bertha-blue">
                          Provedores de Tecnologia e Infraestrutura
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-slate-600">
                        <p>
                          Desenvolvimento e manutenção de APIs, fornecendo a infraestrutura necessária para integração.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm">
                          <li className="flex items-center">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                            <span>Banking as a Service (BaaS)</span>
                          </li>
                          <li className="flex items-center">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                            <span>Provedores de APIs</span>
                          </li>
                          <li className="flex items-center">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                            <span>Integradores tecnológicos</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card
                      className="shadow-md hover:shadow-xl transition-all duration-500 transform-gpu hover:-translate-y-1"
                      style={{ transitionDelay: "600ms" }}
                    >
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                          <Shield className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg text-bertha-blue">Provedores de Balance Sheet</CardTitle>
                      </CardHeader>
                      <CardContent className="text-slate-600">
                        <p>
                          Licenças regulatórias e gestão de risco, fornecendo o capital e a estrutura necessária para as
                          operações.
                        </p>
                        <ul className="mt-4 space-y-2 text-sm">
                          <li className="flex items-center">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                            <span>Bancos tradicionais</span>
                          </li>
                          <li className="flex items-center">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                            <span>Fintechs reguladas</span>
                          </li>
                          <li className="flex items-center">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                            <span>Fundos de investimento</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-12 flex flex-col items-center">
                    <div className="w-full max-w-2xl rounded-lg bg-bertha-blue/5 p-4 text-center">
                      <p className="text-bertha-blue">
                        <span className="font-bold">Bertha Integradora</span> atua como um hub tecnológico, conectando
                        todos os players do ecossistema e facilitando a integração de serviços financeiros em
                        plataformas B2B.
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
