# Módulo 3: HTTP - Protocolo de Comunicação Web

## Objetivos de Aprendizagem
- Compreender o protocolo HTTP e sua importância na web
- Dominar os métodos HTTP e códigos de status
- Implementar requisições HTTP
- Trabalhar com APIs REST
- Entender autenticação e autorização HTTP
- Manipular headers e cookies
- Implementar upload e download de arquivos

- Módulo HTTP Rocketseat: https://biblioteca.rocketseat.com.br/http/http/abertura-1
- Desvendando Requisições HTTP: Métodos, Parâmetros, Body e Status Codes para Devs: https://www.youtube.com/watch?v=bMmdksBHyXc
- https://docs.loylegal.com/home/documentacao-da-api-loy
- https://github.com/typicode/json-server
- https://docs.github.com/en/rest
- https://publicapis.dev/
- https://pokeapi.co/
- https://swapi.dev/
- https://rickandmortyapi.com/

## 1. Fundamentos do HTTP

### 1.1 Introdução ao Protocolo HTTP
- O que é HTTP (HyperText Transfer Protocol)
- Arquitetura cliente-servidor
- Modelo request-response
- HTTP vs HTTPS

### 1.2 Anatomia de uma Requisição HTTP
- URL structure
- Métodos HTTP (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS)
- Headers de requisição
- Body da requisição
- Query parameters

### 1.3 Anatomia de uma Resposta HTTP
- Códigos de status HTTP
  - 1xx (Informational)
  - 2xx (Success)
  - 3xx (Redirection)
  - 4xx (Client Error)
  - 5xx (Server Error)
- Headers de resposta
- Body da resposta
- Content-Type e encoding

## 2. Ferramentas para Trabalhar com HTTP

- cURL - comandos básicos e avançados
- Postman - criação e teste de APIs
- Insomnia - cliente REST moderno
- DevTools do navegador (Network tab)
- Burp e Wireshark para análise de tráfego

## 3. Implementação Prática com JavaScript
- Fetch API (nativo)
- Axios (biblioteca popular)
- Async/await vs Promises

## 4. APIs REST

### 4.1 Conceitos REST
- Princípios REST
- Recursos e URIs
- Métodos HTTP em REST

### 4.2 Consumindo APIs REST
- Autenticação (API Keys, Bearer tokens)
- Paginação
- Rate limiting
- Versionamento de APIs
- Documentação de APIs (OpenAPI/Swagger)

## 5. Autenticação e Segurança

### 5.1 Métodos de Autenticação
- Basic Authentication
- Bearer Token
- API Keys
- JWT (JSON Web Tokens)

### 5.2 Segurança HTTP
- HTTPS e certificados SSL/TLS
- CORS (Cross-Origin Resource Sharing)

## 6. Outros

- Multipart form data
- Streaming de arquivos grandes
- Websocket
- GraphQL

