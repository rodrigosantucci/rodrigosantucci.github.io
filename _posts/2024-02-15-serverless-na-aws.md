---
layout: post
title: "Serverless na AWS"
date: 2024-02-15
excerpt: "Arquiteturas de funções e APIs gerenciadas."
tags: [aws, serverless, arquitetura]
comments: true
min_read_time: 20
auto_content: true
feature: "assets/img/logopost.jpg"
---

Boas práticas de cold start, custos e monitoramento.

Casos de uso em APIs.

## Padrões

- Lambda + API Gateway: endpoints stateless; autenticação no gateway; mapping templates.
- Step Functions: orquestração de fluxos; tolerância a falhas; compensações.
- Event‑Driven: SQS/SNS; integração com DynamoDB streams; desacoplamento.

## Boas Práticas

- Cold Start: linguagens/ambiente leves; provisioned concurrency em rotas críticas.
- Observabilidade: logs estruturados (Lambda Powertools), métricas e tracing (X‑Ray).
- Custos: rightsizing, tempo de execução, chamadas externas; uso de SQS para amortecer picos.

## Exemplo

```js
// handler.js
exports.handler = async (event) => {
  return { statusCode: 200, body: JSON.stringify({ ok: true }) }
}
```

## Checklist

- Definir SLAs e throughput; configurar provisioned concurrency quando necessário.
- Autenticação/autorização no gateway; observabilidade end‑to‑end.
- Governança de custos e limites; usar filas para resilência.

## Referências

- AWS Lambda: https://docs.aws.amazon.com/lambda/latest/dg/welcome.html
- API Gateway: https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html
- Serverless Framework: https://www.serverless.com/framework/docs

