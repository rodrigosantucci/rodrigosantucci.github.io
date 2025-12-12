---
layout: post
title: "Supply chain de dependências"
date: 2025-11-15
excerpt: "Segurança de pacotes e verificação contínua."
tags: [seguranca, supply-chain, devsecops]
comments: true
min_read_time: 20
auto_content: true
feature: "assets/img/logopost.jpg"
---

Assinaturas, verificação e SBOM.

Alertas e correções.

## Controles e Políticas

- SBOM: gere e publique inventário de componentes por release.
- SCA: análise contínua de vulnerabilidades; bloqueio de versões com CVEs críticos.
- Assinaturas: assinar e verificar artefatos (Sigstore/Cosign); reprodutibilidade de builds.
- Policies: permitir‑list de fontes confiáveis; mirror interno; verificação de integridade.

## Pipeline

- Build: verificação de dependências (SCA), assinatura de artefatos e geração de SBOM.
- Deploy: validação de assinatura; checagem de políticas; auditoria de versões.

## Exemplo

```bash
# Cosign — assinar imagem
cosign sign registry.example.com/app:1.2.3
# Cosign — verificar assinatura
cosign verify registry.example.com/app:1.2.3 --key cosign.pub
```

## Checklist

- SBOM por release; SCA no pipeline; políticas de bloqueio.
- Assinaturas de imagens/pacotes; verificação no deploy.
- Mirror interno e cache; fontes confiáveis; auditoria contínua.

## Referências

- Sigstore/Cosign: https://www.sigstore.dev/
- CycloneDX: https://cyclonedx.org/
- SLSA: https://slsa.dev/

