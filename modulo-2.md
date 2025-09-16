# Módulo 2 – Desenvolvimento Web (HTML, CSS e JavaScript)

[← Voltar ao Roadmap Principal](./README.md)

---

- https://roadmap.sh/full-stack
- https://roadmap.sh/frontend
- https://roadmap.sh/backend

- https://biblioteca.rocketseat.com.br/
- https://app.rocketseat.com.br/journey/discover/overview

- Curso completo e atual de HTML5 e CSS3 - Módulo 1 de 5: https://www.youtube.com/playlist?list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n
- Curso HTML5 e CSS3 - Módulo 2 de 5: https://www.youtube.com/playlist?list=PLHz_AreHm4dlUpEXkY1AyVLQGcpSgVF8s
- Curso HTML5 e CSS3 - Módulo 3 de 5: https://www.youtube.com/playlist?list=PLHz_AreHm4dmcAviDwiGgHbeEJToxbOpZ
- Curso HTML5 e CSS3 - Módulo 4 de 5: https://www.youtube.com/playlist?list=PLHz_AreHm4dkcVCk2Bn_fdVQ81Fkrh6WT
- Curso HTML5 e CSS3.- Módulo 5 de 5: https://www.youtube.com/playlist?list=PLHz_AreHm4dn1bAtIJWFrugl5z2Ej_52d
- Curso Grátis de JavaScript e ECMAScript para Iniciantes: https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1


- Guia Extenso de Programação: https://github.com/arthurspk/guiadevbrasil
- https://github.com/DanielHe4rt/git4noobs

## 📚 Roadmap de estudo - HTML, CSS e JavaScript para RPA

### 📌 HTML (estrutura da página)

