---
title: manual-uso-obsidian
slug: manual-uso-obsidian
---
Então, promessa é dívida.

# Instalar o obsidian

[Link para download](https://play.google.com/store/apps/details?id=md.obsidian)

# Criar vault

Com o obsidian baixado, cria a sua vault em uma das pastas do dispositivo

# Obsidian-git
Para sincronizar com um serviço de git, como o github.

## Criar conta (github)

[Link para login](https://github.com/signup)

## Crie um repositório

Ou na guia principal no botão verde (topo esquerdo)

Ou por [esse link](https://github.com/new)

Tudo que é necessário é o nome do repositório
E a visibilidade "privado"

![](media/criar-repo.png)

## Crie um token de acesso

Em settings>tokens

[Link direto](https://github.com/settings/tokens)

Gere um novo token, Fine-grained, repo-scoped.

![](media/criar-token.png)

Pode dar um nome pra ele
Defina como sem expiração.


![](media/token-nome.png)

 Escolha um repositório especícios(seu novo repo)
 E adicione a permissão de "Contents" e defina como "Read/Write"

Gere o token e salve o texto
![](media/token.png)

# No APP

## Criar vault
![](media/1.jpg)
## Usar armazenamento local
> Depois só escolher a pasta
![](media/2.jpg)
## Configurações
![](media/3.jpg)

## Plugins da comunidade
![](media/4.jpg)
## Pesquisar
![](media/5.jpg)
## Git

![](media/6.jpg)
## Config do git
> Tem vários jeitos de chegar aqui, mas no fluxo do roteiro esse é o mais fácil
![](media/7.jpg)
## Usuário
> Pode inserir o mesmo que foi criado no Github
![](media/8.jpg)
---
## Paleta de comandos

Após fazer isso, saia das configurações, na guia inicial "puxe" para baixo.
(fazer scroll de cima pra baixo)
![](media/9.jpg)
## Git init
> E enter
![](media/10.jpg)

## Volte nas configurações
> Preencha com os dados
> Aquele token que você criou
> Seu nome de verdade
> Seu email (pode ser de verdade ou não)
![](media/11.jpg)
## Defina os períodos de pull e push
> Pull é quando ele baixa novidades
> Push é quando ele salva as novidades no servidor


> Ops, botei muitos minutos na imagem, pensei que eram milissegundos...
> Uns 10 e 5 minutos devem bastar


![](media/16.jpg)
![](media/17.jpg)

## Volte a paleta de comandos
> E sincronize
![](media/12.jpg)

## Primeiro uso

Vai solicitar o nome da origem remota, geralmente se dá o nome "origin"
![](media/13.jpg)
## Url do repositório remoto
> É o link do seu repo
no caso do github é https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

> Não esqueça do .git no final da url

![](media/14.jpg)

## Branch 

No git vc pode ter várias branches...
Que são ramificações de código, tipo o multiverso.
Mas no caso de uma vault vamos ficar só com uma.
Geralmente essa branch principal é chamada de "master".

![](media/15.jpg)

You're all set!

No seu repositório, você deve ver as suas atualizações agora!

Assegure que está privado

---
Dicas: é possível desabilitar as notificações de informação do git nas configurações para evitar distrações.