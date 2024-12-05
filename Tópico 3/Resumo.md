# **Strings**

## Como criar uma String

> "Exemplo de String"
> 'Exemplo de String'
- Strings são criadas com Aspas simples ou duplas
> `Exemplo de String ${variavel}`
- Strings feitas com acentos graves podem ser encaixadas de formas dinamicas com variaveis

## Propiedades e Métodos de uma string

> Propiedade Length
- console.log(string_name.length)
- A propiedade Length mostra o comprimento de uma string

> Métodos Lowercase e Uppercase
- consol.log(string_name.toUpperCase())
- consol.log(string_name.toLowerCase())
- Método que define os caracteres da string para maiúsculo ou para minúsculo

> Método Substring
- console.log(string_name.Substring(0, 5))
- O método Substring serve para selecionar uma fatia da string, ele recebe dois argumentos, o indice do caractere do inicio e o do final da fatia. Importante saber que nela nós temos o indice não incluido, então não incluimos o indice final, o ultimo a ser representado é o anterior a ele

> Método Split
- console.log(string_name.split("u"))
- Quando utilizamos o split, nós dividimos uma string em partes de acordo com o divisor escolhido, nesse caso utilizamos o u, então em uma string: 'o meu amigo urubu', viraria um vetor com várias strings assim: ['o me','amigo', 'r', 'b']