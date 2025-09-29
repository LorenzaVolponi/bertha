"use client"

import { useState, useEffect, useRef } from "react"
import { Database, CreditCard, BarChart3, ArrowRight, Check, X, AlertCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function SolutionSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeTab, setActiveTab] = useState("features")
  const [showDemo, setShowDemo] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionTop = document.getElementById("solution")?.offsetTop || 0
    if (scrollY > sectionTop - window.innerHeight / 1.5) {
      setIsVisible(true)
    }
  }, [scrollY])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev < 2 ? prev + 1 : 0))
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  // Solution data
  const solutions = [
    {
      title: "CreditOps Plug-in",
      icon: Database,
      description:
        "Total automação de BackOffice de Crédito, permitindo uma integração rápida e segura com plataformas B2B.",
      features: [
        "Documentação completa e suporte técnico",
        "Ambiente de sandbox para testes",
        "Integração em menos de 2 semanas",
      ],
      benefits: [
        "Redução de 70% no tempo de processamento",
        "Aumento de 300% no volume de operações",
        "Economia de R$ 2 milhões em custos operacionais",
      ],
      pricing: {
        setup: "R$ 15.000",
        monthly: "R$ 5.000 + 0,5% por transação",
        enterprise: "Personalizado",
      },
    },
    {
      title: "Orquestrador APIs Hub",
      icon: CreditCard,
      description:
        "Conectividade via APIs REST com observabilidade, permitindo uma integração perfeita com sistemas existentes.",
      features: ["Análise de crédito em tempo real", "Personalização de ofertas", "White-label com sua marca"],
      benefits: [
        "Aumento de 45% na conversão",
        "Redução de 60% no tempo de integração",
        "Experiência de usuário unificada",
      ],
      pricing: {
        setup: "R$ 20.000",
        monthly: "R$ 8.000 + 0,3% por transação",
        enterprise: "Personalizado",
      },
    },
    {
      title: "Compliance Engine",
      icon: BarChart3,
      description:
        "Motor de conformidade regulatória, garantindo que todas as operações estejam em conformidade com as regulamentações.",
      features: ["Dashboard completo de operações", "Relatórios personalizados", "Análise de performance"],
      benefits: [
        "100% de conformidade regulatória",
        "Redução de 80% no tempo de auditoria",
        "Mitigação de riscos operacionais",
      ],
      pricing: {
        setup: "R$ 25.000",
        monthly: "R$ 10.000 fixo",
        enterprise: "Personalizado",
      },
    },
  ]

  // Comparison data
  const comparisonData = {
    bertha: {
      integration: "2 semanas",
      pricing: "Transparente",
      support: "24/7 dedicado",
      customization: "Total",
      compliance: "Automática",
    },
    competitors: {
      integration: "8-12 semanas",
      pricing: "Complexo",
      support: "Horário comercial",
      customization: "Limitada",
      compliance: "Manual",
    },
  }

  return (
    <section id="solution" className="bg-white py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <Badge className="bg-bertha-blue/10 text-bertha-blue hover:bg-bertha-blue/20">Nossa Solução</Badge>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-bertha-blue sm:text-4xl md:text-5xl">
              Como o Bertha Integradora Banco B2B pode ajudar?
            </h2>
            <p className="max-w-[800px] text-slate-600 md:text-xl">
              Nossa plataforma completa para integração de serviços financeiros em seu negócio
            </p>
          </div>
        </div>

        <Tabs defaultValue="features" value={activeTab} onValueChange={setActiveTab} className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="features">Recursos</TabsTrigger>
              <TabsTrigger value="comparison">Comparativo</TabsTrigger>
              <TabsTrigger value="pricing">Preços</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="features">
            <div
              className="grid gap-8 md:grid-cols-3 transition-all duration-1000 transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
              }}
            >
              {solutions.map((solution, index) => (
                <Card
                  key={index}
                  className={`shadow-md hover:shadow-xl transition-all duration-300 transform-gpu ${
                    activeStep === index ? "border-bertha-blue -translate-y-1" : "hover:-translate-y-1"
                  }`}
                >
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                      <solution.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl text-bertha-blue">{solution.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-slate-600">
                    <p>{solution.description}</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="ghost"
                      className="group p-0 text-bertha-blue hover:text-bertha-blue hover:bg-transparent"
                      onClick={() => setActiveStep(index)}
                    >
                      Saiba mais
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="comparison">
            <div
              className="mx-auto max-w-4xl transition-all duration-1000 transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
              }}
            >
              <Card className="shadow-lg">
                <CardHeader className="bg-bertha-blue text-white">
                  <CardTitle>Bertha Integradora vs. Concorrência</CardTitle>
                  <p className="text-white/80 text-sm">Comparativo de recursos e benefícios</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px]">
                      <thead>
                        <tr className="border-b">
                          <th className="py-3 text-left font-medium text-slate-500">Recurso</th>
                          <th className="py-3 text-left font-medium text-bertha-blue">Bertha Integradora</th>
                          <th className="py-3 text-left font-medium text-slate-500">Concorrência</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 font-medium">Tempo de Integração</td>
                          <td className="py-3 text-bertha-blue">
                            <div className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-green-500" />
                              {comparisonData.bertha.integration}
                            </div>
                          </td>
                          <td className="py-3 text-slate-500">
                            <div className="flex items-center">
                              <X className="mr-2 h-4 w-4 text-red-500" />
                              {comparisonData.competitors.integration}
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 font-medium">Modelo de Preços</td>
                          <td className="py-3 text-bertha-blue">
                            <div className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-green-500" />
                              {comparisonData.bertha.pricing}
                            </div>
                          </td>
                          <td className="py-3 text-slate-500">
                            <div className="flex items-center">
                              <X className="mr-2 h-4 w-4 text-red-500" />
                              {comparisonData.competitors.pricing}
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 font-medium">Suporte Técnico</td>
                          <td className="py-3 text-bertha-blue">
                            <div className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-green-500" />
                              {comparisonData.bertha.support}
                            </div>
                          </td>
                          <td className="py-3 text-slate-500">
                            <div className="flex items-center">
                              <X className="mr-2 h-4 w-4 text-red-500" />
                              {comparisonData.competitors.support}
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 font-medium">Personalização</td>
                          <td className="py-3 text-bertha-blue">
                            <div className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-green-500" />
                              {comparisonData.bertha.customization}
                            </div>
                          </td>
                          <td className="py-3 text-slate-500">
                            <div className="flex items-center">
                              <AlertCircle className="mr-2 h-4 w-4 text-amber-500" />
                              {comparisonData.competitors.customization}
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 font-medium">Compliance</td>
                          <td className="py-3 text-bertha-blue">
                            <div className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-green-500" />
                              {comparisonData.bertha.compliance}
                            </div>
                          </td>
                          <td className="py-3 text-slate-500">
                            <div className="flex items-center">
                              <X className="mr-2 h-4 w-4 text-red-500" />
                              {comparisonData.competitors.compliance}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
                <CardFooter className="bg-slate-50 p-4 flex justify-between items-center">
                  <p className="text-xs text-slate-500">Fonte: Análise de mercado independente, 2025</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm">Ver detalhes completos</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>Análise Comparativa Detalhada</DialogTitle>
                        <DialogDescription>
                          Comparação completa entre a Bertha Integradora e concorrentes do mercado
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <p className="text-sm text-slate-600">
                          Nossa análise detalhada mostra que a Bertha Integradora supera a concorrência em todos os
                          aspectos críticos para o sucesso da implementação de Embedded Finance em plataformas B2B.
                        </p>
                        <div className="rounded-lg bg-bertha-blue/5 p-4">
                          <h4 className="font-medium text-bertha-blue mb-2">Principais diferenciais:</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start">
                              <Check className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                              <span>Integração 4x mais rápida que a média do mercado</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                              <span>Modelo de preços transparente sem taxas ocultas</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                              <span>Suporte técnico dedicado 24/7 com SLA garantido</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                              <span>Personalização total da experiência do usuário</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="mr-2 h-4 w-4 text-green-500 mt-0.5" />
                              <span>Compliance automático com todas as regulamentações</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        >
                          Solicitar demonstração
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pricing">
            <div
              className="mx-auto max-w-4xl transition-all duration-1000 transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
              }}
            >
              <Card className="shadow-lg">
                <CardHeader className="bg-bertha-blue text-white">
                  <CardTitle>Modelos de Preços</CardTitle>
                  <p className="text-white/80 text-sm">Opções flexíveis para diferentes necessidades</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-3">
                    {solutions.map((solution, index) => (
                      <div key={index} className="rounded-lg border p-4">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                            <solution.icon className="h-4 w-4" />
                          </div>
                          <h3 className="font-medium text-bertha-blue">{solution.title}</h3>
                        </div>

                        <div className="space-y-3 text-sm">
                          <div>
                            <div className="text-slate-500">Setup inicial</div>
                            <div className="font-medium">{solution.pricing.setup}</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Mensalidade</div>
                            <div className="font-medium">{solution.pricing.monthly}</div>
                          </div>
                          <div>
                            <div className="text-slate-500">Enterprise</div>
                            <div className="font-medium">{solution.pricing.enterprise}</div>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-full"
                                  onClick={() =>
                                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                                  }
                                >
                                  Solicitar proposta
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="text-xs">Proposta personalizada em até 24h</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-bertha-blue/5 rounded-lg">
                    <h3 className="text-lg font-medium text-bertha-blue mb-2">Pacote Completo</h3>
                    <p className="text-sm text-slate-600 mb-4">
                      Combine todas as soluções e obtenha descontos exclusivos e benefícios adicionais.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div>
                        <div className="text-sm text-slate-500">A partir de</div>
                        <div className="text-2xl font-bold text-bertha-blue">R$ 15.000/mês</div>
                        <div className="text-xs text-slate-500">+ 0,2% por transação</div>
                      </div>
                      <Button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                      >
                        Fale com um consultor
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-slate-50 p-4 text-xs text-slate-500">
                  <p>Os preços podem variar de acordo com o volume de transações e requisitos específicos.</p>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div
          className="mt-20 transition-all duration-1000 transform"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transitionDelay: "0.3s",
          }}
        >
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border p-8 shadow-lg">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-bertha-blue">Credit as Infrastructure</h3>
                <p className="text-slate-600">A AWS do Crédito B2B</p>
              </div>

              <div className="relative">
                <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-between md:space-y-0 md:space-x-4">
                  <div
                    className={`flex h-32 w-32 flex-col items-center justify-center rounded-lg transition-all duration-500 ${
                      activeStep === 0 ? "bg-bertha-blue text-white" : "bg-bertha-blue/10 text-bertha-blue"
                    }`}
                  >
                    <div
                      className={`mb-2 flex h-10 w-10 items-center justify-center rounded-full ${
                        activeStep === 0 ? "bg-white text-bertha-blue" : "bg-bertha-blue text-white"
                      }`}
                    >
                      1
                    </div>
                    <div className="px-2 text-sm font-medium text-center">
                      Plataformas
                      <br />
                      (Originadores)
                    </div>
                  </div>

                  <div
                    className={`hidden h-0.5 w-16 transition-all duration-500 md:block ${
                      activeStep >= 1 ? "bg-bertha-blue" : "bg-slate-200"
                    }`}
                  ></div>

                  <div
                    className={`flex h-32 w-32 flex-col items-center justify-center rounded-lg transition-all duration-500 ${
                      activeStep === 1 ? "bg-bertha-blue text-white" : "bg-bertha-blue/10 text-bertha-blue"
                    }`}
                  >
                    <div
                      className={`mb-2 flex h-10 w-10 items-center justify-center rounded-full ${
                        activeStep === 1 ? "bg-white text-bertha-blue" : "bg-bertha-blue text-white"
                      }`}
                    >
                      2
                    </div>
                    <div className="px-2 text-sm font-medium text-center">
                      Bertha Integradora
                      <br />
                      (Hub Tecnológico)
                    </div>
                  </div>

                  <div
                    className={`hidden h-0.5 w-16 transition-all duration-500 md:block ${
                      activeStep >= 2 ? "bg-bertha-blue" : "bg-slate-200"
                    }`}
                  ></div>

                  <div
                    className={`flex h-32 w-32 flex-col items-center justify-center rounded-lg transition-all duration-500 ${
                      activeStep === 2 ? "bg-bertha-blue text-white" : "bg-bertha-blue/10 text-bertha-blue"
                    }`}
                  >
                    <div
                      className={`mb-2 flex h-10 w-10 items-center justify-center rounded-full ${
                        activeStep === 2 ? "bg-white text-bertha-blue" : "bg-bertha-blue text-white"
                      }`}
                    >
                      3
                    </div>
                    <div className="px-2 text-sm font-medium text-center">
                      Funders
                      <br />
                      (Capital)
                    </div>
                  </div>
                </div>

                <div className="mt-8 hidden md:flex md:justify-between md:px-8">
                  <div className="text-center text-xs">
                    <div
                      className={`mb-1 h-0.5 w-16 mx-auto transition-all duration-500 ${
                        activeStep >= 1 ? "bg-bertha-blue" : "bg-slate-200"
                      }`}
                    ></div>
                    <div className="text-slate-600">APIs</div>
                  </div>
                  <div className="text-center text-xs">
                    <div
                      className={`mb-1 h-0.5 w-16 mx-auto transition-all duration-500 ${
                        activeStep >= 2 ? "bg-bertha-blue" : "bg-slate-200"
                      }`}
                    ></div>
                    <div className="text-slate-600">Compliance</div>
                  </div>
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-3">
                  <div
                    className={`rounded-lg border p-4 text-center transition-all duration-300 ${
                      activeStep === 1 ? "bg-bertha-blue/5 border-bertha-blue" : "bg-slate-50"
                    }`}
                  >
                    <div className="text-sm font-medium">CreditOps Plug-in</div>
                  </div>

                  <div
                    className={`rounded-lg border p-4 text-center transition-all duration-300 ${
                      activeStep === 1 ? "bg-bertha-blue/5 border-bertha-blue" : "bg-slate-50"
                    }`}
                  >
                    <div className="text-sm font-medium">Orquestrador APIs Hub</div>
                  </div>

                  <div
                    className={`rounded-lg border p-4 text-center transition-all duration-300 ${
                      activeStep === 1 ? "bg-bertha-blue/5 border-bertha-blue" : "bg-slate-50"
                    }`}
                  >
                    <div className="text-sm font-medium">Compliance Engine</div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Dialog open={showDemo} onOpenChange={setShowDemo}>
                    <DialogTrigger asChild>
                      <Button>Ver demonstração interativa</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogHeader>
                        <DialogTitle>Demonstração Interativa</DialogTitle>
                        <DialogDescription>Veja como funciona o fluxo completo da Bertha Integradora</DialogDescription>
                      </DialogHeader>
                      <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                        <div className="text-center p-8">
                          <p className="text-slate-500 mb-4">Demonstração interativa da plataforma</p>
                          <Button>Iniciar demonstração</Button>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setShowDemo(false)}>
                          Fechar
                        </Button>
                        <Button
                          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        >
                          Solicitar demonstração completa
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
