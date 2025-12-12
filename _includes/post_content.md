{% assign topic = include.topic | default: page.title %}
{% assign t = topic | downcase %}

## Introdução

Este guia apresenta **{{ topic }}** com foco prático e propósito educacional: entender o porquê, quando aplicar e como implementar com segurança e qualidade.

## Conceitos-Chave

- Objetivo e contexto: problemas que {{ topic }} resolve e limitações.
- Critérios de adoção: sinais de prontidão, maturidade e riscos.
- Boas práticas: padrões que reduzem complexidade e aumentam confiabilidade.

## Exemplo Prático

{% if t contains 'react' %}
### Componentização e dados em React

```tsx
// App.tsx
import { useEffect, useState } from 'react'

type Todo = { id: number; title: string; done: boolean }

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  useEffect(() => { fetch('/api/todos').then(r => r.json()).then(setTodos) }, [])
  return (
    <main>
      <h1>Lista</h1>
      {todos.map(t => (
        <label key={t.id}>
          <input type="checkbox" defaultChecked={t.done} /> {t.title}
        </label>
      ))}
    </main>
  )
}
```

{% elsif t contains 'nextjs' or t contains 'next.js' %}
### Rotas App Router em Next.js

```tsx
// app/api/todos/route.ts
import { NextResponse } from 'next/server'
export async function GET() { return NextResponse.json([{ id: 1, title: 'Learn', done: false }]) }
```

{% elsif t contains 'node' or t contains 'express' %}
### API HTTP com Express

```js
// app.js
const express = require('express')
const app = express()
app.use(express.json())
app.get('/health', (_, res) => res.json({ status: 'ok' }))
app.get('/info', (_, res) => res.json({ topic: '{{ topic }}', message: 'Exemplo funcional' }))
app.listen(3000)
```

{% elsif t contains 'kubernet' %}
### Implantação no Kubernetes

```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata: { name: demo }
spec:
  replicas: 2
  selector: { matchLabels: { app: demo } }
  template:
    metadata: { labels: { app: demo } }
    spec:
      containers:
        - name: api
          image: node:20-alpine
          command: ['node','app.js']
          ports: [{ containerPort: 3000 }]
```

{% elsif t contains 'terraform' %}
### Infra como código com Terraform

```hcl
# main.tf
provider "aws" { region = "us-east-1" }
resource "aws_s3_bucket" "logs" { bucket = "{{ topic | downcase | replace: ' ', '-' }}-logs" }
```

{% elsif t contains 'graphql' %}
### Schema GraphQL básico

```graphql
type Query { hello: String }
schema { query: Query }
```

{% elsif t contains 'redis' %}
### Cache com Redis

```ts
import Redis from 'ioredis'
const redis = new Redis(process.env.REDIS_URL)
await redis.set('key', 'value', 'EX', 60)
```

{% elsif t contains 'postgres' or t contains 'sql' %}
### Consulta SQL

```sql
SELECT id, title FROM posts WHERE published = true ORDER BY created_at DESC;
```

{% elsif t contains 'oauth' or t contains 'oidc' %}
### Fluxo OAuth2/OIDC (PKCE)

```bash
curl -X POST $AUTH/token -d 'grant_type=authorization_code&code=...&code_verifier=...'
```

{% elsif t contains 'finops' %}
### Orçamento e custos

```json
{ "service": "compute", "budget": 200, "period": "month" }
```

{% elsif t contains 'slo' or t contains 'confiabilidade' %}
### Definição de SLO

```yaml
target: 99.9
window: 30d
indicator: http_success_rate
```

{% elsif t contains 'operator' %}
### CRD para Operator

```yaml
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata: { name: widgets.example.com }
```

{% elsif t contains 'webassembly' or t contains 'wasm' %}
### Invocando WASM

```js
const wasm = await WebAssembly.instantiateStreaming(fetch('/module.wasm'))
```

{% elsif t contains 'htmx' %}
### Interação com HTMX

```html
<button hx-get="/partial" hx-target="#out">Carregar</button>
<div id="out"></div>
```

{% elsif t contains 'feature flags' or t contains 'flags' %}
### Feature Flags

```ts
if (flags.isEnabled('newCheckout')) { renderNew() } else { renderOld() }
```

{% else %}
### Exemplo genérico

```bash
echo "{{ topic }}"
```
{% endif %}

## Checklist de Implementação

- Defina objetivo e métricas de sucesso de {{ topic }}.
- Estruture projeto (módulos, testes, observabilidade).
- Automação mínima (lint, testes, pipeline).

## Imagens

![{{ topic }}](https://source.unsplash.com/1200x675/?{{ t | replace: ' ', ',' }})

## Próximos Passos

- Crie um demo funcional de {{ topic }}.
- Documente decisões e trade-offs.
- Monitore e iterar com métricas.

