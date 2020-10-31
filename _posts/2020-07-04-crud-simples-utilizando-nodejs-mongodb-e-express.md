---
layout: post
title:  "CRUD simples utilizando Node.js, MongoDB e Express"
date:   2020-07-18
excerpt: "Criaremos hoje um Create,Read,Update e Delete básico utilizando o NodeJS e Express no backend e como banco de dados, utilizaremos o MongoDB."
tag:
- node 
- nodejs
- mongodb
- dev
- code
- express
- crud
comments: true
feature: "/../assets/img/featurecrud.jpg"   
project: false 
---

![Homepage](/../assets/img/logopost.jpg)    
    
*Olá, dessa vez estaremos desenvolvendo um <b>CRUD</b> básico utilizando o <b>Node.js</b> que é um interpretador de Javascript voltado para o server-side das aplicações. Neste projeto, utilizaremos como banco de dados o <b>MongoDB</b> e também um framework chamado <b>Express</b>, que facilita a criação do servidor web.* *Lembrando que alguns passos desse guia serão feitos no SO Linux, após a instalação das ferramentas necessárias, os passos podem ser aproveitados também em SO Windows.*

 Se esse conteúdo é valioso pra você, clique no botão abaixo para demonstrar sua satisfação, muito obrigado.

<iframe src="https://ghbtns.com/github-btn.html?user=rodrigosantucci/rodrigosantucci.github.io&repo=&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>    
      
### Apresentação rápida     
* `NodeJS`:
é um interpretador de Javascript open source e roda em todos sistemas operacionais. Ele é focado em migrar o Javascript do client-side para o server-side. Seu objetivo é ajudar programadores na criação de aplicações de alta escalabilidade, com códigos capazes de manipular dezenas de milhares de conexões simultâneas, numa única máquina física. O Node.js é baseado no interpretador V8 JavaScript Engine (interpretador de JavaScript open source implementado pelo Google em C++ e utilizado pelo Chrome). Foi criado por Ryan Dahl em 2009, e seu desenvolvimento é mantido pela fundação Node.js em parceria com a Linux Foundation.


* `Express`: 
Express.js(ou apenas Express) é um framework para aplicações web para Node.js, lançado como software livre e de código aberto sob a Licença MIT. É utilizado para otimizar a construção de aplicações web e API's.

* `MongoDB`:
 O MongoDB é um banco de dados orientado a documentos (document database) no formato JSON, ou seja, diferente de um banco de dados relacional, ele não possui como restrição a necessidade de ter as tabelas e colunas criadas previamente, permitindo que um documento represente toda a informação necessária, com todos os dados que você queira, no formato de um JSON.

### Instalação do Node

> Instalação do [NodeJS](https://nodejs.org/en/download/)



### Iniciando o projeto

Vamos iniciar o projeto abrindo o terminal e criando uma pasta dentro de sua pasta de projetos que será a pasta raíz do projeto. Nesse mesmo terminal, dentro da pasta raiz do projeto, utilizaremos o comando `npm init` para criar o arquivo *package.json* que é responsável por gerenciar as dependências do projeto. 
{% highlight js %}
$ mkdir crudsimples

$ npm init
{% endhighlight %}

Após a criação do *package.json*, criaremos o arquivo responsável por agrupar as configurações de servidor do nosso projeto. A estrutura deverá ser exatamente esta:

<figure>
    <img src="/../assets/img/1.png">
</figure>


### Instalando o Express
Dentro da pasta raiz do projeto, instalaremos o *Express* com o comando abaixo, feito isso, automaticamente o *Express* será relacionado no arquivo *package.json*

{% highlight js %}
$ npm install express --save
{% endhighlight %}

Após a instalação do *Express* iremos configurar o arquivo `servidor.js`, utilizando o método `listen()` do *Express*, passando a porta 5000 como parâmetro para que o nosso servidor escute as requisições utilizando a porta especificada, como mostra a imagem abaixo:

<figure>
    <img src="/../assets/img/2.png">
</figure>

Feitas as configurações do *Express*,podemos rodar nosso servidor utilizando o comando: 
{% highlight js %}
$ node servidor.js
{% endhighlight %}

Com isso, podemos acessar a pagina Web no endereço `localhost:5000`, a pagina deverá retornar a seguinte mensagem:

<figure>
    <img src="/../assets/img/3.png">
</figure>



### Dúvidas?
Ficou com dúvida? me chama lá no [GitHub](https://github.com/rodrigosantucci/).

---

<center><b>Esse conteúdo foi útil?</b></center>

[![Donate](https://img.shields.io/badge/paypal-donate-blue.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2X9NF2H8CTTU4&source=url)

