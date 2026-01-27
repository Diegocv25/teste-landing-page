"use client"

import { useInView, useParallax } from "@/hooks/use-parallax"
import { Button } from "@/components/ui/button"
import { UserPlus, Settings, Rocket } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Faça o Cadastro",
    description:
      "Crie sua conta em menos de 2 minutos. Não precisa de cartão de crédito para começar o teste grátis.",
  },
  {
    number: "2",
    icon: Settings,
    title: "Configure seu Estabelecimento",
    description:
      "Adicione seus profissionais, serviços e horários de funcionamento. É rápido e intuitivo.",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Comece a Usar",
    description:
      "Pronto! Compartilhe o link de agendamento com seus clientes e ative a IA no WhatsApp.",
  },
]

export function HowToStart() {
  const { ref, isInView } = useInView(0.2)
  const offset = useParallax(0.1)

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Parallax Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Como Começar
          </h2>
          <p className="text-lg text-muted-foreground">
            Em apenas 3 passos simples, seu estabelecimento estará funcionando com automação completa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative text-center transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-border" />
                )}

                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-card border-2 border-accent mb-6">
                  <span className="text-3xl font-bold text-accent">
                    {step.number}
                  </span>
                </div>

                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-accent" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-10 py-6"
            >
              Começar Agora
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Teste Grátis por 7 Dias - Sem Cartão de Crédito
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
