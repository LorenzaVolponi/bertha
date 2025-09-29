import Link from "next/link"
import { Menu, Search, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-md border-b shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2 relative z-10">
            <div className="relative h-10 w-40 overflow-hidden">
              <div className="h-full w-full bg-primary/20 flex items-center justify-center rounded">
                <span className="text-xl font-bold text-primary">Bertha</span>
              </div>
            </div>
            <span className="text-xl font-medium text-[#598389] hidden md:inline-block">Integradora</span>
          </Link>
          <nav className="hidden gap-8 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="group flex items-center text-base font-medium text-foreground/80 transition-colors hover:text-primary">
                Soluções
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-0 bg-background/95 backdrop-blur-md border border-border/50">
                <div className="p-2">
                  <DropdownMenuItem className="flex cursor-pointer items-center gap-2 rounded-md p-2 text-sm hover:bg-primary/10">
                    <div>
                      <p className="font-medium">CreditOps Plug-in</p>
                      <p className="text-xs text-foreground/60">Automação de BackOffice</p>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex cursor-pointer items-center gap-2 rounded-md p-2 text-sm hover:bg-primary/10">
                    <div>
                      <p className="font-medium">Orquestrador APIs Hub</p>
                      <p className="text-xs text-foreground/60">Conectividade via APIs</p>
                    </div>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="#mercado"
              className="flex items-center text-base font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Mercado
            </Link>
            <Link
              href="#solucao"
              className="flex items-center text-base font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Solução
            </Link>
            <Link
              href="#cases"
              className="flex items-center text-base font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              Cases
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
              <span className="sr-only">Pesquisar</span>
            </Button>
            <ThemeToggle />
          </div>
          <Button variant="outline" className="hidden md:flex rounded-full">
            Entrar
          </Button>
          <Button className="rounded-full bg-primary hover:bg-primary/90">Fale Conosco</Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <MobileNavigation />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
