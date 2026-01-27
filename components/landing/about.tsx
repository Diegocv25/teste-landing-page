"use client"

import { useInView } from "@/hooks/use-parallax"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Bot, Wallet } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Multi-Nicho",
    description:
      "Funciona para qualquer negócio com agendamentos: salões, barbearias, clínicas, spas, consultórios e muito mais.",
  },
  {
    icon: Bot,
    title: "IA no WhatsApp",
    description:
      "Atendente automático responde dúvidas, envia links de agendamento e funciona 24/7, mesmo quando você está fechado.",
  },
  {
    icon: Wallet,
    title: "Gestão Financeira",
    description:
      "Controle completo de caixa, comissões, contas a pagar e receber. Saiba exatamente quanto está ganhando.",
  },
]

export function About() {
  const { ref, isInView } = useInView(0.2)

  return (
    <section id="sobre" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Sobre o Sistema
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Um sistema completo de gestão desenvolvido para estabelecimentos que
            trabalham com agendamentos e precisam de controle profissional. Com IA
            integrada ao WhatsApp, gestão financeira detalhada e relatórios de
            desempenho, você tem tudo em um só lugar para gerenciar seu negócio de
            forma inteligente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`bg-card border-border transition-all duration-700 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
