"use client"

import { useState, useEffect } from "react"
import { MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show the CTA after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {isOpen ? (
        <Card className="w-80 shadow-lg">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <CardTitle className="text-lg text-bertha-blue">Fale com um especialista</CardTitle>
            <Button variant="ghost" size="icon" onClick={toggleOpen} className="h-8 w-8">
              <X className="h-4 w-4" />
              <span className="sr-only">Fechar</span>
            </Button>
          </CardHeader>
          <CardContent className="text-sm text-slate-600">
            <p>
              Descubra como o Bertha Integradora pode transformar sua plataforma B2B com soluções financeiras
              integradas.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button className="bg-bertha-blue text-white hover:bg-bertha-blue/90" size="sm">
              Agendar Demo
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Button
          onClick={toggleOpen}
          className="h-14 w-14 rounded-full bg-bertha-blue text-white shadow-lg hover:bg-bertha-blue/90"
          aria-label="Abrir chat"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
