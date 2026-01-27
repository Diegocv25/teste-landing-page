import { featuresData } from "@/lib/features-data"
import { Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Features() {
  return (
    <section id="funcionalidades" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-muted-foreground">
            Conheça todas as funcionalidades que vão transformar a gestão do seu negócio
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuresData.slice(0, 6).map((feature) => {
            const Icon = feature.icon
            return (
              <div 
                key={feature.id}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:shadow-accent/5 transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-accent text-sm font-medium mb-4">{feature.tagline}</p>
                <ul className="space-y-2 mb-4">
                  {feature.details.slice(0, 3).map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver todas as funcionalidades
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
