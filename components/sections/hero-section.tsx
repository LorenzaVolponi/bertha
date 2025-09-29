"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, CreditCard, Database, Lock, Shield, Wallet, TrendingUp, BarChart3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [typedText, setTypedText] = useState("")
  const fullText = "Transforme sua plataforma B2B com soluções financeiras integradas"
  const typingSpeed = 50
  const typingRef = useRef(null)

  // Typing effect
  useEffect(() => {
    setIsVisible(true)

    let i = 0
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, typingSpeed)

    return () => clearInterval(typingInterval)
  }, [])

  // Tab rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Data for the tabs
  const tabData = [
    {
      title: "Pagamentos",
      icon: CreditCard,
      stats: { current: "$49B", growth: "+32%", timeframe: "até 2025" },
      description: "Integre pagamentos diretamente em sua plataforma",
    },
    {
      title: "Empréstimos",
      icon: Wallet,
      stats: { current: "$21B", growth: "+45%", timeframe: "até 2025" },
      description: "Ofereça crédito no momento da compra",
    },
    {
      title: "Seguros",
      icon: Shield,
      stats: { current: "$17B", growth: "+28%", timeframe: "até 2025" },
      description: "Proteção integrada para seus clientes",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-bertha-blue py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-bertha-blue-light/20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] -translate-x-1/3 translate-y-1/4 rounded-full bg-bertha-blue-light/20 blur-3xl"></div>

      <div className="container relative z-10">
        <div
          className={`grid gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Embedded Finance B2B</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block text-bertha-gray-light">Transforme</span>
                <span ref={typingRef} className="block min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[4.5rem]">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              <p className="mt-6 max-w-[600px] text-lg text-white/80 md:text-xl">
                Ofereça crédito, pagamentos e seguros diretamente na jornada do seu cliente.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group bg-white text-bertha-blue hover:bg-white/90 transition-all duration-300"
                onClick={() => document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })}
              >
                Conheça nossas soluções
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Fale com um especialista
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center cursor-help">
                      <Shield className="mr-2 h-5 w-5 text-bertha-gray-light" />
                      <span>Segurança de Dados</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-[200px] text-xs">
                      Proteção de dados em conformidade com LGPD e padrões internacionais
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center cursor-help">
                      <Database className="mr-2 h-5 w-5 text-bertha-gray-light" />
                      <span>Integração Rápida</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-[200px] text-xs">Implementação em menos de 2 semanas com APIs RESTful</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center cursor-help">
                      <Lock className="mr-2 h-5 w-5 text-bertha-gray-light" />
                      <span>Conformidade Regulatória</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-[200px] text-xs">Atendimento a todas as regulamentações do Banco Central</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <div className="flex items-center justify-center" style={{ perspective: "1000px" }}>
            <div className="relative h-[400px] w-full max-w-[500px] overflow-hidden rounded-xl bg-white/10 p-6 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl transform hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-bertha-blue-light/10 to-bertha-blue-light/20 rounded-xl"></div>
              <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6">
                <div className="grid grid-cols-3 gap-4 w-full">
                  {tabData.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div
                        key={index}
                        className={`flex flex-col items-center space-y-2 rounded-lg backdrop-blur-sm p-4 shadow-sm transition-all duration-300 hover:scale-105 cursor-pointer ${activeTab === index ? "bg-white/20 ring-2 ring-white/40" : "bg-white/10 hover:bg-white/15"}`}
                        onClick={() => setActiveTab(index)}
                      >
                        <Icon className="h-8 w-8 text-white" />
                        <span className="text-sm font-medium text-white">{item.title}</span>
                      </div>
                    )
                  })}
                </div>

                <div className="w-full rounded-lg bg-white/10 backdrop-blur-sm p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium text-white">{tabData[activeTab].title}</h3>
                      <p className="text-xs text-white/70">{tabData[activeTab].description}</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                      {(() => {
                        const Icon = tabData[activeTab].icon
                        return <Icon className="h-5 w-5 text-white" />
                      })()}
                    </div>
                  </div>
                  <div className="mt-4 h-2 w-full rounded-full bg-white/20">
                    <div
                      className="h-2 rounded-full bg-bertha-gray-light transition-all duration-1000 ease-out"
                      style={{ width: isVisible ? "70%" : "0%" }}
                    ></div>
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-white/70">
                    <span>Receita atual: {tabData[activeTab].stats.current}</span>
                    <span>Crescimento: {tabData[activeTab].stats.growth}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="rounded-lg bg-white/10 backdrop-blur-sm p-4 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-5 w-5 text-white" />
                      <span className="text-sm font-medium text-white">B2B</span>
                    </div>
                    <div className="mt-2 text-2xl font-bold text-white">$120T</div>
                    <p className="text-xs text-white/70">Mercado Global</p>
                  </div>
                  <div className="rounded-lg bg-white/10 backdrop-blur-sm p-4 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5 text-white" />
                      <span className="text-sm font-medium text-white">Crescimento</span>
                    </div>
                    <div className="mt-2 text-2xl font-bold text-bertha-gray-light">6-11x</div>
                    <p className="text-xs text-white/70">Próximos 7 anos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
