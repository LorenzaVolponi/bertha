"use client"

import { useState, useEffect, useRef } from "react"
import { BarChart3, LineChart, PieChart, Download, Share2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function MarketContextSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeTab, setActiveTab] = useState("overview")
  const [showTooltip, setShowTooltip] = useState(false)
  const chartRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionTop = document.getElementById("market-context")?.offsetTop || 0
    if (scrollY > sectionTop - window.innerHeight / 1.5) {
      setIsVisible(true)

      // Show tooltip after 2 seconds when section becomes visible
      const timer = setTimeout(() => {
        setShowTooltip(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [scrollY])

  // Data for the market comparison
  const marketData = {
    overview: {
      b2c: { online: 17.9, offline: 82.1 },
      b2b: { online: 5.5, offline: 94.5 },
      marketSize: "$120T",
      comparison: "5x maior que o mercado B2C",
    },
    regional: {
      northAmerica: { online: 8.2, offline: 91.8 },
      europe: { online: 6.7, offline: 93.3 },
      asiaPacific: { online: 4.3, offline: 95.7 },
      latam: { online: 3.1, offline: 96.9 },
    },
    forecast: {
      current: "$3.4T",
      year2025: "$5.8T",
      year2030: "$7.2T",
      cagr: "16.2%",
    },
  }

  // Function to download market data as CSV
  const downloadMarketData = () => {
    const csvContent = `Segment,Online (%),Offline (%)
B2C,${marketData.overview.b2c.online},${marketData.overview.b2c.offline}
B2B,${marketData.overview.b2b.online},${marketData.overview.b2b.offline}
North America,${marketData.regional.northAmerica.online},${marketData.regional.northAmerica.offline}
Europe,${marketData.regional.europe.online},${marketData.regional.europe.offline}
Asia Pacific,${marketData.regional.asiaPacific.online},${marketData.regional.asiaPacific.offline}
Latin America,${marketData.regional.latam.online},${marketData.regional.latam.offline}`

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", "bertha_market_data.csv")
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Function to share market data
  const shareMarketData = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Bertha Integradora - Dados de Mercado B2B",
          text: "Confira os dados de mercado B2B da Bertha Integradora",
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing", error))
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("Link copiado para a área de transferência!"))
        .catch((error) => console.log("Error copying to clipboard", error))
    }
  }

  return (
    <section id="market-context" className="bg-white py-20 md:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <Badge className="bg-bertha-blue/10 text-bertha-blue hover:bg-bertha-blue/20">Contexto de Mercado</Badge>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-bertha-blue sm:text-4xl md:text-5xl">
              O potencial do mercado B2B online
            </h2>
            <p className="max-w-[800px] text-slate-600 md:text-xl">
              Hoje, apenas 5.5% das compras B2B são feitas online, mas o mercado movimenta USD 120 trilhões, quase 5x
              mais que o B2C.
            </p>
          </div>
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="regional">Regional</TabsTrigger>
              <TabsTrigger value="forecast">Projeções</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="overview">
            <div
              className="mx-auto max-w-4xl transition-all duration-1000 transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
              }}
            >
              <Card className="overflow-hidden shadow-lg">
                <CardHeader className="bg-bertha-blue text-white flex flex-row justify-between items-center">
                  <div>
                    <CardTitle className="text-xl">Comparação de Mercados B2B vs B2C</CardTitle>
                    <p className="text-white/80 text-sm">
                      Análise comparativa entre os mercados B2B e B2C online e offline
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <TooltipProvider>
                      <Tooltip open={showTooltip} onOpenChange={setShowTooltip}>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-white hover:bg-white/20"
                            onClick={downloadMarketData}
                          >
                            <Download className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                          <p className="text-xs">Baixar dados em CSV</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/20"
                      onClick={shareMarketData}
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="w-full overflow-auto">
                    <div className="min-w-[600px]">
                      <div className="grid grid-cols-5 gap-4 rounded-lg bg-slate-100 p-4 font-medium">
                        <div className="col-span-1">Segmento</div>
                        <div className="col-span-2">Online (%)</div>
                        <div className="col-span-2">Offline (%)</div>
                      </div>
                      <div className="mt-2 grid grid-cols-5 gap-4 rounded-lg bg-slate-50 p-4">
                        <div className="col-span-1 font-medium">B2C</div>
                        <div className="col-span-2">
                          <div className="flex items-center">
                            <div className="h-2 w-full rounded-full bg-slate-200">
                              <div
                                className="h-2 rounded-full bg-bertha-blue transition-all duration-1000 ease-out"
                                style={{ width: isVisible ? `${marketData.overview.b2c.online}%` : "0%" }}
                              ></div>
                            </div>
                            <span className="ml-2 text-sm font-medium">{marketData.overview.b2c.online}%</span>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div className="flex items-center">
                            <div className="h-2 w-full rounded-full bg-slate-200">
                              <div
                                className="h-2 rounded-full bg-bertha-blue/30 transition-all duration-1000 ease-out"
                                style={{ width: isVisible ? `${marketData.overview.b2c.offline}%` : "0%" }}
                              ></div>
                            </div>
                            <span className="ml-2 text-sm font-medium">{marketData.overview.b2c.offline}%</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 grid grid-cols-5 gap-4 rounded-lg bg-slate-50 p-4">
                        <div className="col-span-1 font-medium">B2B</div>
                        <div className="col-span-2">
                          <div className="flex items-center">
                            <div className="h-2 w-full rounded-full bg-slate-200">
                              <div
                                className="h-2 rounded-full bg-bertha-blue transition-all duration-1000 ease-out"
                                style={{ width: isVisible ? `${marketData.overview.b2b.online}%` : "0%" }}
                              ></div>
                            </div>
                            <span className="ml-2 text-sm font-medium">{marketData.overview.b2b.online}%</span>
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div className="flex items-center">
                            <div className="h-2 w-full rounded-full bg-slate-200">
                              <div
                                className="h-2 rounded-full bg-bertha-blue/30 transition-all duration-1000 ease-out"
                                style={{ width: isVisible ? `${marketData.overview.b2b.offline}%` : "0%" }}
                              ></div>
                            </div>
                            <span className="ml-2 text-sm font-medium">{marketData.overview.b2b.offline}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-bertha-blue">Tamanho do Mercado B2B</h3>
                        <p className="text-sm text-slate-500">Global, em trilhões de dólares</p>
                      </div>
                      <div className="text-3xl font-bold text-bertha-blue">{marketData.overview.marketSize}</div>
                    </div>
                    <div className="mt-4 flex items-center">
                      <div className="relative h-2 w-full rounded-full bg-slate-200">
                        <div
                          className="absolute top-0 left-0 h-2 rounded-full bg-bertha-blue transition-all duration-1000 ease-out"
                          style={{ width: isVisible ? "80%" : "0%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-between text-sm text-slate-500">
                      <span>{marketData.overview.comparison}</span>
                      <span>Potencial enorme de digitalização</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-slate-50 p-4 text-xs text-slate-500">
                  <p>Fonte: McKinsey & Company, 2023 | Atualizado em: Maio 2025</p>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="regional">
            <div
              className="mx-auto max-w-4xl transition-all duration-1000 transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
              }}
            >
              <Card className="overflow-hidden shadow-lg">
                <CardHeader className="bg-bertha-blue text-white">
                  <CardTitle className="text-xl">Análise Regional de Mercados B2B</CardTitle>
                  <p className="text-white/80 text-sm">Comparação da penetração online em diferentes regiões</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="w-full overflow-auto">
                    <div className="min-w-[600px]">
                      <div className="grid grid-cols-5 gap-4 rounded-lg bg-slate-100 p-4 font-medium">
                        <div className="col-span-1">Região</div>
                        <div className="col-span-2">Online (%)</div>
                        <div className="col-span-2">Offline (%)</div>
                      </div>

                      {Object.entries(marketData.regional).map(([region, data], index) => {
                        const regionNames = {
                          northAmerica: "América do Norte",
                          europe: "Europa",
                          asiaPacific: "Ásia-Pacífico",
                          latam: "América Latina",
                        }

                        return (
                          <div key={region} className="mt-2 grid grid-cols-5 gap-4 rounded-lg bg-slate-50 p-4">
                            <div className="col-span-1 font-medium">{regionNames[region]}</div>
                            <div className="col-span-2">
                              <div className="flex items-center">
                                <div className="h-2 w-full rounded-full bg-slate-200">
                                  <div
                                    className="h-2 rounded-full bg-bertha-blue transition-all duration-1000 ease-out"
                                    style={{
                                      width: isVisible ? `${data.online}%` : "0%",
                                      transitionDelay: `${index * 200}ms`,
                                    }}
                                  ></div>
                                </div>
                                <span className="ml-2 text-sm font-medium">{data.online}%</span>
                              </div>
                            </div>
                            <div className="col-span-2">
                              <div className="flex items-center">
                                <div className="h-2 w-full rounded-full bg-slate-200">
                                  <div
                                    className="h-2 rounded-full bg-bertha-blue/30 transition-all duration-1000 ease-out"
                                    style={{
                                      width: isVisible ? `${data.offline}%` : "0%",
                                      transitionDelay: `${index * 200}ms`,
                                    }}
                                  ></div>
                                </div>
                                <span className="ml-2 text-sm font-medium">{data.offline}%</span>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-lg border p-4">
                      <h3 className="text-lg font-medium text-bertha-blue mb-2">Oportunidades Regionais</h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start">
                          <div className="mr-2 h-2 w-2 rounded-full bg-bertha-blue mt-1.5"></div>
                          <span>América Latina: Maior potencial de crescimento com menor saturação</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 h-2 w-2 rounded-full bg-bertha-blue mt-1.5"></div>
                          <span>América do Norte: Mercado mais maduro com maior adoção de tecnologia</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 h-2 w-2 rounded-full bg-bertha-blue mt-1.5"></div>
                          <span>Ásia-Pacífico: Crescimento acelerado impulsionado pela China e Índia</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="text-lg font-medium text-bertha-blue mb-2">Fatores de Crescimento</h3>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start">
                          <div className="mr-2 h-2 w-2 rounded-full bg-bertha-blue mt-1.5"></div>
                          <span>Infraestrutura digital e conectividade</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 h-2 w-2 rounded-full bg-bertha-blue mt-1.5"></div>
                          <span>Regulamentações favoráveis ao Embedded Finance</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 h-2 w-2 rounded-full bg-bertha-blue mt-1.5"></div>
                          <span>Adoção de tecnologias de pagamento digital</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 h-2 w-2 rounded-full bg-bertha-blue mt-1.5"></div>
                          <span>Maturidade do ecossistema de fintechs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-slate-50 p-4 text-xs text-slate-500">
                  <p>Fonte: Relatório Global de Embedded Finance, 2024 | Atualizado em: Maio 2025</p>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="forecast">
            <div
              className="mx-auto max-w-4xl transition-all duration-1000 transform"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(40px)",
              }}
            >
              <Card className="overflow-hidden shadow-lg">
                <CardHeader className="bg-bertha-blue text-white">
                  <CardTitle className="text-xl">Projeções de Crescimento do Embedded Finance</CardTitle>
                  <p className="text-white/80 text-sm">Análise de tendências e projeções até 2030</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div ref={chartRef} className="w-full h-64 mb-8 relative">
                    <div className="absolute inset-0 flex items-end">
                      <div className="w-1/3 h-[30%] bg-bertha-blue/20 relative">
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-bertha-blue transition-all duration-1000 ease-out"
                          style={{ height: isVisible ? "100%" : "0%" }}
                        ></div>
                        <div className="absolute -top-6 left-0 right-0 text-center text-sm font-medium">
                          {marketData.forecast.current}
                        </div>
                        <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-slate-500">
                          Atual
                        </div>
                      </div>
                      <div className="w-1/3 h-[50%] bg-bertha-blue/20 relative">
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-bertha-blue transition-all duration-1000 ease-out"
                          style={{ height: isVisible ? "100%" : "0%", transitionDelay: "300ms" }}
                        ></div>
                        <div className="absolute -top-6 left-0 right-0 text-center text-sm font-medium">
                          {marketData.forecast.year2025}
                        </div>
                        <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-slate-500">2025</div>
                      </div>
                      <div className="w-1/3 h-[80%] bg-bertha-blue/20 relative">
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-bertha-blue transition-all duration-1000 ease-out"
                          style={{ height: isVisible ? "100%" : "0%", transitionDelay: "600ms" }}
                        ></div>
                        <div className="absolute -top-6 left-0 right-0 text-center text-sm font-medium">
                          {marketData.forecast.year2030}
                        </div>
                        <div className="absolute -bottom-6 left-0 right-0 text-center text-xs text-slate-500">2030</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="rounded-lg border p-4 text-center">
                      <h3 className="text-sm font-medium text-slate-500">CAGR 2023-2030</h3>
                      <div className="text-2xl font-bold text-bertha-blue mt-2">{marketData.forecast.cagr}</div>
                      <p className="text-xs text-slate-500 mt-1">Taxa Composta de Crescimento Anual</p>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="text-sm font-medium text-bertha-blue mb-2">Principais Impulsionadores</h3>
                      <ul className="space-y-1 text-xs text-slate-600">
                        <li className="flex items-start">
                          <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-bertha-blue mt-1"></div>
                          <span>Digitalização acelerada de PMEs</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-bertha-blue mt-1"></div>
                          <span>Adoção de APIs abertas</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-bertha-blue mt-1"></div>
                          <span>Regulamentações favoráveis</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="text-sm font-medium text-bertha-blue mb-2">Segmentos em Crescimento</h3>
                      <ul className="space-y-1 text-xs text-slate-600">
                        <li className="flex items-start">
                          <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-bertha-blue mt-1"></div>
                          <span>BNPL B2B (+45% ao ano)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-bertha-blue mt-1"></div>
                          <span>Seguros integrados (+38% ao ano)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-bertha-blue mt-1"></div>
                          <span>Pagamentos transfronteiriços (+32% ao ano)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-bertha-blue/5 rounded-lg">
                    <h3 className="text-lg font-medium text-bertha-blue mb-2">Oportunidade para Plataformas B2B</h3>
                    <p className="text-sm text-slate-600">
                      As plataformas B2B que integrarem serviços financeiros podem aumentar seu GMV em até 70% e
                      melhorar a retenção de clientes em 45%, criando novas fontes de receita recorrente e aumentando o
                      lifetime value de seus clientes.
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="bg-slate-50 p-4 flex justify-between items-center">
                  <p className="text-xs text-slate-500">Fonte: Análise Bertha Capital, 2025</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Solicitar relatório completo
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div
          className="mt-16 grid gap-8 md:grid-cols-3 transition-all duration-1000 transform"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transitionDelay: "0.3s",
          }}
        >
          <Card className="shadow-md hover:shadow-lg transition-all duration-300 transform-gpu hover:-translate-y-1">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                <LineChart className="h-6 w-6" />
              </div>
              <CardTitle className="mt-4 text-bertha-blue">USD 124 bilhões</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Em receitas bancárias que serão capturadas pelo Embedded Finance até 2025
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button
                variant="ghost"
                className="p-0 h-auto text-bertha-blue hover:text-bertha-blue hover:bg-transparent text-sm"
                onClick={() => setActiveTab("forecast")}
              >
                Ver projeções detalhadas →
              </Button>
            </CardFooter>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-all duration-300 transform-gpu hover:-translate-y-1">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                <BarChart3 className="h-6 w-6" />
              </div>
              <CardTitle className="mt-4 text-bertha-blue">5.5% vs 17.9%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Mercado B2B online (5.5%) comparado ao B2C online (17.9%), mostrando enorme potencial de crescimento
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button
                variant="ghost"
                className="p-0 h-auto text-bertha-blue hover:text-bertha-blue hover:bg-transparent text-sm"
                onClick={() => setActiveTab("overview")}
              >
                Ver comparação completa →
              </Button>
            </CardFooter>
          </Card>
          <Card className="shadow-md hover:shadow-lg transition-all duration-300 transform-gpu hover:-translate-y-1">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
                <PieChart className="h-6 w-6" />
              </div>
              <CardTitle className="mt-4 text-bertha-blue">USD 7.2 trilhões</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Projeção do mercado global de Embedded Finance até 2030, com crescimento expressivo
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <Button
                variant="ghost"
                className="p-0 h-auto text-bertha-blue hover:text-bertha-blue hover:bg-transparent text-sm"
                onClick={() => setActiveTab("regional")}
              >
                Ver análise regional →
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
