# 📜 **Vetores (Arrays) no JavaScript**

Neste módulo, exploraremos como os **vetores (arrays)** funcionam em JavaScript. Arrays são estruturas de dados que permitem armazenar múltiplos valores em uma única variável. Vamos aprender a criar, acessar, modificar e manipular arrays usando os métodos mais comuns.

---

## 🧳 **O que é um Vetor (Array)?**

Um vetor (ou array) é uma coleção ordenada de elementos. Cada elemento dentro do array tem um **índice** que começa de 0 e vai até o número de elementos - 1. Arrays podem conter diferentes tipos de dados, como números, strings, objetos e até outros arrays.

---

## 🛠️ **Operações Comuns com Arrays**

### 🔢 **Criando um Array**

Arrays podem ser criados de várias maneiras, incluindo o uso de colchetes `[]`:
```javascript
const frutas = ['maçãs', 'laranjas', 'peras', 'uvas'];
🔍 Acessando Elementos de um Array
Para acessar um elemento dentro de um array, usamos o índice entre colchetes:

javascript
Copiar código
console.log(frutas[0]); // Acessa o primeiro elemento
console.log(frutas[1]); // Acessa o segundo elemento
➕ Adicionando e Modificando Elementos
Adicionar um elemento em um índice específico:
javascript
Copiar código
frutas[4] = 'melancia';
console.log(frutas);
Alterar o valor de um elemento existente:
javascript
Copiar código
frutas[1] = 'limão';
console.log(frutas);
Adicionar um elemento no final do array com push():
javascript
Copiar código
frutas.push('morangos');
console.log(frutas);
Adicionar um elemento no início do array com unshift():
javascript
Copiar código
frutas.unshift('mangas');
console.log(frutas);
➖ Removendo Elementos
Remover o último elemento com pop():
javascript
Copiar código
frutas.pop();
console.log(frutas);
Remover o primeiro elemento com shift():
javascript
Copiar código
frutas.shift();
console.log(frutas);
🔎 Outras Operações Importantes
Descobrir o índice de um elemento com indexOf():
javascript
Copiar código
console.log(frutas.indexOf('limão'));
Verificar se uma variável é um array com Array.isArray():
javascript
Copiar código
console.log(Array.isArray(frutas)); // Retorna true se for um array
Essas são algumas operações básicas que você pode realizar com arrays em JavaScript. No próximo passo, confira o arquivo index.js para ver esses métodos em ação!