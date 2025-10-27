

## Como usar este guia

1. Abra a aplicação LoyTrustApp no Chrome
2. Pressione `F12` para abrir o DevTools
3. Vá para a aba "Console"
4. Copie e cole os códigos JavaScript dos exemplos
5. Execute pressionando `Enter`

---

## 1. Manipulação do DOM (essencial para RPA em web)

### 1.1 Seletores: `getElementById`, `querySelector`, `querySelectorAll`

```javascript

document.body.innerHTML.includes('Nova')


// Exemplo 1: Selecionar o campo de email na página de login
const emailInput = document.getElementById('«r0»-form-item')
console.log('Campo de email encontrado:', emailInput);

const emailInput = document.getElementsByName('email')
console.log('Campo de email encontrado:', emailInput);

const emailInput = document.querySelector('input[name="email"]');
console.log('Campo de email encontrado:', emailInput);

const emailInput = document.querySelector('input[type="email"]');
console.log('Campo de email encontrado:', emailInput);

const emailInput = document.querySelector('input[placeholder="seu@email.com"]');
console.log('Campo de email encontrado:', emailInput);

const emailInput = document.querySelector('input.flex.h-10.w-full');
console.log('Campo de email encontrado:', emailInput);

const emailInput = document.querySelector('input[name="email"][type="email"]');
console.log('Campo de email encontrado:', emailInput);

// Exemplo 2: Selecionar o botão de login
const loginButton = document.querySelector('button[type="submit"]');
console.log('Botão de login:', loginButton);

// Exemplo 3: Selecionar todos os inputs da página
const allInputs = document.querySelectorAll('input');
console.log('Total de inputs na página:', allInputs.length);
allInputs.forEach((input, index) => {
    console.log(`Input ${index + 1}:`, input.name || input.type);
});

// Exemplo 4: Selecionar elementos pela classe
const buttons = document.querySelectorAll('button');
console.log('Todos os botões da página:', buttons);

```

### 1.2 Alterar conteúdo: `innerText`, `innerHTML`, `value`

```javascript
// Exemplo 1: Preencher automaticamente o campo de email

const searchInput = document.getElementById('APjFqb')
searchInput.value = 'Teste'
searchInput.dispatchEvent(new Event('input', { bubbles: true }));
console.log('Campo do Google preenchido!');


const emailField = document.querySelector('input[name="email"]');
emailField.value = 'test@loytrustapp.com';
emailField.dispatchEvent(new Event('input', { bubbles: true }));
emailField.dispatchEvent(new Event('change', { bubbles: true }));
console.log('Email preenchido automaticamente');


const emailField = document.querySelector('input[name="email"]');
if (emailField) {
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value'
  ).set;

  nativeInputValueSetter.call(emailField, 'test@loytrustapp.com');

  emailField.dispatchEvent(new Event('input', { bubbles: true }));
  console.log('Email preenchido automaticamente');
}

// Exemplo 2: Preencher campo de senha
const passwordField = document.querySelector('input[name="password"]');
if (passwordField) {
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value'
  ).set;

  nativeInputValueSetter.call(passwordField, 'minhasenha123');

  passwordField.dispatchEvent(new Event('input', { bubbles: true }));
  console.log('Senha preenchida automaticamente');
}

// Exemplo 3: Alterar texto de um botão
const submitButton = document.querySelector('button[type="submit"]');
if (submitButton) {
    const originalText = submitButton.innerText;
    submitButton.innerText = 'EXECUTANDO LOGIN...';
    console.log('Texto do botão alterado de:', originalText, 'para:', submitButton.innerText);
}

submitButton.click()
```

### 1.3 Alterar estilos: `style`

```javascript
// Exemplo 1: Destacar campo de email com bordas vermelhas
const emailInput = document.querySelector('input[name="email"]');
if (emailInput) {
    emailInput.style.border = '3px solid blue';
    emailInput.style.backgroundColor = 'white';
    console.log('Campo de email destacado');
}

// Exemplo 2: Ocultar/mostrar elemento
const passwordToggle = document.querySelector('button[aria-label="alterar visibilidade da senha"]');
if (passwordToggle) {
    passwordToggle.style.display = 'none';
    console.log('Botão de mostrar/ocultar senha foi ocultado');

    // Mostrar novamente após 3 segundos
    setTimeout(() => {
        passwordToggle.style.display = 'block';
        console.log('Botão de mostrar/ocultar senha voltou a aparecer');
    }, 3000);
}

// Exemplo 3: Alterar cores do tema
const loginContainer = document.querySelector('.max-w-md');
if (loginContainer) {
    loginContainer.style.backgroundColor = '#f0f8ff';
    loginContainer.style.borderColor = '#4285f4';
    console.log('Estilo do container de login alterado');
}
```

