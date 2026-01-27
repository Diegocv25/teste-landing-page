"use client"

import { useParallax } from "@/hooks/use-parallax"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, MessageSquare, Calendar, BarChart3 } from "lucide-react"

export function Hero() {
  const offset = useParallax(0.3)

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Parallax Background Elements */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 mr-2 text-accent" />
            Funciona para: Salão • Barbearia • Clínica • Spa • Consultório
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6">
            Sistema Completo de Gestão com{" "}
            <span className="text-accent">IA no WhatsApp</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
            Sua secretária digital que atende 24 horas por dia, 7 dias por semana. 
            Automatize agendamentos, gerencie finanças e aumente seu faturamento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6"
            >
              Comece Teste Grátis de 7 Dias
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold text-lg px-8 py-6 bg-transparent"
            >
              Ver Demonstração
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mb-12">
            Não precisa de cartão de crédito
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
              <MessageSquare className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">IA no WhatsApp</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Agenda Online</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border">
              <BarChart3 className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Relatórios Completos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
