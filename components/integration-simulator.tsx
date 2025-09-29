"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Calculator, Calendar, DollarSign, Percent, ArrowRight, Check } from "lucide-react"

export function IntegrationSimulator() {
  const [loanAmount, setLoanAmount] = useState(50000)
  const [loanTerm, setLoanTerm] = useState(12)
  const [interestRate, setInterestRate] = useState(1.5)
  const [showResults, setShowResults] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateLoan = () => {
    setIsCalculating(true)
    // Simulate API call
    setTimeout(() => {
      setShowResults(true)
      setIsCalculating(false)
    }, 1500)
  }

  const resetCalculator = () => {
    setShowResults(false)
    setLoanAmount(50000)
    setLoanTerm(12)
    setInterestRate(1.5)
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100
    const payment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -loanTerm))
    return payment
  }

  const monthlyPayment = calculateMonthlyPayment()
  const totalPayment = monthlyPayment * loanTerm
  const totalInterest = totalPayment - loanAmount

  return (
    <Card className="shadow-lg overflow-hidden mt-12">
      <CardHeader className="bg-bertha-blue text-white">
        <CardTitle className="text-xl">Simulador de Integração de Crédito</CardTitle>
        <p className="text-white/80 text-sm">Simule como seria a integração de crédito em sua plataforma</p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="loan-amount" className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1 text-bertha-blue" />
                    Valor do Empréstimo
                  </Label>
                  <span className="text-lg font-medium text-bertha-blue">{formatCurrency(loanAmount)}</span>
                </div>
                <Slider
                  id="loan-amount"
                  min={5000}
                  max={500000}
                  step={5000}
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  disabled={showResults}
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>R$ 5.000</span>
                  <span>R$ 500.000</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="loan-term" className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-bertha-blue" />
                    Prazo (meses)
                  </Label>
                  <span className="text-lg font-medium text-bertha-blue">{loanTerm} meses</span>
                </div>
                <Slider
                  id="loan-term"
                  min={3}
                  max={60}
                  step={1}
                  value={[loanTerm]}
                  onValueChange={(value) => setLoanTerm(value[0])}
                  disabled={showResults}
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>3 meses</span>
                  <span>60 meses</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="interest-rate" className="flex items-center">
                    <Percent className="h-4 w-4 mr-1 text-bertha-blue" />
                    Taxa de Juros (% a.m.)
                  </Label>
                  <span className="text-lg font-medium text-bertha-blue">{interestRate}%</span>
                </div>
                <Slider
                  id="interest-rate"
                  min={0.5}
                  max={5}
                  step={0.1}
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  disabled={showResults}
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>0.5%</span>
                  <span>5%</span>
                </div>
              </div>

              {!showResults ? (
                <Button
                  onClick={calculateLoan}
                  disabled={isCalculating}
                  className="w-full bg-bertha-blue text-white hover:bg-bertha-blue/90"
                >
                  {isCalculating ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Calculando...
                    </>
                  ) : (
                    <>
                      <Calculator className="h-4 w-4 mr-2" />
                      Simular Empréstimo
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  onClick={resetCalculator}
                  variant="outline"
                  className="w-full border-bertha-blue text-bertha-blue hover:bg-bertha-blue/10"
                >
                  Reiniciar Simulação
                </Button>
              )}
            </div>
          </div>

          <div>
            {showResults ? (
              <div className="space-y-6">
                <div className="rounded-lg bg-bertha-blue/5 p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-bertha-blue">Resultado da Simulação</h3>
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                      <Check className="h-3 w-3 mr-1" />
                      Aprovado
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Parcela Mensal:</span>
                      <span className="text-xl font-bold text-bertha-blue">{formatCurrency(monthlyPayment)}</span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Total a Pagar:</span>
                      <span className="text-lg font-medium text-bertha-blue">{formatCurrency(totalPayment)}</span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                      <span className="text-slate-600">Total de Juros:</span>
                      <span className="text-lg font-medium text-bertha-blue">{formatCurrency(totalInterest)}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">CET (Custo Efetivo Total):</span>
                      <span className="text-lg font-medium text-bertha-blue">
                        {(interestRate * 1.1).toFixed(2)}% a.m.
                      </span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="text-lg font-medium text-bertha-blue mb-4">Como integrar em sua plataforma</h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bertha-blue text-white">
                        1
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-slate-600">
                          Adicione o botão "Simular Financiamento" em sua plataforma
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bertha-blue text-white">
                        2
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-slate-600">Conecte-se à nossa API de simulação de crédito</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bertha-blue text-white">
                        3
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-slate-600">
                          Personalize a experiência com sua marca e identidade visual
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-bertha-blue text-white hover:bg-bertha-blue/90 group">
                      Solicitar Integração
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-6 border border-dashed border-slate-300 rounded-lg w-full">
                  <div className="mb-4 mx-auto h-16 w-16 rounded-full bg-bertha-blue/10 flex items-center justify-center">
                    <Calculator className="h-8 w-8 text-bertha-blue" />
                  </div>
                  <h3 className="text-lg font-medium text-bertha-blue mb-2">Simulador de Crédito</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Ajuste os parâmetros ao lado e clique em "Simular Empréstimo" para ver como ficaria a integração em
                    sua plataforma.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-xs text-slate-500">
                    <span className="flex items-center">
                      <Check className="h-3 w-3 mr-1 text-green-500" />
                      Rápido
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="flex items-center">
                      <Check className="h-3 w-3 mr-1 text-green-500" />
                      Seguro
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    <span className="flex items-center">
                      <Check className="h-3 w-3 mr-1 text-green-500" />
                      Personalizado
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
