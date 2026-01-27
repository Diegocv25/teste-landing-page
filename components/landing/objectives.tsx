"use client"

import { useInView, useParallax } from "@/hooks/use-parallax"
import { TrendingUp, Zap, BarChart3 } from "lucide-react"

const objectives = [
  {
    icon: TrendingUp,
    title: "Aumentar seu Faturamento",
    description:
      "Com IA no WhatsApp, você nunca perde um cliente por falta de atendimento. Agenda cheia = mais lucro.",
  },
  {
    icon: Zap,
    title: "Economizar seu Tempo",
    description:
      "Automatize lembretes, confirmações e respostas. Foque no que importa: atender bem seus clientes.",
  },
  {
    icon: BarChart3,
    title: "Dar Visibilidade Total",
    description:
      "Relatórios completos de desempenho, lucro real e gestão profissional para decisões inteligentes.",
  },
]

export function Objectives() {
  const { ref, isInView } = useInView(0.2)
  const offset = useParallax(0.1)

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Parallax Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Nosso Objetivo
          </h2>
          <p className="text-lg text-muted-foreground">
            Transformar a gestão do seu negócio com tecnologia e automação inteligente.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {objectives.map((objective, index) => (
            <div
              key={objective.title}
              className={`flex items-start gap-6 p-6 rounded-2xl bg-card border border-border transition-all duration-700 hover:shadow-lg hover:shadow-accent/5 ${
                isInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-14 h-14 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center">
                <objective.icon className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{objective.title}</h3>
                <p className="text-muted-foreground">{objective.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
