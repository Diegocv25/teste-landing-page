"use client"

import { useInView } from "@/hooks/use-parallax"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Preciso ter conhecimentos técnicos?",
    answer:
      "Não! O sistema é intuitivo e fácil de usar. Qualquer pessoa consegue configurar e operar sem dificuldade.",
  },
  {
    question: "Quantos profissionais posso cadastrar?",
    answer:
      "Ilimitados! Diferente de concorrentes, você não paga por profissionais adicionais em nenhum plano.",
  },
  {
    question: "A IA funciona 24 horas?",
    answer:
      "Sim! A IA responde no WhatsApp 24 horas por dia, 7 dias por semana, mesmo quando você está fechado, de madrugada ou em feriados.",
  },
  {
    question: "Funciona para qual tipo de negócio?",
    answer:
      "Qualquer negócio com agendamentos: salões, barbearias, clínicas, spas, consultórios, estéticas, pet shops e mais.",
  },
  {
    question: "Preciso de cartão de crédito para testar?",
    answer:
      "Não! O teste de 7 dias é 100% grátis, sem precisar cadastrar cartão de crédito.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer:
      "Sim! Você cancela quando quiser, sem multas ou burocracias. Cancelamento instantâneo pelo próprio sistema.",
  },
  {
    question: "Tem suporte?",
    answer:
      "Sim! Temos suporte via WhatsApp em horário comercial para todos os planos, com atendimento prioritário para planos superiores.",
  },
  
]

export function FAQ() {
  const { ref, isInView } = useInView(0.1)

  return (
    <section id="faq" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o sistema e nossos planos.
          </p>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg data-[state=open]:shadow-accent/5"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
