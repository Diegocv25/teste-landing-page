import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { featuresData } from "@/lib/features-data"
import { Check, ArrowLeft } from "lucide-react"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"

export default function FuncionalidadesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/#como-comecar" className="flex items-center gap-2">
            <Logo className="h-8 w-auto" />
          </Link>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button asChild variant="outline" size="sm">
              <Link href="/#como-comecar">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Todas as Funcionalidades
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conhesca em detalhes cada funcionalidade do sistema Nexus Automacoes.
            Veja tudo o que o sistema oferece para transformar a gestao do seu negocio.
          </p>
        </div>
      </section>

      {/* Features List - All Expanded */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {featuresData.map((feature) => {
              const Icon = feature.icon

              return (
                <Card
                  key={feature.id}
                  className="bg-card border-border shadow-lg shadow-accent/5"
                >
                  <CardContent className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-accent font-medium">
                          {feature.tagline}
                        </p>
                      </div>
                    </div>

                    {/* Details List */}
                    <ul className="space-y-3 mb-6">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-accent" />
                          </div>
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Result Box */}
                    <div className="bg-accent/5 border border-accent/10 rounded-lg p-4">
                      <p className="text-sm">
                        <span className="font-semibold text-accent">
                          Resultado:
                        </span>{" "}
                        {feature.result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Pronto para comecar?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Teste todas essas funcionalidades gratuitamente por 7 dias.
            Sem compromisso, sem cartao de credito.
          </p>
          <Button asChild size="lg" variant="outline">
            <Link href="/#como-comecar">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Home
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Nexus Automacoes - Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}
