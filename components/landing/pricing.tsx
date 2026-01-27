"use client"

import { useInView } from "@/hooks/use-parallax"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, X, Star, Bot, Shield, Sparkles, CreditCard } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const professionalFeatures = [
  { text: "Profissionais ilimitados", included: true },
  { text: "Agenda online 24/7", included: true },
  { text: "Portal do cliente", included: true },
  { text: "Gestão de clientes", included: true },
  { text: "Controle de estoque", included: true },
  { text: "Comandas e vendas", included: true },
  { text: "Sistema de remuneração", included: true },
  { text: "Gestão financeira completa", included: true },
  { text: "Relatórios avançados", included: true },
  { text: "6 níveis de acesso", included: true },
  { text: "Controle de lançamentos", included: true },
  { text: "Suporte via WhatsApp", included: true },
  { text: "IA no WhatsApp", included: false },
]

const proIAFeatures = [
  { text: "Tudo do plano Profissional, MAIS:", included: true, highlight: true },
  { text: "IA Atendente no WhatsApp 24/7", included: true, isAI: true },
  { text: "IA responde dúvidas automaticamente", included: true, isAI: true },
  { text: "IA envia links de agendamento", included: true, isAI: true },
  { text: "Lembretes automáticos via WhatsApp", included: true, isAI: true },
  { text: "Mensagens de retorno automático", included: true, isAI: true },
  { text: "Aniversários via WhatsApp", included: true, isAI: true },
  { text: "Promoções e eventos automatizados", included: true, isAI: true },
  { text: "Nunca perca cliente por falta de resposta", included: true, isAI: true },
  { text: "Suporte prioritário via WhatsApp", included: true },
]

const pricingFaqs = [
  {
    question: "Posso trocar de plano depois?",
    answer: "Sim! Você pode fazer upgrade do Profissional para PRO + IA a qualquer momento.",
  },
  {
    question: "Tem taxa de configuração ou instalação?",
    answer: "Não! Você paga apenas a mensalidade. Sem custos ocultos.",
  },
  {
    question: "Posso pagar anual e ganhar desconto?",
    answer: "Sim! O pagamento anual tem 20% de desconto (entre em contato).",
  },
]

export function Pricing() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="precos" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Preços Simples e Justos
          </h2>
          <p className="text-lg text-muted-foreground">
            Sem pegadinhas. Profissionais ilimitados em todos os planos.
          </p>
        </div>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Escolha o plano ideal para o seu negócio. Comece com todas as funcionalidades profissionais 
          ou vá direto para o plano com IA e nunca mais perca um cliente por falta de atendimento.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Profissional Plan */}
          <Card
            className={`relative bg-card border-border transition-all duration-700 hover:shadow-xl ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <CardHeader className="text-center pb-0 pt-8">
              <Badge variant="secondary" className="w-fit mx-auto mb-4">
                Completo
              </Badge>
              <h3 className="text-2xl font-bold mb-4">Profissional</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-5xl font-bold">197</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
            </CardHeader>

            <CardContent className="pt-8">
              <ul className="space-y-3 mb-8">
                {professionalFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.included ? (
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                        <X className="w-3 h-3 text-muted-foreground" />
                      </div>
                    )}
                    <span className={`text-sm ${!feature.included ? "text-muted-foreground" : ""}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button className="w-full font-semibold bg-transparent" variant="outline">
                Começar Teste Grátis de 7 Dias
              </Button>
            </CardContent>
          </Card>

          {/* PRO + IA Plan */}
          <Card
            className={`relative bg-card border-2 border-accent shadow-lg shadow-accent/10 transition-all duration-700 hover:shadow-xl ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-accent text-accent-foreground px-4 py-1">
                <Star className="w-3 h-3 mr-1 fill-current" />
                MAIS POPULAR
              </Badge>
            </div>

            <CardHeader className="text-center pb-0 pt-8">
              <Badge className="w-fit mx-auto mb-4 bg-primary/10 text-primary border-0">
                Diferencial Matador
              </Badge>
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                PRO + IA <Star className="w-5 h-5 text-accent fill-accent" />
              </h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-5xl font-bold">347</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
            </CardHeader>

            <CardContent className="pt-8">
              <ul className="space-y-3 mb-6">
                {proIAFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    {feature.isAI ? (
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                        <Bot className="w-3 h-3 text-accent" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                    )}
                    <span className={`text-sm ${feature.highlight ? "font-semibold" : ""}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="bg-accent/10 rounded-lg p-3 mb-6 text-center">
                <p className="text-sm font-medium flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  Economize o custo de 1 secretária
                </p>
              </div>

              <Button className="w-full font-semibold bg-accent hover:bg-accent/90 text-accent-foreground text-base py-6">
                Começar Teste Grátis de 7 Dias
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-3">
                Diferencial que seu concorrente não tem
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Why AI Plan is Worth It */}
        <div
          className={`max-w-2xl mx-auto mb-16 bg-card border border-border rounded-2xl p-8 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Por que o plano com IA vale a pena?
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p>Uma secretária custa <span className="font-semibold text-foreground">R$ 1.500 - R$ 2.500/mês</span></p>
            <p>Nossa IA trabalha 24/7 por apenas <span className="font-semibold text-accent">R$ 150/mês a mais</span></p>
            <p className="text-lg font-bold text-foreground">
              Economia: R$ 1.350 - R$ 2.350/mês!
            </p>
            <p className="text-sm pt-2">
              E nunca tira férias, não fica doente e responde na velocidade da luz!
            </p>
          </div>
        </div>

        {/* Guarantee Section */}
        <div
          className={`max-w-2xl mx-auto mb-16 bg-primary/5 border border-primary/10 rounded-2xl p-8 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
            <Shield className="w-8 h-8 text-accent" />
          </div>
          <h3 className="text-xl font-bold mb-4">Garantia de 7 Dias</h3>
          <p className="text-muted-foreground mb-4">
            Teste TODAS as funcionalidades grátis por 7 dias completos.
          </p>
          <p className="text-muted-foreground mb-6">
            Se não gostar, cancele sem pagar nada. Sem perguntas, sem burocracias.
          </p>
          <div className="flex items-center justify-center gap-2 text-accent font-medium">
            <CreditCard className="w-5 h-5" />
            Não precisa cartão para começar!
          </div>
        </div>

        {/* Pricing FAQ */}
        <div
          className={`max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <h3 className="text-xl font-bold mb-6 text-center">Dúvidas sobre preços</h3>
          <Accordion type="single" collapsible className="space-y-3">
            {pricingFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-accent/5"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-4 text-sm">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Final CTA */}
        <div
          className={`max-w-xl mx-auto text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <h3 className="text-2xl font-bold mb-6">
            Pronto para revolucionar sua gestão?
          </h3>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-12 py-6 h-auto"
          >
            Começar Teste Grátis
          </Button>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              7 dias grátis
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              Sem cartão
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              Cancele quando quiser
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
