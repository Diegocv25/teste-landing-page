# Nexus Automações — Landing Page

Este repositório contém a **landing page** do projeto **Nexus Automações**, um sistema de gestão com automações e IA via WhatsApp voltado para **salões, barbearias, clínicas, spas e consultórios**.

## Stack

- **React + Vite** (frontend)
- **TypeScript**
- **Tailwind CSS** (design system via tokens CSS)
- Componentes de UI (Radix + shadcn)

## Estrutura principal

- `src/pages/Index.tsx`: composição da landing page
- `src/components/landing/*`: seções (Hero, Features, Pricing, FAQ etc.)
- `src/components/ui/*`: componentes reutilizáveis (button, toast, tooltip, etc.)

## Observação importante

O projeto está totalmente alinhado ao fluxo **Vite** (via `index.html` + `src/main.tsx`) e não possui mais dependências/configurações de Next.js.
