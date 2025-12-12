---
layout: post
title: "Novidades do React em 2024"
date: 2024-01-15
excerpt: "Recursos e padrões recomendados para o ecossistema."
tags: [react, novidades, frontend]
comments: true
min_read_time: 20
auto_content: true
feature: "assets/img/logopost.jpg"
---

Fluxos de dados, renderização e tooling.

Impactos em DX e performance.

## Tendências e Padrões

- Adoção de Server Components via frameworks; redução de JS no cliente.
- Boas práticas de efeitos: menos `useEffect`; derivar estado de props/dados; suspense para dados.
- Tooling: bundlers modernos; análise de bundle; tipagem mais rigorosa com TS.

## Boas Práticas

- Suspense e boundaries para carregar dados com UX adequada.
- Evitar estado duplicado; memoização onde necessário; profiling para otimização.
- Acessibilidade: foco e leitura de tela; semântica correta; testes.

## Exemplo

```tsx
function Products({ products }: { products: { id: number; name: string }[] }) {
  return <ul>{products.map(p => <li key={p.id}>{p.name}</li>)}</ul>
}
```

## Checklist

- Reduzir JS no cliente quando possível; boundaries e suspense.
- Revisar efeitos e estado; medir e otimizar pontos críticos.
- Tooling atualizado; análise de bundle e acessibilidade.

## Referências

- React Docs: https://react.dev
- Padrões e aprendizado: https://react.dev/learn

