---
layout: post
title:  "Guia básico de comandos do git"
date:   2020-07-04
excerpt: "Serão listados e conceituados os principais comandos mais basicos do git."
tag:
- git 
- guia
- cli
- versionamento
- basico
- iniciante
comments: true
---

![Homepage](/../assets/img/git-logo.png)    
    
<center>O <b>Git</b> é um sistema de versionamento distribuido, usado no desenvolvimento de quase todas as tecnologias ativas no mercado. </center>
     
 Se esse conteúdo é valioso pra você, clique no botão abaixo para demonstrar sua satisfação, muito obrigado.

<iframe src="https://ghbtns.com/github-btn.html?user=rodrigosantucci/rodrigosantucci.github.io&repo=&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>    
      
## Instalação
* Download para [OSX](https://git-scm.com/download/mac)
* Download para [Windows](https://gitforwindows.org)
* Download para [Linux](https://git-scm.com/download/linux)

  

---
  
      


## Criando repositório
* crie uma pasta, a pasta criada, será a pasta raiz do seu projeto, onde você criará seu repositório com o comando: 
{% highlight yaml %}
 git init
{% endhighlight %}

Pronto, repositório criado.

### Baixando um repositório
* Baixando de servidor
  {% highlight yaml %}
    git clone usuario@servidor:/caminho-do-repositorio/
  {% endhighlight %}
* Baixando do GitHub
  {% highlight yaml %}
    git clone https://url-no-github/ /caminho/que/deseja/baixar
  {% endhighlight %} 

#### title

The title of your site... shocker!

Example `title: My Awesome Site`

#### bio

The description to show on your homepage.

#### description

The description to use for meta tags and navigation menu.

#### url

Used to generate absolute urls in `sitemap.xml`, `feed.xml`, and for generating canonical URLs in `<head>`. When developing locally either comment this out or use something like `http://localhost:4000` so all assets load properly. *Don't include a trailing `/`*.

Examples:

{% highlight yaml %}
url: http://taylantatli.me/Moon
url: http://localhost:4000
url: //cooldude.github.io
url:
{% endhighlight %}

#### reading_time

Set true to show reading time for posts. And set `words_per_minute`, default is 200.

#### logo
Your site's logo. It will show on homepage and navigation menu. Also used for twitter meta tags.

#### background
Image for background. If you don't set it, color will be used as a background.

#### Google Analytics and Webmaster Tools

Google Analytics UA and Webmaster Tool verification tags can be entered in `_config.yml`. For more information on obtaining these meta tags check [Google Webmaster Tools](http://support.google.com/webmasters/bin/answer.py?hl=en&answer=35179) and [Bing Webmaster Tools](https://ssl.bing.com/webmaster/configure/verify/ownership) support.

#### MathJax
It's enabled. But if you don't want to use it. Set it false in  `_config.yml`.

#### Disqus Comments
Set your disqus shortname in `_config.yml` to use comments.

---

### Navigation Links

To set what links appear in the top navigation edit `_data/navigation.yml`. Use the following format to set the URL and title for as many links as you'd like. *External links will open in a new window.*

{% highlight yaml %}
- title: Home
  url: /

- title: Blog
  url: /blog/

- title: Projects
  url: /projects/

- title: About
  url: /about/

- title: Moon
  url: http://taylantatli.me/Moon
{% endhighlight %}

---

## Layouts and Content

Moon Theme use [Jekyll Compress](https://github.com/penibelst/jekyll-compress-html) to compress html output. But it can cause errors if you use "linenos" (line numbers). I suggest don't use line numbers for codes, because it won't look good with this theme, also i didn't give a proper style for them. If you insist to use line numbers, just remove `layout: compress` string from layouts. It will disable compressing.

### Feature Image

You can set feature image per post. Just add `feature: some link` to your post's front matter.

```
feature: /assets/img/some-image.png
or
feaure: http://example.com/some-image.png
```    
 This also will be used for twitter card:

![Moon Twitter Card](https://cloud.githubusercontent.com/assets/754514/14509719/61c5751c-01d6-11e6-8c29-ce8ccad149bf.png)

### Comments
To show disqus comments for your post add `comments: true` to your post's front matter.

---

## Questions?

Found a bug or aren't quite sure how something works? By all means [file a GitHub Issue](https://github.com/TaylanTatli/Moon/issues/new). And if you make something cool with this theme feel free to let me know.

---

## License

This theme is free and open source software, distributed under the MIT License. So feel free to use this Jekyll theme on your site without linking back to me or including a disclaimer.
