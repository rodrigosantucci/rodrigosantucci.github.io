---
layout: post
title:  "Guia de comandos básicos do Git para iniciantes"
date:   2020-07-04
excerpt: "Guia prático com os comandos mais utilizados do git e suas funcionalidades."
tags:
- git 
- guia
- cli
- versionamento
- básico
- iniciante
comments: true
auto_content: true
feature: "/../assets/img/featuregitbasico.png"  

---

![Homepage](/../assets/img/git-logo.png)    
    
<center>O <b>Git</b> é um sistema de versionamento distribuído, usado no desenvolvimento de quase todas as tecnologias ativas no mercado. Nesse guia, não será abordada a parte conceitual do Git, somente serão apresentados os comandos básicos e suas utilidades.</center>
     
 Se esse conteúdo é valioso pra você, clique no botão abaixo para demonstrar sua satisfação, muito obrigado.

<iframe src="https://ghbtns.com/github-btn.html?user=rodrigosantucci/rodrigosantucci.github.io&repo=&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>    
      
## Instalação
* Download para [OSX](https://git-scm.com/download/mac)
* Download para [Windows](https://gitforwindows.org)
* Download para [Linux](https://git-scm.com/download/linux)

  

---
## Definindo seu nome
Uma das primeiras coisas a serem feitas quando se inicia a utilização do GIT, é a definição de sua identidade, no git quando é feito o commit, é mostrado o autor da alteração, que será definido a partir do seguinte comando:
 {% highlight cli %}
 git config --global user.name "Seu Nome"
 git config --global user.email seu@email.com
 {% endhighlight cli %}
 
O git tambem permite que seja alterado a cor do seu nome, com o comando:
 {% highlight cli %}
 git config --global color.ui true
 {% endhighlight cli %}  

---

## Criando repositório
Crie uma pasta, a pasta criada, será a pasta raiz do seu projeto, onde você criará seu repositório com o comando: 
  {% highlight cli %}
  git init
  {% endhighlight cli %}


---
## Atualizando repositório local
Após criado o repositório local, é importante que ele esteja em conformidade com o repositório remoto, para isso utilize o comando:
  {% highlight cli %}
  git pull
  {% endhighlight cli %}
---
## Baixando um repositório
* Baixando de servidor
  {% highlight cli %}
  git clone usuario@servidor:/caminho-do-repositorio/
  {% endhighlight cli %}
* Baixando do GitHub
  {% highlight cli %}
  git clone https://url-no-github/ /caminho/que/deseja/baixar
  {% endhighlight cli %} 

---
## Gravando alterações
Dentro do seu repositório, após feitas as alterações desejadas, você deve grava-las, para então posteriormente "commita-las". O comando para gravar as alterações feitas no codigo do seu projeto é o:
  {% highlight cli %}
  git add [nome do arquivo]
  {% endhighlight cli %} 
Caso queira gravar todas as alterações, utilize `*` no lugar do nome do arquivo do exemplo acima.

---
## Verificando status dos arquivos
Após gravadas as alterações, você pode verificar o status dos arquivos, em qual branch você se encontra e todos os arquivos que tiveram e não tiveram alterações com o comando:
{% highlight cli %}
git status
{% endhighlight cli %} 

---
## Commit
Para que sejam confirmadas as mudanças feitas em seu código será necessário "commitar" o código com o seguinte comando:
{% highlight cli %}
git commit -m "comentário de alterações"
{% endhighlight cli %}
Após a confirmação, as alterações feitas no códigos são enviadas para o HEAD, que é o ultimo estágio antes do envio para o servidor remoto.

É possivel também verificar todos os commits, com o comando:
{% highlight cli %}
git log
{% endhighlight cli %}

---
## Ramificando 
O branches, são utilizadas para o desenvolvimento de funcionalidades isoladas dentro do mesmo sistema, de maneira simultanea. O branch master é o branch "padrão" do repositorio, para criar outra branch utilize o comando:
{% highlight cli %}
git checkout -b nomedabranch
{% endhighlight cli %}
para retornar para a branch master
{% highlight cli %}
git checkout master
{% endhighlight cli %}

---
## Mesclagem
É importante lembrar de usar o `git checkout` para a branch em que deseja fazer a mesclagem, e assim, seguir com o comando: 
{% highlight cli %}
git merge [nome-da-branch-desejada]
{% endhighlight cli %}


---

## Enviando alterações 
As alterações que se encontram na HEAD, podem ser enviadas para o repositorio remoto com o comando:
{% highlight cli %}
git push origin master
{% endhighlight cli %}
para enviar para outra branch alem da master, basta somente alterar o corpo do comando com o nome da branch desejada.

Se você ainda não conectou seu repositório local ao repositório remoto, você pode adiciona-lo com o comando:
{% highlight cli %}
git remote add origin [url/ip do servidor remoto]
{% endhighlight cli %}

---
## Restaurando repositório
Se tudo estiver errado no repositório local e voce deseja remover todos os commits locais, você pode recuperar o histórico do servidor e restaurar o código mais recente, apontando para a branch master local com os comandos:
{% highlight cli %}
git fetch origin
git reset --hard origin/master
{% endhighlight cli %}

---

### Links úteis
* [Guia com imagens](https://marklodato.github.io/visual-git-guide/index-en.html)
* [Documentação do Git](https://git-scm.com/book/pt-br/v2)
* [GitHub Docs](https://docs.github.com/en)

### Dúvidas?
Ficou com dúvida? me chama lá no [GitHub](https://github.com/rodrigosantucci/).

---

<center><b>Esse conteúdo foi útil?</b></center>

[![Donate](https://img.shields.io/badge/paypal-donate-blue.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2X9NF2H8CTTU4&source=url)

