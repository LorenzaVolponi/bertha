import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-10 w-40 flex items-center justify-center bg-primary/20 rounded">
                <span className="text-xl font-bold text-primary">Bertha</span>
              </div>
            </div>
            <p className="text-sm text-foreground/70">
              A solução completa para Embedded Finance B2B. Conectamos e automatizamos toda a cadeia produtiva de Supply
              Chain Finance.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" aria-label="LinkedIn" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-foreground/70"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-foreground/70"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" aria-label="Instagram" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-foreground/70"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Soluções</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  CreditOps Plug-in
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Orquestrador APIs Hub
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Compliance Engine
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Estrutura de Fundos
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Empresa</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Nossa Tese
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Cases de Sucesso
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Contato</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>contato@berthaintegradora.com.br</li>
              <li>+55 (11) 1234-5678</li>
              <li>São Paulo, SP - Brasil</li>
            </ul>
            <div className="pt-2">
              <Button className="w-full rounded-full bg-primary hover:bg-primary/90">Fale Conosco</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-foreground/50">
          <p>© 2025 Bertha Integradora Banco. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
