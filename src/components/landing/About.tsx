import { CheckCircle } from "lucide-react"

export function About() {
  return (
    <section id="sobre" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Sobre o Sistema
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
                A solução completa para sua gestão
              </h2>
              <p className="text-muted-foreground mb-8">
                O Nexus Automações foi desenvolvido especialmente para profissionais 
                de beleza e bem-estar que querem automatizar tarefas repetitivas 
                e focar no que realmente importa: seus clientes.
              </p>
              
              <div className="space-y-4">
                {[
                  "Agendamento automático via WhatsApp",
                  "Atendimento inteligente com IA",
                  "Gestão financeira simplificada",
                  "Relatórios e métricas em tempo real",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-8 border border-accent/10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "70%", label: "Menos faltas" },
                    { value: "10x", label: "Mais atendimentos" },
                    { value: "24/7", label: "Disponibilidade" },
                    { value: "40%", label: "Mais retorno" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-background/80 rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold text-accent">{stat.value}</div>
                      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
