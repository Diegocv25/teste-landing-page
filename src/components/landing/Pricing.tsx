import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "97",
    description: "Ideal para profissionais autônomos",
    features: [
      "1 profissional",
      "Agendamento via WhatsApp",
      "Lembretes automáticos",
      "Relatórios básicos",
      "Suporte por email",
    ],
    highlighted: false,
  },
  {
    name: "Profissional",
    price: "197",
    description: "Para pequenos estabelecimentos",
    features: [
      "Até 5 profissionais",
      "Atendimento com IA",
      "Gestão financeira completa",
      "Relatórios avançados",
      "Suporte prioritário",
      "Campanhas de marketing",
    ],
    highlighted: true,
  },
  {
    name: "Empresarial",
    price: "397",
    description: "Para redes e franquias",
    features: [
      "Profissionais ilimitados",
      "Múltiplas unidades",
      "API de integração",
      "Gerente de conta dedicado",
      "Treinamento personalizado",
      "SLA garantido",
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="precos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Preços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-muted-foreground">
            Escolha o plano ideal para o tamanho do seu negócio. Todos incluem 7 dias grátis.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted 
                  ? "bg-accent text-accent-foreground ring-4 ring-accent/20 scale-105" 
                  : "bg-card border border-border"
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block bg-background text-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Mais Popular
                </span>
              )}
              <h3 className="font-bold text-2xl mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-accent-foreground/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-4xl font-bold">R${plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-accent-foreground/80" : "text-muted-foreground"}`}>/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <Check className={`h-4 w-4 shrink-0 ${plan.highlighted ? "text-accent-foreground" : "text-accent"}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${
                  plan.highlighted 
                    ? "bg-background text-foreground hover:bg-background/90" 
                    : "bg-accent text-accent-foreground hover:bg-accent/90"
                }`}
              >
                Começar Agora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
