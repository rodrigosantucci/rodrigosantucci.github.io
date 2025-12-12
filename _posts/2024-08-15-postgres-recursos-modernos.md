---
layout: post
title: "PostgreSQL: recursos modernos"
date: 2024-08-15
excerpt: "JSONB, CTEs e índices avançados."
tags: [postgresql, banco-de-dados, sql]
comments: true
min_read_time: 20
auto_content: true
feature: "assets/img/logopost.jpg"
---

Modelagem e performance.

Ferramentas de migração.

## Recursos

- JSONB: consultas estruturadas e índices GIN; uso moderado; validação de esquema.
- Particionamento: por intervalo/lista; melhora manutenção e consultas de grandes tabelas.
- Índices: BTREE (default), GIN/GiST para texto/JSONB, BRIN para dados ordenados massivos.
- CTEs: organizar consultas complexas; cuidado com performance em versões antigas.

## Exemplos

```sql
-- Índice GIN para JSONB
CREATE INDEX idx_users_data_gin ON users USING GIN (data);

-- Particionamento por intervalo
CREATE TABLE events (
  id BIGSERIAL PRIMARY KEY,
  occurred_at TIMESTAMP NOT NULL,
  payload JSONB NOT NULL
) PARTITION BY RANGE (occurred_at);

CREATE TABLE events_2024_01 PARTITION OF events
  FOR VALUES FROM ('2024-01-01') TO ('2024-02-01');
```

## Checklist

- Escolher índice apropriado por padrão de consulta; revisar planos (`EXPLAIN ANALYZE`).
- Considerar partição para grandes tabelas; políticas de retenção.
- Monitorar vacuums, autovacuum e bloat; otimizar configurações.

## Referências

- PostgreSQL Docs: https://www.postgresql.org/docs/
- Índices: https://www.postgresql.org/docs/current/indexes.html

