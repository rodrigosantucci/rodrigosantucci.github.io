---
layout: post
title:  "Termos que podem confundir programadores iniciantes."
date:   2020-09-04
excerpt: "Explicação breve de alguns termos que confundem alguns desenvolvedores que estão iniciando suas carreiras"
tag:
- parâmetro 
- argumento
- função
- método
- desenvolvimento
- iniciante
comments: true
feature: "/../assets/img/logo3.jpg"  

---

Programadores ao iniciarem suas carreiras, comumente se deparam com algumas dúvidas bem especificas no meio do desenvolvimento, talvez pela semelhança no código ou nomes não tão descritivos e objetivos, o que é bem comum no ramo. Algumas dessas dúvidas serão abordadas e exemplificadas, são elas:

# Argumento ou Parâmetro?

## Parâmetro:
`Parâmetro` é uma variável definida na assinatura da função ou método.

## Argumento:
Um `argumento` é o dado que é passado quando a função ou método é chamado

### Exemplo:
{% highlight js %}
function voar(parametro) {
    // ...
}

voar("argumento");

{% endhighlight %}


# Função ou Método?

## Função:
Uma `função` é um bloco de código que realiza uma determinada tarefa e que pode ser chamada por diversas partes do programa. Em uma função os dados são passados (isto é, os parâmetros) e pode opcionalmente retornar dados (o valor de retorno).

## Método:
Um `método` é um pedaço de código que é chamado por um nome associado a um objeto. Na maioria dos aspectos, é idêntico a uma função, exceto por duas diferenças principais:

* Um método é implicitamente passado o objeto no qual ele foi chamado.
* Um método é capaz de operar em dados que estão contidos dentro da classe

### Exemplo:
{% highlight js %}
function voar();

object.metodoVoar();
{% endhighlight %}


# Classe ou Objeto?

## Classe:
`Classe`, como o próprio nome diz, classifica algo, é um agrupamento de objetos classificados.


## Objeto:
Um `Objeto` é uma entidade da `Classe`, que possui seus atributos, valores e estados.

### Exemplo:
{% highlight js %}
 Class Jogador(nome, idade, time) {
     this.nome = nome;
     this.idade = idade;
     this.time = time;
 }

 objeto = Jogador("Messi", 33, "Barcelona");


{% endhighlight %}





# Invocação ou Chamada?

## Chamada:
Quando uma função está sendo `Chamada`, automaticamente ela estará sendo executada.

## Invocação:
Quando uma função é `Invocada`, ela estará sendo chamada através de outra função.

### Exemplo:
{% highlight js %}
 // Chamada de uma função
 pular();


// Invocando a função pular na função correr
 Function correr() {
     pular();
 }

 correr();
{% endhighlight js %}







* Fonte: [Geek2code](https://instagram.com/geek2code/)

### Dúvidas?
Ficou com dúvida? me chama lá no [GitHub](https://github.com/rodrigosantucci/).

---

<center><b>Esse conteúdo foi útil?</b></center>

[![Donate](https://img.shields.io/badge/paypal-donate-blue.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2X9NF2H8CTTU4&source=url)

