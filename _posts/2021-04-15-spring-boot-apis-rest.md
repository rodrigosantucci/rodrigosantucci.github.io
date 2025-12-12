---
layout: post
title: "Spring Boot: APIs REST"
date: 2021-04-15
excerpt: "Estrutura, validação e documentação com Springdoc/OpenAPI."
tags: [spring, java, rest]
comments: true
min_read_time: 20
auto_content: true
feature: "assets/img/logopost.jpg"
---

Configuração de controladores, serviços e repositórios.

Boas práticas de testes e integração contínua.

## Conceitos

- Controllers finos; regras no serviço; repositórios via Spring Data.
- DTOs e mapeamento para evitar exposição de entidades diretamente.
- Validação com Bean Validation (`@Valid`, constraints) e tratamento de erros.

## Boas Práticas

- Versionamento de API; paginação/ordenção padronizadas; ETags e cache quando aplicável.
- Documentação com Springdoc/OpenAPI; consistência de status codes e mensagens.
- Segurança: Spring Security; autenticação/autorizações por escopo/role.

## Exemplo

```java
// ProductController.java
@RestController
@RequestMapping("/api/v1/products")
class ProductController {
  private final ProductService service;
  ProductController(ProductService s) { this.service = s; }

  @GetMapping
  Page<ProductDto> list(@PageableDefault Pageable pageable) { return service.list(pageable); }

  @PostMapping
  ResponseEntity<ProductDto> create(@Valid @RequestBody ProductCreateDto dto) {
    var created = service.create(dto);
    return ResponseEntity.status(HttpStatus.CREATED).body(created);
  }
}
```

## Checklist

- DTOs + validação; tratamento uniforme de erros.
- Swagger/OpenAPI disponível; versionamento e paginação padrão.
- Segurança aplicada; testes e pipeline com qualidade.

## Referências

- Spring Boot Docs: https://docs.spring.io/spring-boot/docs/current/reference/html/
- Spring Web: https://docs.spring.io/spring-framework/docs/current/reference/html/web.html
- Spring Data: https://spring.io/projects/spring-data

