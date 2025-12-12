---
layout: post
title: "OAuth2/OIDC: segurança moderna"
date: 2024-11-15
excerpt: "Fluxos, escopos e proteção de APIs."
tags: [oauth2, oidc, seguranca]
comments: true
min_read_time: 20
auto_content: true
feature: "assets/img/logopost.jpg"
---

Boas práticas de tokens e rotação.

Integração com gateways.

## Conceitos e Fluxos

- Authorization Code + PKCE: apps públicos geram/verificam `code_verifier`; evita vazamento de código.
- Scopes e Claims: autorize por escopo; claims em JWT para contexto do usuário.
- Rotação de Tokens: expiração curta de access tokens; refresh com limites e revogação.

## Boas Práticas

- Não use `implicit flow`; prefira `Auth Code + PKCE`.
- Assine JWT com chave assimétrica (RS256/ES256); publique JWKS.
- Valide `aud`, `iss`, `exp`, `nbf`, `iat`; verifique assinatura e escopos.
- Use `state` anti‑CSRF; `nonce` para OIDC; armazene tokens com segurança.

## Exemplos

```bash
# Token endpoint (PKCE) — exemplo
curl -X POST $AUTH/token \
  -d 'grant_type=authorization_code&code=...&code_verifier=...&client_id=...&redirect_uri=...'
```

```json
// Claims em JWT (exemplo)
{
  "iss": "https://idp.example.com",
  "aud": "api://payments",
  "exp": 1730000000,
  "scope": "payments:read payments:write",
  "sub": "user-123",
  "nonce": "..."
}
```

## Integração em Gateway

- Verificação de assinatura e validade de JWT; cache de JWKS.
- Mapeamento de escopos para rotas; rate limiting; observabilidade.

## Checklist

- Adotar `Auth Code + PKCE`; remover implicit.
- Validar tokens e escopos em todas as chamadas.
- Implementar rotação e revogação; proteger refresh tokens.

## Referências

- OAuth2 RFC 6749: https://datatracker.ietf.org/doc/html/rfc6749
- PKCE RFC 7636: https://datatracker.ietf.org/doc/html/rfc7636
- OIDC Core: https://openid.net/specs/openid-connect-core-1_0.html

