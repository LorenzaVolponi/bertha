"use client"

import { useState, useEffect, useRef } from "react"
import { LineChart, Users, Database, ArrowRight } from "lucide-react"
import { useInView, useAnimation } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ClientOnly } from "@/components/client-only"
import { SafeMotionDiv } from "@/components/safe-motion-div"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function OpportunitiesSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.1 })
  const [activeTab, setActiveTab] = useState("overview")

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
    <section id="opportunities" className="bg-white py-20 md:py-32">
      <div className="container">
        <ClientOnly>
          <SafeMotionDiv ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
            <SafeMotionDiv
              variants={itemVariants}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="bg-bertha-blue/10 text-bertha-blue hover:bg-bertha-blue/20">Oportunidades</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-bertha-blue sm:text-4xl md:text-5xl">
                  Por que Embedded Finance é o futuro?
                </h2>
                <p className="max-w-[800px] text-slate-600 md:text-xl">
                  Descubra como a integração de serviços financeiros pode transformar seu negócio
                </p>
              </div>
            </SafeMotionDiv>

            <SafeMotionDiv variants={itemVariants}>
              <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                  <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                  <TabsTrigger value="benefits">Benefícios</TabsTrigger>
                  <TabsTrigger value="revenue">Receitas</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-8">
                  <div className="grid gap-8 md:grid-cols-3">
                    <Card className="shadow-md hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                          <LineChart className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl text-bertha-blue">Diversificação de Receita</CardTitle>
                      </CardHeader>
                      <CardContent className="text-slate-600">
                        <p>
                          Empresas automobilísticas oferecendo seguros no ponto de venda, gerando novas fontes de
                          receita. Aumento médio de 2.5x no faturamento por cliente.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="ghost"
                          className="group p-0 text-bertha-blue hover:text-bertha-blue hover:bg-transparent"
                        >
                          Saiba mais
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="shadow-md hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                          <Users className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl text-bertha-blue">Aumento do Lifetime Value</CardTitle>
                      </CardHeader>
                      <CardContent className="text-slate-600">
                        <p>
                          Retenção de clientes com opções de pagamento flexíveis, aumentando o valor ao longo do tempo.
                          Crescimento médio de 40% na retenção de clientes.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="ghost"
                          className="group p-0 text-bertha-blue hover:text-bertha-blue hover:bg-transparent"
                        >
                          Saiba mais
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardFooter>
                    </Card>

                    <Card className="shadow-md hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                          <Database className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-xl text-bertha-blue">Melhoria na Compreensão do Cliente</CardTitle>
                      </CardHeader>
                      <CardContent className="text-slate-600">
                        <p>
                          Uso de IA e análise de dados para personalização e ofertas mais relevantes. Aumento de 60% na
                          conversão de vendas com ofertas personalizadas.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          variant="ghost"
                          className="group p-0 text-bertha-blue hover:text-bertha-blue hover:bg-transparent"
                        >
                          Saiba mais
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="benefits">
                  <Card className="shadow-lg">
                    <CardHeader className="bg-bertha-blue text-white">
                      <CardTitle>Benefícios do Embedded Finance</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-6">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                            <span className="text-lg font-bold">1</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-bertha-blue mb-2">
                              Atenderá mercados subatendidos
                            </h3>
                            <p className="text-slate-600">
                              As PMEs estão enfrentando dificuldades para obter serviços financeiros por meios
                              tradicionais. O Embedded Finance permite que essas empresas acessem serviços financeiros
                              diretamente nas plataformas que já utilizam.
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                            <span className="text-lg font-bold">2</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-bertha-blue mb-2">
                              Melhorará a UX e a personalização de produtos
                            </h3>
                            <p className="text-slate-600">
                              Dados estão isolados e concentrados, resultando em uma experiência de usuário genérica e
                              recomendações de produtos inadequadas. O Embedded Finance permite uma experiência mais
                              fluida e personalizada.
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                            <span className="text-lg font-bold">3</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-bertha-blue mb-2">
                              Aumentará a inclusão financeira
                            </h3>
                            <p className="text-slate-600">
                              O sistema financeiro atual não atende bem consumidores com pouca ou nenhuma pontuação de
                              crédito, limitando seu acesso a serviços financeiros essenciais. O Embedded Finance
                              democratiza o acesso a esses serviços.
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                            <span className="text-lg font-bold">4</span>
                          </div>
                          <div>
                            <h3 className="text-lg font-medium text-bertha-blue mb-2">
                              Disruptará serviços financeiros
                            </h3>
                            <p className="text-slate-600">
                              Modelos antigos de empréstimo não funcionam para novas empresas digitais, devido à
                              ineficiência e à demanda por processos mais rápidos. O Embedded Finance traz agilidade e
                              eficiência para os serviços financeiros.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="revenue">
                  <Card className="overflow-hidden shadow-lg">
                    <CardHeader className="bg-bertha-blue text-white">
                      <CardTitle className="text-xl">Distribuição de Receitas no Embedded Finance</CardTitle>
                      <p className="text-white/80 text-sm">
                        Projeção de distribuição de receitas por segmento até 2025
                      </p>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="grid gap-8 md:grid-cols-2">
                        <div className="flex flex-col items-center justify-center">
                          <div className="relative h-64 w-64">
                            <div className="absolute inset-0 rounded-full border-8 border-bertha-blue/10"></div>
                            <div
                              className={`absolute inset-0 rounded-full border-8 border-transparent border-t-bertha-blue transition-all duration-1000 ${
                                inView ? "opacity-100" : "opacity-0"
                              }`}
                              style={{
                                transform: inView ? "rotate(170deg)" : "rotate(0deg)",
                                transformOrigin: "center",
                                transition: "transform 1.5s ease-out, opacity 0.5s ease-out",
                              }}
                            ></div>
                            <div
                              className={`absolute inset-8 rounded-full border-8 border-bertha-blue/20 transition-all duration-1000 delay-200 ${
                                inView ? "opacity-100" : "opacity-0"
                              }`}
                            ></div>
                            <div
                              className={`absolute inset-16 rounded-full border-8 border-bertha-blue/30 transition-all duration-1000 delay-400 ${
                                inView ? "opacity-100" : "opacity-0"
                              }`}
                            ></div>
                            <div
                              className={`absolute inset-24 rounded-full bg-bertha-blue flex items-center justify-center text-white transition-all duration-1000 delay-600 ${
                                inView ? "opacity-100" : "opacity-0"
                              }`}
                            >
                              <div className="text-center">
                                <div className="text-2xl font-bold">$124B</div>
                                <div className="text-xs">até 2025</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col justify-center space-y-6">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">Pagamentos</span>
                              <span>49%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-slate-100">
                              <div
                                className={`h-2 rounded-full bg-bertha-blue transition-all duration-1000 ${
                                  inView ? "w-[49%]" : "w-0"
                                }`}
                              ></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">Empréstimos</span>
                              <span>21%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-slate-100">
                              <div
                                className={`h-2 rounded-full bg-bertha-blue transition-all duration-1000 delay-200 ${
                                  inView ? "w-[21%]" : "w-0"
                                }`}
                              ></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">Seguros</span>
                              <span>17%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-slate-100">
                              <div
                                className={`h-2 rounded-full bg-bertha-blue transition-all duration-1000 delay-400 ${
                                  inView ? "w-[17%]" : "w-0"
                                }`}
                              ></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">Banking</span>
                              <span>7%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-slate-100">
                              <div
                                className={`h-2 rounded-full bg-bertha-blue transition-all duration-1000 delay-600 ${
                                  inView ? "w-[7%]" : "w-0"
                                }`}
                              ></div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium">Wealth Management</span>
                              <span>6%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-slate-100">
                              <div
                                className={`h-2 rounded-full bg-bertha-blue transition-all duration-1000 delay-800 ${
                                  inView ? "w-[6%]" : "w-0"
                                }`}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </SafeMotionDiv>
          </SafeMotionDiv>
        </ClientOnly>
      </div>
    </section>
  )
}
