---
title: Como usar o Pipenv
slug: como-usar-pipenv
tag: python
description: Como usar o Pipenv
thumb: 'https://media-site-matheus-nuxt.s3.amazonaws.com/posts/pipenv/thumb/pipenv.jpeg'
content: python
open: 0
en: 0
date: 2023-04-23
---
# Como usar o pipenv

Como muitos já sabem, o python possui o gerencioador de pacotes padrão 
chamado "pip", com eles podemos facilmente instalar pacotes para nossos
projetos. Contudo o "pip" eu considero muito simples, dito isso ele não cria
um abiente virtual para o projeto, fazendo instalarmos o pacote do virtualenv 
para criar um ambiente em nosso projeto, e para ativar esse ambiente temos que navegar 
até o script de activate.

Com isso eu apresento o gerenciador de pacotes "Pipenv" com ele podemos instalar pacotes,
ter um ambiente virtual tudo com a mesma ferramenta.

Instalação:

``` shell
pip install pipenv

```

Agora que o pacote foi instalado podemos simplesmente criar uma pasta .venv
em nosso diretório e iniciar o comando:

```shell
pipenv shell

```
![teste](https://media-site-matheus-nuxt.s3.amazonaws.com/posts/pipenv/images/venv-shell.png)

Com isso agora temos um abiente ja ativado, e com dois arquivos, o Pipfile e o Pipfile.lock.
Para aqueles que estão acostumados com o Node.js, esses arquivos equivalem ao package.json e o 
packege-lock.json, o Pipfile é onde contem todas as informações de pacotes instalados a partir do
pipenv, como exemplo de instalacão de um pacote vamos instalar o flask.

```shell
pipenv install flask
```
![teste](https://media-site-matheus-nuxt.s3.amazonaws.com/posts/pipenv/images/flask.png)

Podemos observar a adição do flask como dependencia de projeto.
Vale ressaltar que podemos ainda utilizar o comando freeze para gerar o 
requirements.txt para que possamos compartilhar nosso projeto com aqueles
que não usam o pipenv.

Se gostou, compartilhe!
