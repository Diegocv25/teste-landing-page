import { UserPlus, Settings, Rocket } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Crie sua conta",
    description: "Cadastro rápido e simples. Em menos de 2 minutos você já está dentro."
  },
  {
    icon: Settings,
    number: "02",
    title: "Configure seu negócio",
    description: "Adicione seus serviços, horários e profissionais. Personalize como preferir."
  },
  {
    icon: Rocket,
    number: "03",
    title: "Comece a usar",
    description: "Conecte seu WhatsApp e deixe a IA trabalhar para você 24/7."
  },
]

export function HowToStart() {
  return (
    <section id="como-comecar" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Como Começar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            3 passos simples para transformar seu negócio
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative text-center">
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-accent/50 to-accent/10" />
                  )}
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent/20">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <span className="text-accent font-bold text-sm">{step.number}</span>
                    <h3 className="font-bold text-xl mt-2 mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
