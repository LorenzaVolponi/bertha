"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  LineChart,
  PieChart,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  Clock,
} from "lucide-react"

export function InteractiveDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [metrics, setMetrics] = useState({
    revenue: 124000,
    users: 1250,
    conversion: 5.8,
    growth: 27.3,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionTop = document.getElementById("interactive-dashboard")?.offsetTop || 0
    if (scrollY > sectionTop - window.innerHeight / 1.5) {
      setIsVisible(true)
    }
  }, [scrollY])

  // Simulate data loading
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setMetrics((prev) => ({
          revenue: prev.revenue + Math.floor(Math.random() * 1000),
          users: prev.users + Math.floor(Math.random() * 10),
          conversion: Number.parseFloat((prev.conversion + (Math.random() * 0.1 - 0.05)).toFixed(1)),
          growth: Number.parseFloat((prev.growth + (Math.random() * 0.2 - 0.1)).toFixed(1)),
        }))
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div id="interactive-dashboard" className="mt-12">
      <Card className="shadow-lg overflow-hidden">
        <CardHeader className="bg-bertha-blue text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Dashboard Interativo</CardTitle>
            <div className="flex items-center space-x-2">
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Atualizado em tempo real</span>
              <Clock className="h-4 w-4" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="revenue">Receita</TabsTrigger>
              <TabsTrigger value="users">Usuários</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-slate-50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-500">Receita Total</p>
                        <h3 className="text-xl font-bold text-bertha-blue">{formatCurrency(metrics.revenue)}</h3>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-bertha-blue/10 flex items-center justify-center">
                        <DollarSign className="h-5 w-5 text-bertha-blue" />
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-xs">
                      <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">+12.5%</span>
                      <span className="text-slate-500 ml-1">vs. último mês</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-500">Usuários</p>
                        <h3 className="text-xl font-bold text-bertha-blue">{metrics.users}</h3>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-bertha-blue/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-bertha-blue" />
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-xs">
                      <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">+8.2%</span>
                      <span className="text-slate-500 ml-1">vs. último mês</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-500">Taxa de Conversão</p>
                        <h3 className="text-xl font-bold text-bertha-blue">{metrics.conversion}%</h3>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-bertha-blue/10 flex items-center justify-center">
                        <ArrowUpRight className="h-5 w-5 text-bertha-blue" />
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-xs">
                      <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                      <span className="text-red-500 font-medium">-1.3%</span>
                      <span className="text-slate-500 ml-1">vs. último mês</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-500">Crescimento</p>
                        <h3 className="text-xl font-bold text-bertha-blue">{metrics.growth}%</h3>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-bertha-blue/10 flex items-center justify-center">
                        <TrendingUp className="h-5 w-5 text-bertha-blue" />
                      </div>
                    </div>
                    <div className="mt-2 flex items-center text-xs">
                      <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                      <span className="text-green-500 font-medium">+3.7%</span>
                      <span className="text-slate-500 ml-1">vs. último mês</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Distribuição de Receita</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center">
                      <div className="relative h-48 w-48">
                        <div className="absolute inset-0 rounded-full border-8 border-bertha-blue/10"></div>
                        <div
                          className="absolute inset-0 rounded-full border-8 border-transparent border-t-bertha-blue"
                          style={{
                            transform: isVisible ? "rotate(170deg)" : "rotate(0deg)",
                            transition: "transform 1.5s ease-out",
                          }}
                        ></div>
                        <div className="absolute inset-8 rounded-full border-8 border-bertha-blue/20"></div>
                        <div className="absolute inset-16 rounded-full border-8 border-bertha-blue/30"></div>
                        <div className="absolute inset-24 rounded-full bg-bertha-blue flex items-center justify-center text-white">
                          <div className="text-center">
                            <div className="text-xl font-bold">49%</div>
                            <div className="text-xs">Pagamentos</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Crescimento Mensal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex flex-col justify-center space-y-4">
                      {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"].map((month, index) => (
                        <div key={month} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{month}</span>
                            <span>{(10 + index * 3).toFixed(1)}%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-slate-100">
                            <div
                              className="h-2 rounded-full bg-bertha-blue transition-all duration-1000 ease-out"
                              style={{
                                width: isVisible ? `${(10 + index * 3) * 2}%` : "0%",
                                transitionDelay: `${index * 100}ms`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="revenue">
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Receita por Segmento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex flex-col justify-center space-y-6">
                      {[
                        { name: "Pagamentos", value: 49, color: "#244E5B" },
                        { name: "Empréstimos", value: 21, color: "#598389" },
                        { name: "Seguros", value: 17, color: "#82A2A6" },
                        { name: "Banking", value: 7, color: "#A7B8BD" },
                        { name: "Wealth Management", value: 6, color: "#D5E2DD" },
                      ].map((segment, index) => (
                        <div key={segment.name} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{segment.name}</span>
                            <span>{segment.value}%</span>
                          </div>
                          <div className="h-2 w-full rounded-full bg-slate-100">
                            <div
                              className="h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: isVisible ? `${segment.value}%` : "0%",
                                backgroundColor: segment.color,
                                transitionDelay: `${index * 100}ms`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="users">
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Usuários por Plataforma</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-6 w-full">
                        {[
                          { name: "ERPs", value: 45, icon: BarChart },
                          { name: "Marketplaces", value: 30, icon: LineChart },
                          { name: "Plataformas Verticais", value: 15, icon: PieChart },
                          { name: "Outros", value: 10, icon: PieChart },
                        ].map((platform) => (
                          <div key={platform.name} className="bg-slate-50 p-4 rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="h-10 w-10 rounded-full bg-bertha-blue/10 flex items-center justify-center">
                                <platform.icon className="h-5 w-5 text-bertha-blue" />
                              </div>
                              <div>
                                <p className="text-sm text-slate-500">{platform.name}</p>
                                <h3 className="text-xl font-bold text-bertha-blue">{platform.value}%</h3>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 flex justify-end">
            <Button variant="outline" className="text-bertha-blue border-bertha-blue hover:bg-bertha-blue/10">
              Exportar Dados
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