#### Fundamentos
- [ ] Estrutura básica (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
- [ ] Tags de texto: `<h1>`-`<h6>`, `<p>`, `<span>`, `<strong>`, `<em>`
- [ ] Listas: `<ul>`, `<ol>`, `<li>`
- [ ] Links e âncoras: `<a>`
- [ ] Imagens: `<img>`
- [ ] Tabelas: `<table>`, `<tr>`, `<td>`, `<th>`

#### Formulários
- [ ] `<form>`, `<input>`, `<textarea>`, `<select>`, `<option>`, `<button>`
- [ ] Tipos de input: `text`, `email`, `password`, `checkbox`, `radio`, `file`, `date`
- [ ] Atributos importantes: `name`, `id`, `value`, `required`, `placeholder`

#### Estrutura semântica
- [ ] `<header>`, `<main>`, `<footer>`
- [ ] `<section>`, `<article>`, `<aside>`
- [ ] `<nav>`, `<form>`, `<label>`

#### Atributos globais úteis para automação
- [ ] `id`, `class`
- [ ] `data-*` (custom attributes para identificação)
- [ ] `title`, `alt`, `role`

### 🎨 CSS (estilização e layout)

#### Seletores essenciais
- [ ] Seletores de tag, classe, `id`
- [ ] Seletores descendentes, irmãos, múltiplos (`.classe1.classe2`, `div > p`, etc.)
- [ ] Pseudo-classes comuns: `:hover`, `:focus`, `:nth-child()`

#### Box model (fundamental para entender posicionamento)
- [ ] `margin`, `padding`, `border`
- [ ] `box-sizing`

#### Unidades e medidas
- [ ] Absolutas: `px`
- [ ] Relativas: `%`, `em`, `rem`, `vh`, `vw`

#### Layout moderno
- [ ] `Flexbox` (alinhamento dinâmico de elementos)
- [ ] `Grid` (disposição em tabelas modernas)
- [ ] `position`: `static`, `relative`, `absolute`, `fixed`, `sticky`

#### Estilização prática
- [ ] Cores (`hex`, `rgb`, `hsl`)
- [ ] Fontes (`font-family`, `font-size`, `line-height`)
- [ ] Backgrounds (`background-color`, `background-image`)
- [ ] Responsividade com `@media`

### ⚡ JavaScript (interação e automação)

#### Fundamentos da linguagem
- [ ] Variáveis: `var`, `let`, `const`
- [ ] Tipos de dados: `string`, `number`, `boolean`, `null`, `undefined`, `object`, `array`
- [ ] Operadores: aritméticos, lógicos e de comparação
- [ ] Estruturas de controle: `if`, `else`, `switch`
- [ ] Loops: `for`, `while`, `for...of`, `for...in`

#### Funções
- [ ] Declaração de função
- [ ] `Arrow functions`
- [ ] Parâmetros e retorno

#### Manipulação do DOM (essencial para RPA em web)
- [ ] Seletores: `getElementById`, `querySelector`, `querySelectorAll`
- [ ] Alterar conteúdo: `innerText`, `innerHTML`, `value`
- [ ] Alterar estilos: `style`
- [ ] Criar/remover elementos: `createElement`, `appendChild`, `remove`

#### Eventos (simulação de cliques e inputs)
- [ ] `onclick`, `onchange`, `oninput`
- [ ] `addEventListener`
- [ ] Eventos de teclado e mouse (`keydown`, `keyup`, `click`)

#### Trabalhando com formulários e inputs
- [ ] Capturar valores de inputs (`input.value`)
- [ ] Validar dados, exemplo: nome é obrigatório, email válido, mínimo 6 caracteres.
- [ ] Simular cliques e preenchimentos

#### Async e integração
- [ ] `setTimeout`, `setInterval` (esperas em automação)
- [ ] `fetch` para chamadas HTTP (quando automação precisar consumir APIs)
- [ ] `async`/`await`

#### Seletores avançados (essencial para RPA)
- [ ] **XPath**: seleção de elementos complexos quando CSS não é suficiente
- [ ] **CSS Selectors avançados**: combinadores, pseudo-seletores, atributos
- [ ] **Estratégias quando `id` e `class` não estão disponíveis**:
  - [ ] Seleção por texto: `xpath` com `contains(text(), 'valor')`
  - [ ] Seleção por atributos: `[data-testid]`, `[role]`, `[aria-label]`
  - [ ] Seleção por posição: `:nth-child()`, `:nth-of-type()`
  - [ ] Seleção por estrutura: descendentes, irmãos adjacentes

#### Detecção de mudanças e sincronização
- [ ] **`MutationObserver`**: detectar quando elementos aparecem/desaparecem
- [ ] **Polling de elementos**: verificar periodicamente se elemento existe
- [ ] **Estados de loading**: detectar spinners, overlays, elementos carregando
- [ ] **Retry mechanisms**: tentar novamente quando operação falha

#### Navegação e SPA (Single Page Applications)
- [ ] **`window.location`**: obter e alterar URL atual
- [ ] **History API**: `history.pushState()`, `history.back()`
- [ ] **Detectar mudanças de rota**: eventos de navegação
- [ ] **`window` object**: propriedades e métodos disponíveis

#### Debugging e tratamento de erros
- [ ] **`console.log()`**: debug de valores e elementos
- [ ] **`try`/`catch`**: capturar e tratar erros
- [ ] **Inspect elements**: usar DevTools para testar seletores
- [ ] **Breakpoints**: pausar execução para análise

#### Storage e persistência de dados
- [ ] **`localStorage`**: armazenar dados permanentemente no navegador
- [ ] **`sessionStorage`**: dados temporários durante a sessão
- [ ] **`Cookies`**: ler e escrever cookies via `document.cookie`
- [ ] **Casos de uso**: salvar progresso, configurações, tokens

#### Tratamento de inputs especiais
- [ ] **Upload de arquivos**: manipular `<input type="file">`
- [ ] **Drag and drop**: eventos de arrastar e soltar
- [ ] **Date pickers**: interagir com calendários
- [ ] **Autocomplete/suggestions**: lidar com dropdowns dinâmicos

#### Timing e esperas inteligentes
- [ ] **`Promise`**: trabalhar com operações assíncronas
- [ ] **`waitFor` patterns**: esperar elemento aparecer
- [ ] **Polling inteligente**: verificar condições periodicamente
- [ ] **Timeouts**: definir tempo limite para operações

