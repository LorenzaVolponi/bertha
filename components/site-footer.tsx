import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="bg-bertha-blue text-white">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-40">
                <Image src="/images/bertha-logo-white.png" alt="Bertha Integradora" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-sm text-white/80">
              Transforme sua plataforma B2B com soluções financeiras integradas. Ofereça crédito, pagamentos e seguros
              diretamente na jornada do seu cliente.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:text-white hover:bg-white/20"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:text-white hover:bg-white/20"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:text-white hover:bg-white/20"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-white hover:text-white hover:bg-white/20"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Soluções</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-white">
                  CreditOps Plug-in
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-white">
                  Orquestrador APIs Hub
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-white">
                  Compliance Engine
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-white">
                  Estrutura de Fundos
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-white">
                  Nossa Tese
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-white">
                  Cases de Sucesso
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/80 hover:text-white">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Newsletter</h3>
            <p className="text-sm text-white/80">
              Inscreva-se para receber novidades e atualizações sobre o mercado de Embedded Finance.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button variant="secondary">Inscrever</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>© 2023 Bertha Integradora Banco B2B. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
