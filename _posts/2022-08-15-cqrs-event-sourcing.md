---
layout: post
title: "CQRS e Event Sourcing"
date: 2022-08-15
excerpt: "Separação de leitura/escrita e trilha de eventos."
tags: [cqrs, eventos, arquitetura]
comments: true
min_read_time: 20
auto_content: true
feature: "assets/img/logopost.jpg"
---

Consistência eventual e projeções.

Casos práticos e trade-offs.

## Arquitetura

- Write Model: comandos validam regras de negócio e persistem eventos.
- Event Store: registro imutável; replays para reconstrução e auditoria.
- Read Model: projeções materializadas para consultas rápidas.

## Padrões

- Idempotência em handlers; ordenação por versão; snapshots para reduzir replays.
- Resiliência: filas e reprocessamento; monitoramento de atrasos de projeção.

## Fluxo

```mermaid
sequenceDiagram
  Command->>WriteModel: PlaceOrder
  WriteModel->>EventStore: OrderPlaced
  EventStore-->>Projector: OrderPlaced
  Projector->>ReadDB: Upsert (order view)
  UI->>ReadDB: Query (orders)
```

## Exemplo (pseudo‑código)

```ts
type OrderPlaced = { id: string; items: Item[]; occurredAt: Date }
function handlePlaceOrder(cmd) { validate(cmd); appendEvent('OrderPlaced', cmd) }
function projector(event) { upsertView(event.id, computeView(event)) }
```

## Checklist

- Separar comandos/consultas; versionar eventos; documentar contratos.
- Projetores com tolerância a falhas; observabilidade de lag; backups do event store.

## Referências

- Event Sourcing (M. Fowler): https://martinfowler.com/eaaDev/EventSourcing.html
- Greg Young: https://cqrs.wordpress.com/

