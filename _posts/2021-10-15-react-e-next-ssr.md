---
layout: post
title: "React e Next.js: SSR"
date: 2021-10-15
excerpt: "Server-side rendering e benefícios de SEO e performance."
tags: [react, nextjs, ssr]
comments: true
min_read_time: 20
auto_content: true
feature: "assets/img/logopost.jpg"
---

Estratégias de dados e hidratação.

Boas práticas de roteamento e cache.

## Conceitos

- SSR: renderizar no servidor e hidratar no client; melhora SEO e TTFB.
- SSG/ISR: gerar estático (build) e revalidar; equilíbrio entre frescor e custo.
- CSR: renderização no cliente; útil para interações pesadas com dados dinâmicos.

## Boas Práticas

- Dados: evitar over‑fetch; cachear em camadas (HTTP/CDN/app); invalidar corretamente.
- Hidratação: reduzir payload de estado; carregar scripts de forma incremental.
- Roteamento: rotas leves; divisão por página; pré‑carregamento moderado.

## Exemplo SSR (Next.js)

```ts
export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/products')
  return { props: { products: await res.json() } }
}
```

## Checklist

- Escolher entre SSR/SSG/ISR por página.
- Cache e estratégias de invalidação definidos.
- Observabilidade: métricas de TTFB/LCP e erros.

## Referências

- React Docs: https://react.dev
- Next.js Docs SSR/SSG/ISR: https://nextjs.org/docs

