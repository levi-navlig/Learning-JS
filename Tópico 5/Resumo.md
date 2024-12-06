# 📜 **Objetos no JavaScript**

Objetos em JavaScript são uma maneira poderosa de armazenar dados de forma estruturada. Eles permitem que você combine diferentes tipos de dados (strings, números, arrays, até outros objetos) em uma única estrutura. Vamos aprender como criar, acessar, modificar e manipular objetos.

---

## 🧳 **O que é um Objeto?**

Um **objeto** é uma coleção de propriedades, onde cada propriedade é composta por um nome (chave) e um valor. Em JavaScript, os objetos são definidos entre chaves `{}` e podem conter tipos de dados variados, como strings, números, arrays e outros objetos.

---

## 🛠️ **Operações Comuns com Objetos**

### 🔢 **Criando um Objeto**

Para criar um objeto, utilizamos chaves `{}` para definir suas propriedades e seus valores:
```javascript
const pessoa = {
    nome: "Levi",
    sobrenome: "Navlig",
    idade: "18",
    passatempos: ["Codar", "Jogar", "Música"],
    endereco: {
        bairro: "Santa Maria Gorete",
        cidade: "Currais Novos",
        estado: "RN",
    }
};
🔍 Acessando as Propriedades de um Objeto
Você pode acessar as propriedades de um objeto utilizando o nome da propriedade:

javascript
Copiar código
console.log(pessoa.nome); // "Levi"
Acessando um elemento dentro de um array de uma propriedade:
javascript
Copiar código
console.log(pessoa.passatempos[1]); // "Jogar"
Acessando uma propriedade dentro de outra propriedade:
javascript
Copiar código
console.log(pessoa.endereco.bairro); // "Santa Maria Gorete"
➕ Adicionando Novas Propriedades a um Objeto
Você pode adicionar novas propriedades ao objeto facilmente:

javascript
Copiar código
pessoa.email = "levinavlig1227@gmail.com";
console.log(pessoa); // Agora, a propriedade 'email' está no objeto pessoa
➕ Criando um Vetor de Objetos
Você também pode criar um vetor de objetos para armazenar múltiplos objetos:

javascript
Copiar código
const tarefas = [
    {
        id: 1,
        texto: "tirar o Lixo",
        completo: false
    },
    {
        id: 2,
        texto: "Varrer o Chão",
        completo: true
    },
    {
        id: 3,
        texto: "Lavar os Pratos",
        completo: false
    }
];
🔎 Acessando Propriedades de Objetos dentro de um Vetor
Para acessar as propriedades de objetos dentro de um vetor, basta especificar o índice do objeto no vetor:

javascript
Copiar código
console.log(tarefas[1].texto); // "Varrer o Chão"
🔄 Formatando Objetos em Formato JSON
Objetos podem ser convertidos para o formato JSON (JavaScript Object Notation), muito usado para transferência de dados:

javascript
Copiar código
console.log(JSON.stringify(tarefas)); // Converte o array de objetos em formato JSON
Esses são alguns dos conceitos essenciais ao trabalhar com objetos em JavaScript. Confira o exemplo prático no arquivo index.js!

