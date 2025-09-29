"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    interest: "demo",
    budget: "",
    newsletter: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [formErrors, setFormErrors] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const sectionTop = document.getElementById("contact")?.offsetTop || 0
    if (scrollY > sectionTop - window.innerHeight / 1.5) {
      setIsVisible(true)
    }
  }, [scrollY])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const handleRadioChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      interest: value,
    }))
  }

  const validateForm = () => {
    const errors = {}

    if (!formData.name.trim()) {
      errors.name = "Nome é obrigatório"
    }

    if (!formData.company.trim()) {
      errors.company = "Empresa é obrigatória"
    }

    if (!formData.email.trim()) {
      errors.email = "Email é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email inválido"
    }

    if (formData.phone && !/^$$\d{2}$$\s\d{4,5}-\d{4}$/.test(formData.phone)) {
      errors.phone = "Formato: (00) 00000-0000"
    }

    return errors
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        interest: "demo",
        budget: "",
        newsletter: false,
      })

      // Show success toast
      toast({
        title: "Formulário enviado com sucesso!",
        description: "Entraremos em contato em breve.",
        action: <ToastAction altText="Fechar">Fechar</ToastAction>,
      })
    }, 1500)
  }

  return (
    <section id="contact" className="bg-white py-20 md:py-32">
      <div className="container">
        <div
          className="grid gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16 transition-all duration-1000 transform"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
          }}
        >
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <Badge className="mb-4 bg-bertha-blue/10 text-bertha-blue hover:bg-bertha-blue/20">Contato</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-bertha-blue sm:text-4xl">
                Pronto para transformar sua plataforma?
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Entre em contato com nossa equipe para uma demonstração personalizada de como o Bertha Integradora Banco
                B2B pode potencializar seu negócio.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
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
                    className="h-6 w-6"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-bertha-blue">Telefone</p>
                  <p className="text-slate-600">+55 (11) 1234-5678</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
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
                    className="h-6 w-6"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-bertha-blue">Email</p>
                  <p className="text-slate-600">contato@berthaintegradora.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue/10 text-bertha-blue">
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
                    className="h-6 w-6"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-bertha-blue">Endereço</p>
                  <p className="text-slate-600">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-bertha-blue/5 p-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-bertha-blue text-white">
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
                    className="h-6 w-6"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-bertha-blue">Suporte 24/7</p>
                  <p className="text-slate-600">Nossa equipe está sempre disponível para ajudar</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-bertha-blue">Clientes que confiam em nós</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-12 rounded-md bg-slate-100 flex items-center justify-center text-slate-400 text-xs">
                  Cliente 1
                </div>
                <div className="h-12 rounded-md bg-slate-100 flex items-center justify-center text-slate-400 text-xs">
                  Cliente 2
                </div>
                <div className="h-12 rounded-md bg-slate-100 flex items-center justify-center text-slate-400 text-xs">
                  Cliente 3
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="overflow-hidden shadow-lg">
              <CardHeader className="bg-bertha-blue text-white">
                <CardTitle>Solicite uma demonstração</CardTitle>
                <p className="text-white/80 text-sm">Preencha o formulário abaixo para entrarmos em contato</p>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4 p-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome*</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      className={`border-slate-200 ${formErrors.name ? "border-red-500" : ""}`}
                    />
                    {formErrors.name && <p className="text-xs text-red-500">{formErrors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa*</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Sua empresa"
                      value={formData.company}
                      onChange={handleChange}
                      className={`border-slate-200 ${formErrors.company ? "border-red-500" : ""}`}
                    />
                    {formErrors.company && <p className="text-xs text-red-500">{formErrors.company}</p>}
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail*</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`border-slate-200 ${formErrors.email ? "border-red-500" : ""}`}
                      />
                      {formErrors.email && <p className="text-xs text-red-500">{formErrors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`border-slate-200 ${formErrors.phone ? "border-red-500" : ""}`}
                      />
                      {formErrors.phone && <p className="text-xs text-red-500">{formErrors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label>Interesse principal</Label>
                    <RadioGroup
                      defaultValue="demo"
                      value={formData.interest}
                      onValueChange={handleRadioChange}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="demo" id="demo" />
                        <Label htmlFor="demo" className="font-normal">
                          Demonstração da plataforma
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="pricing" id="pricing" />
                        <Label htmlFor="pricing" className="font-normal">
                          Informações de preços
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="integration" id="integration" />
                        <Label htmlFor="integration" className="font-normal">
                          Detalhes de integração
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="font-normal">
                          Outro assunto
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Orçamento estimado (opcional)</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-200 p-2 text-sm"
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="small">Até R$ 10.000</option>
                      <option value="medium">R$ 10.000 - R$ 50.000</option>
                      <option value="large">Acima de R$ 50.000</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Digite sua mensagem aqui"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full rounded-md border border-slate-200 p-2 text-sm"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="h-4 w-4"
                    />
                    <Label htmlFor="newsletter" className="font-normal">
                      Quero receber newsletters
                    </Label>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end p-6">
                  <Button type="submit" className="bg-bertha-blue text-white hover:bg-bertha-blue/80">
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center space-x-2">
                        Enviar
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
