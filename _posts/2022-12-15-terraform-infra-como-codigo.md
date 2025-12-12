---
layout: post
title: "Terraform: infra como código"
date: 2022-12-15
excerpt: "Provisionamento declarativo e versionado."
tags: [terraform, iac, cloud]
comments: true
min_read_time: 20
auto_content: true
feature: "assets/img/logopost.jpg"
---

Estados, módulos e políticas.

Integração com pipelines.

## Boas Práticas

- Estados remotos com lock (S3 + DynamoDB); separar por ambiente.
- Módulos reutilizáveis; versionamento semântico; revisão de mudanças.
- Políticas (OPA/Conftest); validações e formatos (terraform fmt/validate).

## Exemplo

```hcl
terraform {
  backend "s3" { bucket = "iac-states" key = "prod/app/terraform.tfstate" region = "us-east-1" dynamodb_table = "iac-locks" }
}

module "network" { source = "./modules/network" vpc_cidr = "10.0.0.0/16" }
```

## Pipeline

- Passos: `fmt` → `init` → `validate` → `plan` → `apply` (aprovado).
- Gates: verificação de políticas, revisão de `plan`, controles de acesso.

## Checklist

- Estados remotos com lock; workspaces por ambiente.
- Módulos versionados; documentação; limites de blast radius.
- Observabilidade de mudanças e auditoria.

## Referências

- Terraform Docs: https://developer.hashicorp.com/terraform/docs
- AWS Provider: https://registry.terraform.io/providers/hashicorp/aws/latest/docs

