---
layout: post
title: "FinOps: otimização de custos"
date: 2024-10-15
excerpt: "Disciplina de custos em cloud e KPIs."
tags: [finops, cloud, custos]
comments: true
min_read_time: 20
auto_content: true
feature: "assets/img/logopost.jpg"
---

Transparência, orçamento e chargeback.

Ferramentas e processos.
## Princípios

- Visibilidade: tagging padronizado; dashboards por produto/time/ambiente.
- Responsabilização: chargeback/showback; metas e limites por unidade de negócio.
- Otimização Contínua: rightsizing, instâncias reservadas/spot, eliminação de desperdícios.

## KPIs e Métricas

- Custo por transação/usuário/feature; custo por ambiente; tendência por release.
- Eficiência: uso de CPU/memória; custo por throughput; economia por reservas.

## Práticas

- Tagging: `app`, `owner`, `env`, `cost-center` obrigatórios.
- Orçamento: limites e alertas; políticas de aprovação para picos.
- Acordos: compromissos de consumo (RI/Savings Plans); monitorar utilização.

## Exemplo

```json
{ "service": "compute", "budget": 2000, "period": "month", "owner": "payments" }
```

## Checklist

- Tags padronizadas; visibilidade por unidade e produto.
- Orçamentos e alertas; revisão mensal com ações concretas.
- Uso de spot/reservas; direitosizing e eliminação de ociosidade.

## Referências

- FinOps Foundation: https://www.finops.org/
- AWS Cost Management: https://docs.aws.amazon.com/cost-management/
- Cloud Architecture Guides: https://cloud.google.com/architecture

