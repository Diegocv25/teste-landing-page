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

## Pendência estrutural (resolvida)

Os arquivos e dependências de **Next.js** foram removidos para evitar que o Vercel/Lovable detectem o projeto como Next e tentem rodar `next build`.

## Como validar que voltou

- Recarregar o preview e confirmar que a rota `/` renderiza a landing page.
- Se aparecer tela em branco, checar o console do preview por erros de import.
