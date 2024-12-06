# 📜 **Strings no JavaScript**

Neste módulo, vamos aprender como trabalhar com **strings** no JavaScript. As strings são fundamentais para manipulação de textos e criação de interações dinâmicas. Vamos ver como criar, acessar e manipular strings com os métodos e propriedades mais comuns.

---

## ✨ **Como Criar uma String**

Em JavaScript, podemos criar strings de diferentes maneiras:

- **Com aspas duplas:**  
  `"Exemplo de String"`
  
- **Com aspas simples:**  
    `'Exemplo de String'`
  
- **Com acentos graves (template literals):**  
    ``Exemplo de String ${variavel}``
Template literals são úteis para incluir variáveis de forma dinâmica dentro da string, usando ${}.

## **🛠️ Propriedades e Métodos de uma String**

- **📏 Propriedade length**
A propriedade length retorna o comprimento de uma string (quantidade de caracteres).
Exemplo de uso:

- `console.log(string_name.length);`

- **🔡 Métodos toUpperCase() e toLowerCase()**
Esses métodos convertem todos os caracteres da string para maiúsculo ou minúsculo.
Exemplos:

`console.log(string_name.toUpperCase()); // Tudo em maiúsculo`
`console.log(string_name.toLowerCase()); // Tudo em minúsculo`

- **✂️ Método substring()**
O método substring() permite selecionar uma "fatia" da string. Ele recebe dois argumentos:

Índice inicial (inclusivo)
Índice final (exclusivo)
Exemplo de uso:

- `console.log(string_name.substring(0, 5));`
- Nota: O caractere no índice final não é incluído na fatia.

- **🔗 Método split()**
O método split() divide a string em partes, de acordo com um delimitador fornecido.
Exemplo de uso:

`console.log(string_name.split("u"));`
Para a string 'o meu amigo urubu', ao usar "u" como delimitador, a string seria dividida da seguinte forma:
['o me', ' amigo ', 'r', 'b'].