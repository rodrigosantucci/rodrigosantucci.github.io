---
layout: post
title: "Docker Compose para devs"
date: 2022-05-15
excerpt: "Orquestração simples de serviços locais."
tags: [docker, compose, dev]
comments: true
min_read_time: 20
auto_content: true
feature: "assets/img/logopost.jpg"
---

Definição de redes, volumes e dependências.

Padrões para dev e testes.

## Conceitos

- Serviços: containers orquestrados com dependências e healthchecks.
- Redes e Volumes: isolamento de tráfego e persistência de dados.
- Variáveis: `.env` para configurar credenciais e endpoints.

## Exemplo

```yaml
version: "3.9"
services:
  web:
    build: .
    ports: ["3000:3000"]
    env_file: [.env]
    depends_on: [db]
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3000/health"]
      interval: 10s
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: example
    volumes:
      - pgdata:/var/lib/postgresql/data
volumes:
  pgdata: {}
```

## Boas Práticas

- Healthchecks e `depends_on` com limites.
- Compose por ambiente; separar dev/test; usar nomes de projeto.
- Networks isoladas; volumes nomeados; não versionar segredos.

## Checklist

- `.env` padronizado; isolamento de serviços.
- Healthchecks e logs; limpeza periódica de volumes.
- Scripts de subida/derrubada com verificação.

## Referências

- Docker Docs: https://docs.docker.com/
- Compose: https://docs.docker.com/compose/

