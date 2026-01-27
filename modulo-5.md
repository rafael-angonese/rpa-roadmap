
# 🐳 Docker

Este material apresenta uma introdução ao Docker com foco em **compreensão conceitual** e **uso prático básico**, pensando em pessoas que já conhecem **JavaScript, Node.js, HTTP e aplicações web**.

O objetivo aqui não é cobrir todo o ecossistema Docker, mas fornecer um **modelo mental correto** para que o uso da ferramenta faça sentido no dia a dia.

---

## Por que Docker existe?

Um dos problemas mais comuns no desenvolvimento de software é a diferença entre ambientes:

- “Funciona na minha máquina”
- Diferença de versões de Node.js
- Dependências de sistema que existem localmente, mas não em produção
- Aplicação funcionando em desenvolvimento, mas quebrando no deploy

Docker surge para resolver **ambiente**, não código.

> Docker não resolve bugs.
> Docker resolve ambiente.

---

## O que Docker não é

Antes de avançar, é importante alinhar expectativas. Docker:

- Não é uma máquina virtual
- Não é uma linguagem de programação
- Não é um serviço de cloud

---

## O que Docker é

Docker é uma ferramenta que permite **empacotar uma aplicação junto com tudo o que ela precisa para rodar** e executá-la de forma previsível em qualquer lugar.

Um modelo mental simples:

```
Código + Dependências + Configuração = Imagem
Imagem em execução = Container
```

---

## Imagem vs Container

Esses dois conceitos são centrais no Docker.

- **Imagem**: pacote imutável que contém a aplicação e suas dependências
- **Container**: uma instância da imagem em execução

Uma imagem pode gerar vários containers. Containers são descartáveis.

---

## Executando seu primeiro container

```bash
docker run hello-world
```

---

## Rodando um servidor HTTP

```bash
docker run -p 8080:80 nginx
```

---

## Listando containers

```bash
docker ps
docker ps -a
```

---

## Parando e removendo containers

```bash
docker stop <container_id>
docker rm <container_id>
```

---

## Exemplo de aplicação Node.js

```js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ ok: true });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---

## Dockerfile

```Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Modelo mental correto

```
Dockerfile → Imagem → Container
```
