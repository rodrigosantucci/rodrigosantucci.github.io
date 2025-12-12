---
layout: post
title:  "Princípios S.O.L.I.D"
date:   2020-09-08
excerpt: "Explicação conceitual dos princípios SOLID criado pelo famoso Engenheiro de Software Robert C. Martin"
tags:
- solid
- poo
- boas práticas
- desenvolvimento
- clean code
- programacao orientada a objeto
comments: true
feature: "/../assets/img/logosolid.jpg"  

---
<center><h1>S.O.L.I.D</h1> </center>

É um acrônimo dos 5 princípios de desenvolvimento orientado a objetos que nada mais nada menos são guias a serem seguidos quando o objetivo é construir um software que seja escalável e de fácil manutenção, esses 5 princípios foram criados por um famoso engenheiro de software chamado Robert C. Martin, o famoso "Uncle Bob".

<figure class="center">
   <img style="width:200px; height:200px;" src="https://live.staticflickr.com/8371/8580054912_45a48660fe_b.jpg">
</figure>

O objetivo principal, é obter de maneira mais simples um entendimento desses princípios que em primeiro momento podem ser um pouco complexos.

Os exemplos serão voltados a Classes para um melhor entendimento, porém podem ser aplicados para Funções, métodos ou até mesmo módulos.



# Os princípios SOLID

## S - Single Responsibility
Uma classe deve ter somente uma responsabilidade. Se uma classe possui muitas responsabilidades, a chance de ocorrerem bugs ao serem feitas alterações em uma dessas responsabilidades aumenta, bem como esses bugs afetaram outras responsabilidades sem que o desenvolvedor saiba.

### Objetivo:
 O princípio Single Responsibility visa separar o comportamento das classes, para que ao se deparar com bugs resultantes de alguma mudança, um comportamento não relacionado com a classe alterada não será afetado.

---

## O - Open-Closed
Classes devem ser abertas para extensões, porém fechadas para modificações. Mudar o comportamento corrente da classe, afetará todos os sistemas utilizando a classe. Se a intenção for adicionar mais funções a classe, a abordagem ideal é adicionar a nova funcionalidade a classe sem que seja modificada a função que ja existe.

### Objetivo:
Esse princípio tem como objetivo **ESTENDER** o comportamento da classe sem **ALTERAR** o comportamento já existente. Essa prática visa evitar erros quando a classe estiver em uso.

---

## L — Liskov Substitution
Na substituição de Liskov, em um programa se S é um subtipo de T, então os objetos do tipo T, poderão ser substituídos com objetos do tipo S sem alterar nenhuma propriedade desejável desse programa. Quando uma classe filho(subtipo S do exemplo acima) não pode executar as mesmas ações sua classe pai(subtipo T), erros podem acontecer. 

Em uma **HERANÇA**, a classe filho deve ser capaz de processar e entregar o mesmo resultado ou um resultado do mesmo tipo que a classe pai.

### Objetivo:
Pensando em uma associação de palavras, uma **CLASSE** nada mais é do que o produto de uma **CLASSIFICAÇÃO**, um agrupamento de semelhantes ou parecidos. Sendo assim, desempenhando funções parecidas, esta prática visa uma maior consistência no código sem erros.

---

## I — Interface Segregation
Na segregação de interface, os clientes não devem ser obrigados a depender dos métodos que eles não utilizam. Se uma Classe é forçada a executar ações que não são solicitadas, é criada a eminência de bugs. Uma Classe deve executar apenas ações que forem necessárias para cumprir sua função.

### Objetivo:
Esse princípio tem como objetivo dividir um conjunto de ações em conjuntos menores. Sendo assim, uma **CLASSE** executará **SOMENTE** o conjunto de ações que lhe for solicitada.

---

## D — Dependency Inversion
A partir de uma **Classe** que desempenhe uma função X que depende de uma **Ferramenta**, essa **Classe** não deverá ser dependente da **Ferramenta** para desempenhar sua função, e sim, uma **Abstração** que nada mais é do que uma interface que liga a **Classe** a **Ferramenta** que ela necessita. Essa **Abstração** deverá conter escopo do funcionamento da **Ferramenta**, porém, a **Ferramenta** precisará atender as especificações da interface.

### Objetivo:
O objetivo dessa prática visa diminuir a dependência de uma classe do sistema na ferramenta utilizada a partir da interface entre elas.


### Fonte: [Ugonna Thelma](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)


---




### Dúvidas?
Ficou com dúvida? me chama lá no [GitHub](https://github.com/rodrigosantucci/).


<center><b>Esse conteúdo foi útil?</b></center>

[![Donate](https://img.shields.io/badge/paypal-donate-blue.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2X9NF2H8CTTU4&source=url)

