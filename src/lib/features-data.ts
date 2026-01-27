import { 
  Calendar, 
  MessageSquare, 
  Users, 
  BarChart3, 
  CreditCard, 
  Bell,
  Clock,
  ShieldCheck
} from "lucide-react"

export const featuresData = [
  {
    id: "agendamento",
    icon: Calendar,
    title: "Agendamento Inteligente",
    tagline: "Nunca mais perca um cliente por falta de agenda",
    details: [
      "Agendamento automático 24/7 via WhatsApp",
      "Confirmação e lembretes automáticos",
      "Reagendamento simplificado pelo cliente",
      "Bloqueio de horários e pausas personalizáveis",
    ],
    result: "Reduza faltas em até 70% e aumente sua ocupação automaticamente."
  },
  {
    id: "whatsapp",
    icon: MessageSquare,
    title: "Atendimento via WhatsApp",
    tagline: "Sua secretária digital 24 horas",
    details: [
      "Respostas automáticas inteligentes com IA",
      "Atendimento personalizado para cada cliente",
      "Envio de catálogo de serviços e preços",
      "Suporte a áudios e imagens",
    ],
    result: "Atenda 10x mais clientes sem aumentar sua equipe."
  },
  {
    id: "clientes",
    icon: Users,
    title: "Gestão de Clientes",
    tagline: "Conheça seu cliente como nunca antes",
    details: [
      "Histórico completo de atendimentos",
      "Preferências e observações por cliente",
      "Aniversariantes e datas especiais",
      "Segmentação para campanhas",
    ],
    result: "Fidelize clientes oferecendo atendimento personalizado."
  },
  {
    id: "financeiro",
    icon: CreditCard,
    title: "Controle Financeiro",
    tagline: "Suas finanças organizadas automaticamente",
    details: [
      "Registro automático de receitas",
      "Comissões calculadas automaticamente",
      "Relatórios de faturamento diário/mensal",
      "Controle de formas de pagamento",
    ],
    result: "Saiba exatamente quanto está ganhando em tempo real."
  },
  {
    id: "relatorios",
    icon: BarChart3,
    title: "Relatórios e Métricas",
    tagline: "Dados que geram resultados",
    details: [
      "Dashboard com métricas em tempo real",
      "Relatórios de performance por profissional",
      "Análise de horários mais rentáveis",
      "Taxa de conversão e cancelamentos",
    ],
    result: "Tome decisões baseadas em dados, não em achismos."
  },
  {
    id: "notificacoes",
    icon: Bell,
    title: "Notificações Automáticas",
    tagline: "Mantenha seus clientes engajados",
    details: [
      "Lembretes de agendamento automáticos",
      "Mensagens de aniversário personalizadas",
      "Campanhas de reativação de clientes inativos",
      "Promoções e novidades por WhatsApp",
    ],
    result: "Aumente o retorno de clientes em até 40%."
  },
  {
    id: "disponibilidade",
    icon: Clock,
    title: "Gestão de Disponibilidade",
    tagline: "Controle total da sua agenda",
    details: [
      "Horários de funcionamento flexíveis",
      "Pausas e intervalos personalizáveis",
      "Férias e folgas programáveis",
      "Múltiplos profissionais e agendas",
    ],
    result: "Nunca mais tenha conflitos de horário."
  },
  {
    id: "seguranca",
    icon: ShieldCheck,
    title: "Segurança e Privacidade",
    tagline: "Seus dados protegidos",
    details: [
      "Criptografia de ponta a ponta",
      "Backup automático diário",
      "Conformidade com LGPD",
      "Acesso controlado por níveis",
    ],
    result: "Trabalhe com tranquilidade e segurança."
  },
]
