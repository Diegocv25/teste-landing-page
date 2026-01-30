# Erros atuais e o que falta para o preview voltar

## Problema que derruba o preview

O build do Lovable está falhando com:

> `Missing script: "build:dev"`

Ou seja: **o Lovable tenta rodar `npm run build:dev`** e esse script **não existe** no `package.json`.

### Como corrigir (você precisa editar o `package.json` manualmente)

No `package.json`, ajuste a seção `scripts` para conter pelo menos:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "preview": "vite preview --host --port 8080"
  }
}
```

Depois disso, o preview deve voltar a compilar e carregar.

## Pendência estrutural (não bloqueia o build, mas causa confusão)

O projeto ainda contém **Next.js** (`app/`, `next.config.mjs`, `next` em dependencies). Hoje o que o Lovable precisa é **Vite**.

Opções:

1) **Manter** Next.js por enquanto (mais rápido) — só corrigir os scripts para Vite.
2) **Limpar** Next.js (mais correto) — remover pastas `app/`/`components/` duplicadas fora de `src/` e remover `next`/`next-themes` se não forem usados.

## Como validar que voltou

- Recarregar o preview e confirmar que a rota `/` renderiza a landing page.
- Se aparecer tela em branco, checar o console do preview por erros de import.
