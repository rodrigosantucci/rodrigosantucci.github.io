---
layout: post
title: "Next.js App Router"
date: 2024-03-15
excerpt: "Padrões de organização e dados."
tags: [nextjs, app-router, frontend]
comments: true
min_read_time: 20
auto_content: true
feature: "assets/img/logopost.jpg"
---

Estrutura de pastas e renderização híbrida.

Integração com APIs.

## Conceitos

- Server Components: renderizam no servidor; reduzem JS no cliente.
- Client Components: interativos; marcam com `'use client'` quando necessário.
- Data Fetching: `fetch` com cache, revalidação e streaming.

## Boas Práticas

- Layouts e rotas aninhadas; arquivos `page.tsx`, `layout.tsx` e `loading.tsx`.
- Cache: `fetch` com `next: { revalidate }`; invalidação orientada por dados.
- Acessibilidade e SEO: metadados centralizados, componentes leves.

## Exemplo

```tsx
// app/products/page.tsx
export default async function Page() {
  const res = await fetch('https://api.example.com/products', { next: { revalidate: 60 } })
  const products = await res.json()
  return <ul>{products.map((p: any) => <li key={p.id}>{p.name}</li>)}</ul>
}
```

## Checklist

- Separar server/client components corretamente.
- Definir estratégias de cache e revalidação.
- Layouts e loading states por rota.

## Referências

- Next.js App Router: https://nextjs.org/docs/app
- Data Fetching: https://nextjs.org/docs/app/building-your-application/data-fetching

