---
layout: post
title: "Performance no Front-end"
date: 2022-02-15
excerpt: "Estratégias para reduzir tempo de carregamento e melhorar UX."
tags: [performance, frontend, web]
comments: true
min_read_time: 20
auto_content: true
feature: "assets/img/logopost.jpg"
---

Optimizações de imagens, código e rede.

Métricas e monitoramento contínuo.

## Orçamento de Performance

- Defina limites para LCP/CLS/INP, tamanho de JS/CSS, número de requests e tempo de TTI.
- Avalie impacto por página crítica e monitore em produção.

## Otimizações

- Imagens: formatos modernos (WebP/AVIF), `srcset`, lazy loading (`loading="lazy"`).
- Código: divisão por rotas, eliminação de dead code, compressão (Gzip/Brotli), `modulepreload`.
- Rede: cache eficiente, HTTP/2+ multiplexing, `preconnect` para domínios críticos.

## Exemplo

```html
<img src="/img/hero.webp" loading="lazy" alt="Hero" />
<link rel="preconnect" href="https://api.example.com" crossorigin>
```

## Medição

- Use RUM (ex.: web‑vitals) para medir em produção; Lighthouse para auditoria.
- Colete métricas por usuário, dispositivo e rede; defina alertas.

## Checklist

- Orçamento definido e verificado em CI.
- Imagens otimizadas; code splitting e cache.
- Monitoramento contínuo com alarmes por regressão.

## Referências

- Web Vitals: https://web.dev/vitals/
- Lighthouse: https://developer.chrome.com/docs/lighthouse/overview/

