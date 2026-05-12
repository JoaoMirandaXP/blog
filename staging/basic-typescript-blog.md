---
title: basic-typescript-blog
url: basic-typescript-blog

---

# Basic Typescript Blog

Blogs! A casa dos devs... 

O projetinho que todo e qualquer dev faria! 
Passamos o olho e é claro que são conceitos objetivos e simples...
Não é mesmo ?

## Typescript

O typescript, script digitado, é onde o melhor do frontend tem surgido nos últimos tempos.
Como estou precisando de um blog de respeito para pensar e compartilhar ideias.
Aqui estou para aprender melhor sobre essa linguagem fascinante.

### Gerar o projeto

Eu ando meio de saco cheio desses super frameworks que tenho que aprender e no dia seguinte eles mudam.
Então eu resolvi aprender o que eles aprenderam.
Antes de ir direto ao ouro.

```
mkdir blog-ts
cd blog-ts
npm init -y # por mim coloquei arquivo principal em src/main.ts
npm install typescript --save-dev
```

Essa flag de save-dev é devido ao fato de só existir js no navegador ao final do processo de compilação

### Compilador

O typescript precisa de um compilador, `tsc`

Para compilar um arquivo, faz-se como em c++

```
tsc arquivo.ts # saí um arquivo.js
```

Mas ninguém vai ficar compilando ts na mão.
Inicializa-se um projeto typescript,

```
tsc --init # sai um tsconfig.json
```

O que importa é o // File layout
Dentro de "compilerOptions" colocar as pastas e extensões que serão observadas...
```jsonc
{
    "compilerOptions":{
        "include":["./src/**/*.{ts,tsx}"]
    }
}
```

Deve ter um jeito legal de copiar esse json aí de cima e mesclar com o que você tiver usando o [jq](https://jqlang.org/)

```jsonc
{
  // Visit https://aka.ms/tsconfig to read more about this file
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./.dist",
    "include": ["./src/**/*.{ts, tsx}"],

    // Environment Settings
    // See also https://aka.ms/tsconfig/module
    "module": "nodenext",
    "target": "esnext",
    "types": [],
    
    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    
    // Recommended Options
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true,
  }
}
```

Essas são as configurações por convenção do typescript, por projeto, quando for rodar o watcher(`tsc -w <arquivo>`)

> Para quando eu for continuar, agora eu iria escrever sobre as extensões que gostaria de instalar (browser-sync, concurently e talvez o vite pois preciso descobrir como vou fazer o roteamento...) 

## Extensões

Para tudo funcionar direitinho, eu coloquei algumas extensões para facilitar a vida.

São elas

```
npm i -D browser-sync concurrently # ainda não sei instalar o react
```


### browser-sync
Para fazer refresh automático


### concurently
Para fazer várias coisas ao mesmo tempo

### react
Para programar facin

### mdx
pra escrever fácil

E fazer o roteamento básico para a pasta de contents

## Scripts

São úteis para desenvolver bem.

os meus estão assim:

"scripts": {
    "build:watch": "tsc -w",
    "serve": "browser-sync start --server 'dist'",
    "dev": "concurrently \"npm run build:watch\" \"npm run serve\""
}




# Referências
https://unibb.alura.com.br/course/typescript-pratica-projeto-completo-typescript-modulos/task/133248
https://dev.to/nexxeln/make-and-deploy-your-own-blog-in-under-30-mins-448p
https://dev.to/blamsa0mine/building-a-modern-blog-platform-with-react-19-typescript-and-shadcnui-3ao3
https://www.typescriptlang.org/play/
https://unibb.alura.com.br/course/typescript-pratica-projeto-completo-typescript-modulos/task/133248
https://dev.to/codewithahsan/the-complete-typescript-setup-from-zero-to-hero-398h
