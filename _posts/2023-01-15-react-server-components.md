---
layout: post
title: "React Server Components"
date: 2023-01-15
excerpt: "Renderização no servidor e novos padrões de dados."
tags: [react, rsc, arquitetura]
comments: true
min_read_time: 20
auto_content: true
feature: "assets/img/logopost.jpg"
---

Benefícios de performance e limitações práticas.

Estratégias de migração.

## Conceitos

- Server Components: executam no servidor; reduzem JS no cliente; acesso direto a dados/segredos.
- Client Components: interativos; marcam com `'use client'`; limites de compartilhamento.
- Boundaries: separar responsabilidades; evitar passar funções/estado complexo de server→client.

## Boas Práticas

- Data‑fetching no server; evitar duplicar chamadas no client.
- Cache e streaming: respostas parciais; UX responsiva com `loading` boundaries.
- Serialização: props simples; evitar objetos não serializáveis.

## Exemplo

```tsx
// app/users/page.tsx (server component)
export default async function Page() {
  const res = await fetch('https://api.example.com/users', { cache: 'no-store' })
  const users = await res.json()
  return <ul>{users.map((u: any) => <li key={u.id}>{u.name}</li>)}</ul>
}

// components/UserFilter.tsx (client component)
'use client'
export function UserFilter({ onChange }: { onChange: (q: string) => void }) {
  return <input onChange={(e) => onChange(e.target.value)} />
}
```

## Checklist

- Definir boundaries server/client; minimizar JS no client.
- Usar streaming e `loading` para UX; cache por dado.
- Serialização segura e props simples entre componentes.

## Referências

- React Docs: https://react.dev
- Server Components Guide: https://react.dev/learn/server-and-client-components

