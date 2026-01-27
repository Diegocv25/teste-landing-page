import { Target, Zap, TrendingUp, Heart } from "lucide-react"

const objectives = [
  {
    icon: Target,
    title: "Automatizar",
    description: "Tarefas repetitivas como agendamentos e confirmações funcionam no piloto automático."
  },
  {
    icon: Zap,
    title: "Agilizar",
    description: "Atendimento instantâneo via WhatsApp, 24 horas por dia, 7 dias por semana."
  },
  {
    icon: TrendingUp,
    title: "Crescer",
    description: "Aumente sua capacidade de atendimento sem aumentar custos operacionais."
  },
  {
    icon: Heart,
    title: "Fidelizar",
    description: "Crie experiências personalizadas que fazem seus clientes voltarem sempre."
  },
]

export function Objectives() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Nossos Objetivos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            O que o Nexus pode fazer por você
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {objectives.map((objective, index) => {
            const Icon = objective.icon
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-3">{objective.title}</h3>
                <p className="text-muted-foreground">{objective.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
