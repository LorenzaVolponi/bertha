"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Search, Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    // Mostrar notificação após 10 segundos
    const timer = setTimeout(() => {
      setShowNotification(true)
    }, 10000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const solutions = [
    {
      title: "CreditOps Plug-in",
      description: "Automação de BackOffice de Crédito",
      href: "#solution",
    },
    {
      title: "Orquestrador APIs Hub",
      description: "Conectividade via APIs REST com observabilidade",
      href: "#solution",
    },
    {
      title: "Compliance Engine",
      description: "Motor de conformidade regulatória",
      href: "#solution",
    },
    {
      title: "Estrutura de Fundos",
      description: "Gestão completa de fundos de investimento",
      href: "#solution",
    },
  ]

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 md:h-20 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-32 md:w-40">
              <Image
                src={scrolled ? "/images/bertha-logo.png" : "/images/bertha-logo-white.png"}
                alt="Bertha Integradora"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <div className="relative group">
              <button
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                  scrolled ? "text-foreground hover:text-bertha-blue" : "text-white hover:text-white/80",
                )}
              >
                Soluções
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full z-50 hidden w-64 rounded-md border bg-white p-2 shadow-lg group-hover:block">
                <div className="grid gap-1">
                  {solutions.map((solution, index) => (
                    <Link
                      key={index}
                      href={solution.href}
                      className="block rounded-md p-2 text-sm hover:bg-bertha-blue/10 hover:text-bertha-blue"
                    >
                      <div className="font-medium">{solution.title}</div>
                      <div className="text-xs text-muted-foreground">{solution.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="#market-context"
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors",
                scrolled ? "text-foreground hover:text-bertha-blue" : "text-white hover:text-white/80",
              )}
            >
              Mercado
            </Link>
            <Link
              href="#solution"
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors",
                scrolled ? "text-foreground hover:text-bertha-blue" : "text-white hover:text-white/80",
              )}
            >
              Solução
            </Link>
            <Link
              href="#success-stories"
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors",
                scrolled ? "text-foreground hover:text-bertha-blue" : "text-white hover:text-white/80",
              )}
            >
              Cases
            </Link>
            <Link
              href="#contact"
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors",
                scrolled ? "text-foreground hover:text-bertha-blue" : "text-white hover:text-white/80",
              )}
            >
              Contato
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-full hidden md:flex relative",
                  scrolled ? "text-foreground hover:bg-accent" : "text-white hover:bg-white/10",
                )}
              >
                <Bell className="h-5 w-5" />
                {showNotification && (
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                )}
                <span className="sr-only">Notificações</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <div className="flex items-center justify-between p-2 border-b">
                <span className="font-medium">Notificações</span>
                <Badge variant="outline" className="text-xs">
                  Novo
                </Badge>
              </div>
              <div className="py-2 px-4 border-b hover:bg-muted/50 cursor-pointer">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-sm">Webinar Embedded Finance</span>
                  <span className="text-xs text-muted-foreground">Hoje</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Participe do nosso webinar sobre as tendências de Embedded Finance para 2025.
                </p>
              </div>
              <div className="py-2 px-4 hover:bg-muted/50 cursor-pointer">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium text-sm">Nova documentação disponível</span>
                  <span className="text-xs text-muted-foreground">2 dias atrás</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Atualizamos nossa documentação de APIs com novos endpoints.
                </p>
              </div>
              <div className="p-2 text-center border-t">
                <Link href="#" className="text-xs text-bertha-blue hover:underline">
                  Ver todas as notificações
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "rounded-full hidden md:flex",
              scrolled ? "text-foreground hover:bg-accent" : "text-white hover:bg-white/10",
            )}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Pesquisar</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "hidden md:flex gap-2",
                  scrolled
                    ? "border-bertha-blue text-bertha-blue hover:bg-bertha-blue/10"
                    : "border-white text-white hover:bg-white/10",
                )}
              >
                <User className="h-4 w-4" />
                <span>Entrar</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="p-2 border-b">
                <form className="grid gap-2">
                  <div className="grid gap-1">
                    <label htmlFor="email" className="text-xs font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="h-8 rounded-md border border-input px-3 py-1 text-sm"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="grid gap-1">
                    <label htmlFor="password" className="text-xs font-medium">
                      Senha
                    </label>
                    <input
                      id="password"
                      type="password"
                      className="h-8 rounded-md border border-input px-3 py-1 text-sm"
                      placeholder="••••••••"
                    />
                  </div>
                  <Button size="sm" className="bg-bertha-blue text-white hover:bg-bertha-blue/90">
                    Entrar
                  </Button>
                </form>
              </div>
              <div className="p-2">
                <p className="text-xs text-center text-muted-foreground mb-2">Ou continue com</p>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    Google
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    Microsoft
                  </Button>
                </div>
              </div>
              <div className="p-2 text-center border-t">
                <Link href="#" className="text-xs text-bertha-blue hover:underline">
                  Esqueceu sua senha?
                </Link>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            className={cn(
              "hidden md:flex",
              scrolled
                ? "bg-bertha-blue text-white hover:bg-bertha-blue/90"
                : "bg-white text-bertha-blue hover:bg-white/90",
            )}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Fale Conosco
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "md:hidden",
                  scrolled ? "text-foreground hover:bg-accent" : "text-white hover:bg-white/10",
                )}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                    <div className="relative h-8 w-32">
                      <Image src="/images/bertha-logo.png" alt="Bertha Integradora" fill className="object-contain" />
                    </div>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <div
                      className="flex items-center justify-between py-2 text-lg font-medium cursor-pointer"
                      onClick={() => {
                        const solutionsEl = document.getElementById("mobile-solutions")
                        if (solutionsEl) {
                          solutionsEl.classList.toggle("hidden")
                        }
                      }}
                    >
                      <span>Soluções</span>
                      <ChevronDown className="h-4 w-4" />
                    </div>
                    <div id="mobile-solutions" className="hidden pl-4 space-y-2 mt-2">
                      {solutions.map((solution, index) => (
                        <Link
                          key={index}
                          href={solution.href}
                          className="block py-1 text-base transition-colors hover:text-bertha-blue"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {solution.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="#market-context"
                    className="py-2 text-lg font-medium transition-colors hover:text-bertha-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Mercado
                  </Link>
                  <Link
                    href="#solution"
                    className="py-2 text-lg font-medium transition-colors hover:text-bertha-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Solução
                  </Link>
                  <Link
                    href="#success-stories"
                    className="py-2 text-lg font-medium transition-colors hover:text-bertha-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Cases
                  </Link>
                  <Link
                    href="#contact"
                    className="py-2 text-lg font-medium transition-colors hover:text-bertha-blue"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contato
                  </Link>
                </nav>
                <div className="mt-4 flex flex-col gap-2">
                  <Button variant="outline" className="w-full border-bertha-blue text-bertha-blue">
                    Entrar
                  </Button>
                  <Button
                    className="w-full bg-bertha-blue text-white"
                    onClick={() => {
                      setIsMenuOpen(false)
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Fale Conosco
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
