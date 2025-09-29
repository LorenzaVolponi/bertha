"use client"

import { useState } from "react"
import Link from "next/link"
import { Building2, CreditCard, Database, Layers, Lock, TrendingUp, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-[#244E5B]">Bertha</span>
          <span className="text-xl font-medium text-[#598389]">Integradora</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          <X className="h-5 w-5" />
          <span className="sr-only">Fechar menu</span>
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="flex flex-col space-y-2 px-4">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="solucoes" className="border-b-0">
              <AccordionTrigger className="py-2 text-lg font-medium text-[#244E5B]">Soluções</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2 pl-4">
                  <Link
                    href="#"
                    className="flex items-center py-2 text-[#244E5B] transition-colors hover:text-[#598389]"
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>CreditOps Plug-in</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center py-2 text-[#244E5B] transition-colors hover:text-[#598389]"
                  >
                    <Database className="mr-2 h-4 w-4" />
                    <span>Orquestrador APIs Hub</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center py-2 text-[#244E5B] transition-colors hover:text-[#598389]"
                  >
                    <Lock className="mr-2 h-4 w-4" />
                    <span>Compliance Engine</span>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="plataforma" className="border-b-0">
              <AccordionTrigger className="py-2 text-lg font-medium text-[#244E5B]">Plataforma</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2 pl-4">
                  <Link
                    href="#"
                    className="flex items-center py-2 text-[#244E5B] transition-colors hover:text-[#598389]"
                  >
                    <Building2 className="mr-2 h-4 w-4" />
                    <span>Para PMEs</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center py-2 text-[#244E5B] transition-colors hover:text-[#598389]"
                  >
                    <Layers className="mr-2 h-4 w-4" />
                    <span>Para Plataformas</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center py-2 text-[#244E5B] transition-colors hover:text-[#598389]"
                  >
                    <TrendingUp className="mr-2 h-4 w-4" />
                    <span>Para Funders</span>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Link
            href="#mercado"
            className="py-2 text-lg font-medium text-[#244E5B] transition-colors hover:text-[#598389]"
          >
            Mercado
          </Link>
          <Link
            href="#solucao"
            className="py-2 text-lg font-medium text-[#244E5B] transition-colors hover:text-[#598389]"
          >
            Solução
          </Link>
          <Link
            href="#cases"
            className="py-2 text-lg font-medium text-[#244E5B] transition-colors hover:text-[#598389]"
          >
            Cases
          </Link>
        </nav>
      </div>
      <div className="border-t px-4 py-4">
        <div className="flex items-center justify-between">
          <ThemeToggle />
          <Button className="bg-[#244E5B] hover:bg-[#50717C]">Fale Conosco</Button>
        </div>
      </div>
    </div>
  )
}
