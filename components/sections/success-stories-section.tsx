"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowLeft, ArrowRight, ExternalLink, Play, Pause } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function SuccessStoriesSection() {
  const [activeCase, setActiveCase] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showCaseDetails, setShowCaseDetails] = useState(false)
  const [selectedCase, setSelectedCase] = useState(null)
  const autoPlayRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionTop = document.getElementById("success-stories")?.offsetTop || 0
    if (scrollY > sectionTop - window.innerHeight / 1.5) {
      setIsVisible(true)
    }
  }, [scrollY])

  useEffect(() => {
    if (isVisible && isPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveCase((prev) => (prev < cases.length - 1 ? prev + 1 : 0))
      }, 5000)

      return () => clearInterval(autoPlayRef.current)
    }
  }, [isVisible, isPlaying])

  const cases = [
    {
      title: "ERP Líder",
      category: "Integração",
      description:
        "Parceria com ERP líder para oferecer crédito integrado a seus clientes, resultando em aumento de 300% no volume de operações.",
      results: [
        "Aumento de 300% no volume de operações",
        "Redução de 70% no tempo de processamento",
        "Economia de R$ 2 milhões em custos operacionais",
      ],
      color: "#244E5B",
      fullCase: {
        company: "SoftGestão ERP",
        industry: "Software de Gestão Empresarial",
        challenge:
          "A SoftGestão, líder em soluções ERP para médias empresas, buscava oferecer opções de financiamento para seus clientes adquirirem módulos adicionais e expandirem o uso da plataforma, mas enfrentava dificuldades com processos manuais e altas taxas de abandono.",
        solution:
          "Implementação do CreditOps Plug-in e Orquestrador APIs Hub da Bertha Integradora, permitindo oferta de crédito diretamente na interface do ERP, com análise automática e aprovação em tempo real.",
        implementation:
          "Integração concluída em 3 semanas, com treinamento da equipe e customização da jornada do usuário.",
        testimonial: {
          quote:
            "A parceria com a Bertha Integradora transformou nossa capacidade de oferecer soluções financeiras. Nossos clientes agora podem expandir seus negócios com facilidade, e vimos um crescimento impressionante nas vendas de módulos adicionais.",
          author: "Carlos Mendes",
          role: "Diretor de Produto da SoftGestão",
        },
      },
    },
    {
      title: "Marketplace B2B",
      category: "E-commerce",
      description:
        "Plataforma de e-commerce que aumentou vendas com financiamento no checkout, melhorando conversão e ticket médio.",
      results: [
        "Aumento de 150% na retenção de vendedores",
        "Crescimento de 80% no GMV",
        "Implementação em apenas 3 semanas",
      ],
      color: "#598389",
      fullCase: {
        company: "TechSupply",
        industry: "Marketplace B2B de Equipamentos de TI",
        challenge:
          "A TechSupply, marketplace B2B de equipamentos de TI, enfrentava dificuldades com o alto valor dos produtos, resultando em ciclos de vendas longos e baixa conversão devido à falta de opções de financiamento integradas.",
        solution:
          "Implementação completa da solução Bertha Integradora, oferecendo financiamento no checkout com múltiplas opções de pagamento e parcelamento para compradores B2B.",
        implementation:
          "Integração em 3 semanas com a plataforma existente, incluindo white-label completo e personalização da experiência do usuário.",
        testimonial: {
          quote:
            "A integração com a Bertha revolucionou nosso marketplace. Conseguimos não apenas aumentar significativamente nosso GMV, mas também melhorar a experiência tanto para compradores quanto para vendedores. O processo de implementação foi surpreendentemente rápido e sem complicações.",
          author: "Mariana Silva",
          role: "CEO da TechSupply",
        },
      },
    },
    {
      title: "Plataforma de Saúde",
      category: "Healthtech",
      description:
        "Integração de financiamento para compra de equipamentos médicos, facilitando o acesso a tecnologia de ponta para clínicas.",
      results: [
        "Aumento de 200% nas vendas de equipamentos",
        "Redução de 50% no tempo de fechamento",
        "Satisfação do cliente de 98%",
      ],
      color: "#82A2A6",
      fullCase: {
        company: "MedTech Solutions",
        industry: "Plataforma de Equipamentos Médicos",
        challenge:
          "A MedTech Solutions, plataforma especializada em equipamentos médicos de alta tecnologia, enfrentava dificuldades para vender equipamentos de alto valor para clínicas de pequeno e médio porte devido à falta de opções de financiamento acessíveis.",
        solution:
          "Implementação do Orquestrador APIs Hub e Compliance Engine da Bertha Integradora, permitindo oferecer financiamento personalizado com análise de crédito específica para o setor de saúde.",
        implementation:
          "Integração em 4 semanas, incluindo desenvolvimento de modelos de risco específicos para o setor de saúde e conformidade com regulamentações do setor.",
        testimonial: {
          quote:
            "A parceria com a Bertha Integradora nos permitiu democratizar o acesso a equipamentos médicos de ponta. Clínicas que antes não conseguiam adquirir tecnologias avançadas agora podem oferecer melhores serviços aos seus pacientes, graças às opções de financiamento que integramos à nossa plataforma.",
          author: "Dr. Roberto Campos",
          role: "Diretor de Operações da MedTech Solutions",
        },
      },
    },
  ]

  const nextCase = () => {
    clearInterval(autoPlayRef.current)
    setActiveCase((prev) => (prev < cases.length - 1 ? prev + 1 : 0))
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveCase((prev) => (prev < cases.length - 1 ? prev + 1 : 0))
      }, 5000)
    }
  }

  const prevCase = () => {
    clearInterval(autoPlayRef.current)
    setActiveCase((prev) => (prev > 0 ? prev - 1 : cases.length - 1))
    if (isPlaying) {
      autoPlayRef.current = setInterval(() => {
        setActiveCase((prev) => (prev < cases.length - 1 ? prev + 1 : 0))
      }, 5000)
    }
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    if (isPlaying) {
      clearInterval(autoPlayRef.current)
    }
  }

  const openCaseDetails = (caseIndex) => {
    setSelectedCase(cases[caseIndex])
    setShowCaseDetails(true)
  }

  return (
    <section id="success-stories" className="bg-slate-50 py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <Badge className="bg-bertha-blue/10 text-bertha-blue hover:bg-bertha-blue/20">Cases</Badge>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-bertha-blue sm:text-4xl md:text-5xl">
              Histórias reais de transformação
            </h2>
            <p className="max-w-[800px] text-slate-600 md:text-xl">
              Conheça exemplos de sucesso com o Bertha Integradora Banco B2B
            </p>
          </div>
        </div>

        <div
          className="relative mx-auto max-w-4xl transition-all duration-1000 transform"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeCase * 100}%)` }}
            >
              <div className="flex">
                {cases.map((caseItem, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="grid gap-8 md:grid-cols-2">
                      <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="h-2" style={{ backgroundColor: caseItem.color }}></div>
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <Badge className="w-fit">{caseItem.category}</Badge>
                            <span className="text-sm text-slate-500">
                              {index + 1}/{cases.length}
                            </span>
                          </div>
                          <CardTitle className="text-2xl text-bertha-blue">{caseItem.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-600 mb-4">{caseItem.description}</p>
                          <h4 className="font-medium mb-2 text-bertha-blue">Resultados:</h4>
                          <ul className="space-y-2">
                            {caseItem.results.map((result, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: caseItem.color }}></div>
                                <span className="text-slate-600">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button
                            className="group bg-bertha-blue text-white hover:bg-bertha-blue/90"
                            onClick={() => openCaseDetails(index)}
                          >
                            Ver Case Completo
                            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </CardFooter>
                      </Card>

                      <div className="flex items-center justify-center">
                        <div className="h-64 w-full rounded-lg bg-white shadow-md flex items-center justify-center">
                          <div
                            className="h-24 w-24 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${caseItem.color}20` }}
                          >
                            <div
                              className="h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                              style={{ backgroundColor: caseItem.color }}
                            >
                              {caseItem.title.charAt(0)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-bertha-blue/10 hover:text-bertha-blue"
              onClick={prevCase}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Anterior</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-bertha-blue/10 hover:text-bertha-blue"
              onClick={togglePlayPause}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span className="sr-only">{isPlaying ? "Pausar" : "Reproduzir"}</span>
            </Button>

            {cases.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`h-2 w-2 rounded-full p-0 ${index === activeCase ? "bg-bertha-blue" : "bg-bertha-blue/20"}`}
                onClick={() => setActiveCase(index)}
              >
                <span className="sr-only">Ir para slide {index + 1}</span>
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-bertha-blue/10 hover:text-bertha-blue"
              onClick={nextCase}
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Próximo</span>
            </Button>
          </div>
        </div>

        <Dialog open={showCaseDetails} onOpenChange={setShowCaseDetails}>
          {selectedCase && (
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <div className="flex items-center gap-2">
                  <Badge className="bg-bertha-blue/10 text-bertha-blue">{selectedCase.category}</Badge>
                  <DialogTitle>{selectedCase.fullCase.company}</DialogTitle>
                </div>
                <DialogDescription>{selectedCase.fullCase.industry}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-6">
                <div>
                  <h3 className="text-lg font-medium text-bertha-blue mb-2">Desafio</h3>
                  <p className="text-sm text-slate-600">{selectedCase.fullCase.challenge}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-bertha-blue mb-2">Solução</h3>
                  <p className="text-sm text-slate-600">{selectedCase.fullCase.solution}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-bertha-blue mb-2">Implementação</h3>
                  <p className="text-sm text-slate-600">{selectedCase.fullCase.implementation}</p>
                </div>
                <div className="rounded-lg bg-bertha-blue/5 p-4">
                  <h3 className="text-lg font-medium text-bertha-blue mb-2">Resultados</h3>
                  <ul className="space-y-2">
                    {selectedCase.results.map((result, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: selectedCase.color }}></div>
                        <span className="text-slate-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div
                        className="h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold text-white"
                        style={{ backgroundColor: selectedCase.color }}
                      >
                        {selectedCase.fullCase.testimonial.author.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm italic text-slate-600 mb-2">"{selectedCase.fullCase.testimonial.quote}"</p>
                      <div>
                        <p className="text-sm font-medium">{selectedCase.fullCase.testimonial.author}</p>
                        <p className="text-xs text-slate-500">{selectedCase.fullCase.testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setShowCaseDetails(false)}>
                  Fechar
                </Button>
                <Button
                  onClick={() => {
                    setShowCaseDetails(false)
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Solicitar demonstração
                </Button>
              </DialogFooter>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  )
}
