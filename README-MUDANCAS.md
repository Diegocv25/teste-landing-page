# Mudanças realizadas (histórico)

Este arquivo documenta as alterações que foram feitas para tentar tornar o projeto funcional dentro do Lovable.

## 1) Base Vite/React criada

- Criado `index.html` (raiz) apontando para `src/main.tsx`.
- Criado `vite.config.ts` com alias `@ -> /src` e `lovable-tagger` no modo de desenvolvimento.
- Criado `tailwind.config.ts` com cores por tokens (`hsl(var(--...))`).

## 2) Página inicial migrada para `src/`

- Estrutura de landing page criada em `src/components/landing/*`.
- Página principal montada em `src/pages/Index.tsx` .

## 3) Interface de usuário de infraestrutura (shadcn)

- Componentes utilitários em `src/components/ui/*` (ex.: toaster/sonner/tooltip).
- Helpers como `src/lib/utils.ts` (cn + tailwind-merge).

## 4) Dependências adicionadas

- `tags adoráveis` 
- `@vitejs/plugin-react-swc` 
- `rapidamente` 
- `tailwindcss` 
- `react-router-dom` 
- `@tanstack/react-query` 

## 5) Estado atual

O projeto tem **arquivos de Vite e de Next.js ao mesmo tempo**. Para o Lovable funcionar, o build precisa ser feito via **Vite** (scripts no `package.json`).

## 6) Limpeza do Next.js

- Removido `next.config.mjs` ea pasta `app/` .
- Removidas dependências `next` e `next-themes` do `package.json` para evitar detecção incorreta no Vercel/Lovable. 