### 1.4 Criar/remover elementos: `createElement`, `appendChild`, `remove`

```javascript
// Exemplo 1: Criar notificação de status
const statusDiv = document.createElement('div');
statusDiv.id = 'rpa-status';
statusDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #4CAF50;
    color: white;
    padding: 15px;
    border-radius: 5px;
    z-index: 9999;
    font-family: Arial, sans-serif;
`;
statusDiv.innerText = '🤖 RPA ATIVO - Monitorando página';
document.body.appendChild(statusDiv);
console.log('Notificação de status RPA criada');

// Exemplo 2: Criar botão de automação
const automationButton = document.createElement('button');
automationButton.innerText = '🚀 Executar Automação';
automationButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #ff9800;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 25px;
    cursor: pointer;
    z-index: 9999;
    font-weight: bold;
`;
automationButton.onclick = () => {
    console.log('🤖 Iniciando automação...');
    // Aqui você pode chamar suas funções de automação
};
document.body.appendChild(automationButton);


const submitButton = document.querySelector('button[type="submit"]');
submitButton.replaceWith(automationButton)


// Exemplo 3: Remover elementos após tempo
setTimeout(() => {
   const submitButton = document.querySelector('button[type="submit"]');
    if (submitButton) {
        submitButton.remove();
        console.log('Removido');
    }
}, 4000); // Remove após 10 segundos
```

---

## 2. Eventos (simulação de cliques e inputs)

### 2.1 `onclick`, `onchange`, `oninput`

```javascript
// Exemplo 1: Simular clique no botão de mostrar/ocultar senha
const togglePasswordBtn = document.querySelector('button[aria-label="alterar visibilidade da senha"]');
if (togglePasswordBtn) {
    console.log('Simulando clique no botão de mostrar senha...');
    togglePasswordBtn.click();

    setTimeout(() => {
        togglePasswordBtn.click();
        console.log('Senha ocultada novamente');
    }, 2000);
}

// Exemplo 2: Monitorar mudanças no campo de email
const emailField = document.querySelector('input[name="email"]');
if (emailField) {
    emailField.oninput = (event) => {
        console.log('Email sendo digitado:', event.target.value);
        // Validação em tempo real
        if (event.target.value.includes('@')) {
            event.target.style.borderColor = 'green';
        } else {
            event.target.style.borderColor = 'red';
        }
    };
}

// Exemplo 3: Monitorar mudanças no campo de senha
const passwordField = document.querySelector('input[name="password"]');
if (passwordField) {
    passwordField.onchange = (event) => {
        console.log('Senha alterada. Comprimento:', event.target.value.length);
        if (event.target.value.length >= 8) {
            console.log('✅ Senha forte o suficiente');
        } else {
            console.log('❌ Senha muito fraca');
        }
    };
}
```

### 2.2 `addEventListener`

```javascript
// Exemplo 1: Adicionar listener para interceptar submit do formulário
const loginForm = document.querySelector('form');
if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
        console.log('🔍 Interceptando submit do formulário...');
        event.preventDefault();
        event.stopPropagation();

        const email = document.querySelector('input[name="email"]').value;
        const password = document.querySelector('input[name="password"]').value;
        console.log(event)

        const formData = new FormData(loginForm);
        const data = Object.fromEntries(formData.entries());
        console.log(data)

        console.log('Dados capturados:', { email, password });
        alert('❌ Interceptado pelo RPA!');
    });
}

// Exemplo 2: Monitorar cliques em qualquer botão
document.addEventListener('click', (event) => {
    // if (event.target.tagName === 'BUTTON') {
        console.log('🖱️ clicado em:', event.target.innerText || event.target.type);
        console.log('Posição do clique:', { x: event.clientX, y: event.clientY });
    // }
});

```

### 2.3 Eventos de teclado e mouse (`keydown`, `keyup`, `click`)

