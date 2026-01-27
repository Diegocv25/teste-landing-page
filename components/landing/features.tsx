"use client"

import { useState } from "react"
import Link from "next/link"
import { useInView } from "@/hooks/use-parallax"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { featuresData, type Feature } from "@/lib/features-data"
import { Check, ArrowRight, ExternalLink } from "lucide-react"

export function Features() {
  const { ref, isInView } = useInView(0.1)
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null)

  return (
    <section id="funcionalidades" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Funcionalidades do Sistema
          </h2>
          <p className="text-lg text-muted-foreground">
            Tudo que você precisa para gerenciar seu estabelecimento de forma
            profissional e eficiente.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuresData.map((feature, index) => (
            <Card
              key={feature.id}
              className={`bg-card border-border transition-all duration-500 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 group cursor-pointer ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${(index % 8) * 50}ms` }}
              onClick={() => setSelectedFeature(feature)}
            >
              <CardContent className="p-5 md:p-6 text-center flex flex-col h-full">
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-1 text-sm md:text-base">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <div className="mt-auto">
                  <span className="text-xs text-accent font-medium group-hover:underline inline-flex items-center gap-1">
                    Ver Detalhes
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ver Todas Funcionalidades Button */}
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            <Link href="/funcionalidades">
              Ver Todas as Funcionalidades
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Feature Detail Dialog */}
      <Dialog open={!!selectedFeature} onOpenChange={() => setSelectedFeature(null)}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          {selectedFeature && (
            <>
              <DialogHeader>
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <selectedFeature.icon className="w-7 h-7 text-accent" />
                </div>
                <DialogTitle className="text-xl font-bold">
                  {selectedFeature.title}
                </DialogTitle>
                <DialogDescription className="text-accent font-medium">
                  {selectedFeature.tagline}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-4">
                <ul className="space-y-3">
                  {selectedFeature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-accent/5 border border-accent/10 rounded-lg p-4 mt-6">
                  <p className="text-sm font-medium text-foreground">
                    <span className="text-accent">Resultado:</span>{" "}
                    {selectedFeature.result}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() => setSelectedFeature(null)}
                >
                  Fechar
                </Button>
                <Button
                  asChild
                  className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Link href="/funcionalidades">
                    Ver Todas
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
