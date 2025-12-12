---
layout: post
title: "Core Web Vitals"
date: 2023-07-15
excerpt: "Métricas de UX e otimização prática."
tags: [web-vitals, performance, ux]
comments: true
min_read_time: 20
auto_content: true
feature: "assets/img/logopost.jpg"
---

Medir, analisar e melhorar LCP, CLS e FID.

Ferramentas de monitoramento.

## Métricas

- LCP (Largest Contentful Paint): tempo até renderizar o maior elemento visível.
- CLS (Cumulative Layout Shift): estabilidade visual.
- INP (Interaction to Next Paint): latência de interação (substitui FID).

## Como Melhorar

- LCP: otimizar imagens e fontes críticas; pré‑conexão a CDNs; reduzir bloqueios.
- CLS: reservar espaço para mídia; não inserir conteúdo acima da dobra; carregar fontes de forma estável.
- INP: evitar handlers pesados; uso de web workers; debouncing e batching de atualizações.

## Exemplo

```html
<link rel="preload" as="image" href="/img/hero.webp">
<img src="/img/hero.webp" width="1200" height="675" alt="hero" />
```

## Medição em Produção

- Coletar web‑vitals via RUM; segmentar por dispositivo, rede e página.
- Definir thresholds e alertas; investigar regressões e criar planos de ação.

## Checklist

- Orçamento de performance atrelado a LCP/CLS/INP.
- Otimização de artefatos críticos; evitar shifts de layout.
- Monitoramento contínuo e correções orientadas por dados.

## Referências

- Web Vitals: https://web.dev/vitals/
- Lighthouse: https://developer.chrome.com/docs/lighthouse/overview/

