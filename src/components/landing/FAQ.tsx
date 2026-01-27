import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Como funciona o teste grátis?",
    answer: "Você tem 7 dias para testar todas as funcionalidades do sistema sem compromisso. Não pedimos cartão de crédito. Após o período de teste, você escolhe o plano que mais se adequa ao seu negócio."
  },
  {
    question: "Preciso instalar algum aplicativo?",
    answer: "Não! O Nexus funciona 100% na nuvem, acessível pelo navegador de qualquer dispositivo. Você só precisa de internet para acessar."
  },
  {
    question: "O sistema funciona com meu WhatsApp pessoal?",
    answer: "Recomendamos usar um número dedicado para o negócio, mas funciona com qualquer número de WhatsApp. A conexão é simples e segura via QR Code."
  },
  {
    question: "Como é o suporte técnico?",
    answer: "Oferecemos suporte por email, WhatsApp e chat dentro do sistema. Planos profissionais têm suporte prioritário e planos empresariais contam com gerente de conta dedicado."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim! Não temos fidelidade. Você pode cancelar a qualquer momento diretamente pelo sistema, sem burocracia."
  },
  {
    question: "Meus dados ficam seguros?",
    answer: "Sim! Usamos criptografia de ponta a ponta, fazemos backups automáticos diários e estamos em conformidade com a LGPD. Seus dados são só seus."
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground">
            Tire suas dúvidas sobre o Nexus Automações
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                className="w-full py-6 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-accent transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              {openIndex === index && (
                <div className="pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