```javascript
// Exemplo 1: Capturar teclas pressionadas nos campos
document.addEventListener('keydown', (event) => {
    const activeElement = document.activeElement;
    if (activeElement.tagName === 'INPUT') {
        console.log(`⌨️ Tecla pressionada: ${event.key} no campo: ${activeElement.name}`);

        // Atalhos personalizados
        if (event.ctrlKey && event.key === 'Enter') {
            console.log('🚀 Atalho Ctrl+Enter detectado');
            alert('🚀 Atalho Ctrl+Enter detectado')
        }
    }
});

// Exemplo 3: Capturar movimentos do mouse para análise
let mouseMovements = [];
document.addEventListener('mousemove', (event) => {
    mouseMovements.push({
        x: event.clientX,
        y: event.clientY,
        timestamp: Date.now()
    });

    console.log('Movimento do mouse', {
        x: event.clientX,
        y: event.clientY,
        timestamp: Date.now()
    })

    // Manter apenas os últimos 10 movimentos
    if (mouseMovements.length > 10) {
        mouseMovements.shift();
    }
});
```

### 4.2 `fetch` para chamadas HTTP (quando automação precisar consumir APIs)

```javascript
// Exemplo 1: Interceptar e analisar requisições da aplicação
(function() {
  const o = XMLHttpRequest.prototype.open;
  const s = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function(method, url) {
    this._url = url; // guarda a URL
    return o.apply(this, arguments);
  };

  XMLHttpRequest.prototype.send = function(body) {
    console.log('[XHR] Request ->', this._url);
    this.addEventListener('loadend', () => {
      console.log('[XHR] Response <-', this._url, 'status:', this.status);
    }, { once: true });
    return s.apply(this, arguments);
  };

  console.log('✅ XHR interceptor mínimo instalado');
})();
```
---


- https://github.com/Matt-Fontes/SendScriptWhatsApp
- https://github.com/alestanalves/SendScriptWhatsAppV2



```javascript
const button = document.querySelector('button.btn.btn-primary.btn-lg');
button.click()

const purpleButton = document.querySelector('button[aria-label="Purple"]');
purpleButton.click();

const canvas = document.querySelector('canvas.maplibregl-canvas');

// Lista de posições para clicar (x, y)
const positions = [
  [50, 50],
  [100, 100],
  [200, 150],
  [300, 200],
  [400, 250],
  [500, 300],
  [600, 350],
  [700, 400],
  [800, 450],
  [900, 500]
];

// Função para simular clique no canvas
function simulateClick(canvas, x, y) {
  const eventOptions = { 
    bubbles: true, 
    cancelable: true, 
    clientX: x + canvas.getBoundingClientRect().left,
    clientY: y + canvas.getBoundingClientRect().top,
  };

  // Eventos mousedown → mouseup → click
  canvas.dispatchEvent(new MouseEvent('mousedown', eventOptions));
  canvas.dispatchEvent(new MouseEvent('mouseup', eventOptions));
  canvas.dispatchEvent(new MouseEvent('click', eventOptions));
}

// Executa os cliques nas posições
positions.forEach(([x, y]) => simulateClick(canvas, x, y));

console.log(`Feitos ${count} cliques no canvas!`);

const button = document.querySelector('button.btn.btn-primary.btn-lg');
button.click()
```


```javascript
const button = document.querySelector('button.btn.btn-primary.btn-lg');
button.click()

const purpleButton = document.querySelector('button[aria-label="Purple"]');
purpleButton.click();

const canvas = document.querySelector('canvas.maplibregl-canvas');
const rect = canvas.getBoundingClientRect();

// Função para simular clique no canvas
function simulateClick(canvas, x, y) {
  const eventOptions = { 
    bubbles: true, 
    cancelable: true, 
    clientX: x + rect.left,
    clientY: y + rect.top,
  };

  canvas.dispatchEvent(new MouseEvent('mousedown', eventOptions));
  canvas.dispatchEvent(new MouseEvent('mouseup', eventOptions));
  canvas.dispatchEvent(new MouseEvent('click', eventOptions));
}

// Gerar 300 posições distribuídas pelo canvas
const totalClicks = 300;
const width = canvas.width;
const height = canvas.height;
const stepX = Math.floor(width / Math.sqrt(totalClicks));
const stepY = Math.floor(height / Math.sqrt(totalClicks));

let count = 0;
for (let y = 0; y < height && count < totalClicks; y += stepY) {
  for (let x = 0; x < width && count < totalClicks; x += stepX) {
    simulateClick(canvas, x, y);
    count++;
  }
}

console.log(`Feitos ${count} cliques no canvas!`);

const button = document.querySelector('button.btn.btn-primary.btn-lg');
button.click()
```

