"use client"

import { useState, useEffect } from "react"
import { Database, Zap, BarChart, ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InteractiveDashboard } from "@/components/interactive-dashboard"
import { ApiExplorer } from "@/components/api-explorer"
import { IntegrationSimulator } from "@/components/integration-simulator"

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionTop = document.getElementById("features")?.offsetTop || 0
    if (scrollY > sectionTop - window.innerHeight / 1.5) {
      setIsVisible(true)
    }
  }, [scrollY])

  return (
    <section id="features" className="bg-slate-50 py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <Badge className="bg-bertha-blue/10 text-bertha-blue hover:bg-bertha-blue/20">Funcionalidades</Badge>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-bertha-blue sm:text-4xl md:text-5xl">
              Recursos avançados para sua plataforma
            </h2>
            <p className="max-w-[800px] text-slate-600 md:text-xl">
              Explore as funcionalidades que tornam o Bertha Integradora Banco B2B a solução ideal para seu negócio
            </p>
          </div>
        </div>

        <div
          className="grid gap-8 md:grid-cols-3 transition-all duration-1000 transform"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <Card className="shadow-md hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-1">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                <Database className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl text-bertha-blue">APIs Robustas</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">
              <p>
                Integração perfeita com sua plataforma através de APIs RESTful bem documentadas e fáceis de implementar.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                  <span>Documentação interativa</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                  <span>SDKs para diversas linguagens</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                  <span>Ambiente de sandbox para testes</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant="ghost"
                className="group p-0 text-bertha-blue hover:text-bertha-blue hover:bg-transparent"
                onClick={() => setActiveTab("api")}
              >
                Explorar APIs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="shadow-md hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-1">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                <BarChart className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl text-bertha-blue">Dashboard Analítico</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">
              <p>
                Acompanhe o desempenho de suas operações financeiras com dashboards interativos e relatórios detalhados.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                  <span>Métricas em tempo real</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                  <span>Visualizações personalizáveis</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                  <span>Exportação de relatórios</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant="ghost"
                className="group p-0 text-bertha-blue hover:text-bertha-blue hover:bg-transparent"
                onClick={() => setActiveTab("dashboard")}
              >
                Ver Dashboard
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>

          <Card className="shadow-md hover:shadow-xl transition-all duration-300 transform-gpu hover:-translate-y-1">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl text-bertha-blue">Simulador de Crédito</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">
              <p>Ofereça simulações de crédito personalizadas para seus clientes diretamente em sua plataforma.</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                  <span>Cálculos em tempo real</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                  <span>Personalização de parâmetros</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 h-1.5 w-1.5 rounded-full bg-bertha-blue"></div>
                  <span>White-label com sua marca</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                variant="ghost"
                className="group p-0 text-bertha-blue hover:text-bertha-blue hover:bg-transparent"
                onClick={() => setActiveTab("simulator")}
              >
                Testar Simulador
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16">
          <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="api">API Explorer</TabsTrigger>
              <TabsTrigger value="simulator">Simulador</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard">
              <InteractiveDashboard />
            </TabsContent>

            <TabsContent value="api">
              <ApiExplorer />
            </TabsContent>

            <TabsContent value="simulator">
              <IntegrationSimulator />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
