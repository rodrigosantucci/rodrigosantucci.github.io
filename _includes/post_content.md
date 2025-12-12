{% assign topic = include.topic | default: page.title %}
{% assign t = topic | downcase %}

## Introdução

Este guia apresenta **{{ topic }}** com foco prático e propósito educacional: entender o porquê, quando aplicar e como implementar com segurança e qualidade.

## Conceitos-Chave

- Objetivo e contexto: problemas que {{ topic }} resolve e limitações.
- Critérios de adoção: sinais de prontidão, maturidade e riscos.
- Boas práticas: padrões que reduzem complexidade e aumentam confiabilidade.

## Instalação/Setup

- Prepare ambiente e ferramentas (gerenciador de versões, pacote, IDE).
- Configure variáveis de ambiente e arquivos de projeto.
- Defina scripts de automação (lint, test, build).

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

## Passo a Passo

1. Defina objetivo e escopo de {{ topic }}.
2. Modele dados e fluxos principais.
3. Implemente o mínimo viável com testes.
4. Avalie desempenho e segurança.
5. Documente decisões e padrões.

## Checklist de Implementação

- Defina objetivo e métricas de sucesso de {{ topic }}.
- Estruture projeto (módulos, testes, observabilidade).
- Automação mínima (lint, testes, pipeline).

## Imagens

![{{ topic }}](https://source.unsplash.com/1200x675/?{{ t | replace: ' ', ',' }}&sig={{ page.date | date: '%s' }})

![Diagrama/Fluxo](https://source.unsplash.com/1200x675/?diagram,architecture,system&sig={{ page.date | date: '%s' }}1)

## Próximos Passos

- Crie um demo funcional de {{ topic }}.
- Documente decisões e trade-offs.
- Monitore e iterar com métricas.

## Referências e Bibliografia

{% if t contains 'git' %}
- Documentação Git: https://git-scm.com/docs
- Livro Pro Git (Apress): https://git-scm.com/book/en/v2
- GitHub Docs: https://docs.github.com
{% elsif t contains 'node' or t contains 'express' %}
- Node.js Docs: https://nodejs.org/en/docs
- Express Guide: https://expressjs.com/en/guide/routing.html
- ECMAScript Spec: https://tc39.es/ecma262/
{% elsif t contains 'react' %}
- React Docs: https://react.dev
- Guia de Hooks: https://react.dev/reference/react
- Patterns: https://react.dev/learn/thinking-in-react
{% elsif t contains 'nextjs' or t contains 'next.js' %}
- Next.js Docs: https://nextjs.org/docs
- App Router: https://nextjs.org/docs/app
- Data Fetching: https://nextjs.org/docs/app/building-your-application/data-fetching
{% elsif t contains 'kubernet' %}
- Kubernetes Docs: https://kubernetes.io/docs/home/
- Deployments: https://kubernetes.io/docs/concepts/workloads/controllers/deployment/
- Operators: https://kubernetes.io/docs/concepts/extend-kubernetes/operator/
{% elsif t contains 'terraform' %}
- Terraform Docs: https://developer.hashicorp.com/terraform/docs
- AWS Provider: https://registry.terraform.io/providers/hashicorp/aws/latest/docs
- IaC Patterns: https://developer.hashicorp.com/terraform/enterprise
{% elsif t contains 'graphql' %}
- GraphQL Spec: https://spec.graphql.org
- Apollo Guide: https://www.apollographql.com/docs/
- Schema Design: https://graphql.org/learn/schema/
{% elsif t contains 'redis' %}
- Redis Docs: https://redis.io/docs/latest/
- ioredis: https://github.com/luin/ioredis
- Caching Patterns: https://redis.io/docs/latest/develop/
{% elsif t contains 'postgres' or t contains 'sql' %}
- PostgreSQL Docs: https://www.postgresql.org/docs/
- SQL Tutorial: https://www.postgresql.org/docs/current/tutorial.html
- Indexes: https://www.postgresql.org/docs/current/indexes.html
{% elsif t contains 'oauth' or t contains 'oidc' %}
- OAuth2 RFC 6749: https://datatracker.ietf.org/doc/html/rfc6749
- PKCE RFC 7636: https://datatracker.ietf.org/doc/html/rfc7636
- OIDC Core: https://openid.net/specs/openid-connect-core-1_0.html
{% elsif t contains 'finops' %}
- FinOps Foundation: https://www.finops.org/
- Cloud Cost Guides: https://cloud.google.com/architecture
- AWS Cost Management: https://docs.aws.amazon.com/cost-management/
{% elsif t contains 'slo' or t contains 'confiabilidade' %}
- Google SRE Book: https://sre.google/sre-book/table-of-contents/
- SLOs: https://sre.google/sre-book/service-level-objectives/
- Error Budgets: https://sre.google/sre-book/error-budget/
{% elsif t contains 'operator' %}
- Kubernetes Operators: https://kubernetes.io/docs/concepts/extend-kubernetes/operator/
- Operator Framework: https://operatorframework.io/
- CRDs: https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/
{% elsif t contains 'webassembly' or t contains 'wasm' %}
- WebAssembly Docs: https://webassembly.org/docs/
- MDN WASM: https://developer.mozilla.org/docs/WebAssembly
- WASI: https://github.com/WebAssembly/WASI
{% elsif t contains 'htmx' %}
- HTMX Docs: https://htmx.org/docs/
- Patterns: https://htmx.org/essays/
- Hypermedia: https://restfulapi.net/hateoas/
{% elsif t contains 'feature flags' or t contains 'flags' %}
- Feature Toggles (M. Fowler): https://martinfowler.com/articles/feature-toggles.html
- Unleash Docs: https://docs.getunleash.io
- LaunchDarkly Concepts: https://docs.launchdarkly.com/concepts
{% else %}
- Documentação oficial relacionada ao tema.
- Referências técnicas e RFCs aplicáveis.
- Guias e livros especializados.
{% endif %}
