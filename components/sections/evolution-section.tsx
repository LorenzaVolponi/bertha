"use client"

import { useState, useEffect, useRef } from "react"
import { useInView, useAnimation } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { ClientOnly } from "@/components/client-only"
import { SafeMotionDiv } from "@/components/safe-motion-div"

export function EvolutionSection() {
  const [activePhase, setActivePhase] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.1 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [inView, controls])

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActivePhase((prev) => (prev < 3 ? prev + 1 : 0))
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [inView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const phases = [
    {
      period: "Fase 1 (1998–2008)",
      title: "Revolução Digital",
      description:
        "A era digital começou com a introdução de serviços financeiros online, como bancos e pagamentos pela internet. Empresas como PayPal lideraram a transformação, desafiando os sistemas bancários tradicionais e trazendo maior conveniência aos consumidores.",
    },
    {
      period: "Fase 2 (2009–2014)",
      title: "Era do Mobile e das Redes Sociais",
      description:
        "Após a crise financeira de 2008, as fintechs aproveitaram a hesitação dos bancos tradicionais. Esta fase viu um boom em tecnologia móvel e uso de redes sociais, trazendo inovações na forma como os consumidores acessam e interagem com serviços financeiros.",
    },
    {
      period: "Fase 3 (2015–2021)",
      title: "Expansão e Maturidade",
      description:
        "Caracterizada por um crescimento rápido e ampliado das fintechs, impulsionado pela popularidade dos smartphones e acelerado pela pandemia. Nomes como Nubank e Square se tornaram comuns, com foco em serviços financeiros acessíveis a qualquer hora.",
    },
    {
      period: "Fase 4 (2022+)",
      title: "Horizonte Tecnológico",
      description:
        "Olhando para o futuro, antecipa-se uma era de regulamentações proativas e inovações tecnológicas como IA gerativa e DLT. O foco está na expansão da inclusão financeira e na contínua adaptação às novas tecnologias.",
    },
  ]

  return (
    <section id="evolution" className="bg-slate-50 py-20 md:py-32">
      <div className="container">
        <ClientOnly>
          <SafeMotionDiv ref={ref} variants={containerVariants} initial="hidden" animate={controls}>
            <SafeMotionDiv
              variants={itemVariants}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
            >
              <Badge className="bg-bertha-blue/10 text-bertha-blue hover:bg-bertha-blue/20">Evolução</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-bertha-blue sm:text-4xl md:text-5xl">
                  Da Revolução Digital à Era do Embedded Finance
                </h2>
                <p className="max-w-[800px] text-slate-600 md:text-xl">
                  A evolução dos serviços financeiros digitais até o momento atual
                </p>
              </div>
            </SafeMotionDiv>

            <SafeMotionDiv variants={itemVariants} className="relative mx-auto max-w-4xl">
              {/* Timeline connector */}
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-bertha-blue/20"></div>

              {/* Timeline nodes */}
              <div className="relative space-y-16">
                {phases.map((phase, index) => (
                  <div key={index} className={`relative transition-all duration-500 delay-${index * 100}`}>
                    <div className="flex items-center justify-center">
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 h-8 w-8 rounded-full border-4 border-white transition-all duration-300 ${
                          activePhase === index ? "bg-bertha-blue scale-125" : "bg-bertha-blue/40"
                        }`}
                      ></div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div className={`text-right ${index % 2 === 1 ? "md:order-2" : ""}`}>
                        <div
                          className={`inline-block rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ${
                            activePhase === index ? "transform-gpu -translate-y-1 shadow-xl" : ""
                          }`}
                        >
                          <div className="text-lg font-bold text-bertha-blue">{phase.period}</div>
                          <div className="mt-2 text-slate-600">{phase.description}</div>
                        </div>
                      </div>
                      <div className={`${index % 2 === 1 ? "md:order-1 text-right" : "text-left"}`}>
                        <div className="mt-8 md:mt-0">
                          <div className="text-xl font-medium text-bertha-blue">{phase.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Timeline navigation */}
              <div className="mt-16 flex justify-center space-x-2">
                {phases.map((_, index) => (
                  <button
                    key={index}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                      activePhase === index ? "bg-bertha-blue scale-125" : "bg-bertha-blue/30"
                    }`}
                    onClick={() => setActivePhase(index)}
                    aria-label={`View phase ${index + 1}`}
                  ></button>
                ))}
              </div>
            </SafeMotionDiv>
          </SafeMotionDiv>
        </ClientOnly>
      </div>
    </section>
  )
}
