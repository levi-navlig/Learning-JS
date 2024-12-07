// 🧪 Estruturas Condicionais


// Exemplos de condições com if (se)

const x = 30
const y = 10
if (x == y) {
    console.log("x é igual a y");
}
    
if (x != y) {
    console.log("x é diferente de y");
}
    
if (x > y) {
    console.log("x é maior que y");
}
    
if (x <= y) {
    console.log("x é menor ou igual y");
}
    
// Uso da condicional else (senão) junto ao if

if (x == y) {
    console.log("x é igual a y");
} else {
    console.log("x não é igual a y");    
}

// Operador ternário (estrutura de if e else juntos reduzidas)
let numero = x == 50 ? 10 : 20
console.log(numero)

// Cascata de If e Else para ajudar a usar menos poder computacional e otimizar o programa


if (x == y) {
    console.log("x é igual a y");
} else {
    if (x < y) {
        console.log("X é menor que y")
    } else {
        if (x != y) {
            console.log("x é diferente de y") 
        } else {
            console.log("Esse easter egg não vai ser carregado")
        }
    }
}

// Estrutura condicional Switch
const cor = "azul";

switch(cor) {
    case "vermelho":
        console.log("A cor é vermelho");
    case "verde":
        console.log("A cor é verde")
    case "azul":
        console.log("A cor é azul")
}

// Utilizando o Default no Swith

switch(cor) {
    case "vermelho":
        console.log("A cor é vermelho");
    case "verde":
        console.log("A cor é verde")
    case "amarelo":
        console.log("A cor é amarela")
    default:
        console.log("A cor definida não é uma possível")
}


// Obs: no Switch quando não é utilizado o comando break todos os casos verdadeiros serão ativos

switch(cor) {
    case "azul":
        console.log("A cor é azul");
    default:
        console.log("A cor definida não é uma possível")
}

// Utilizando o break no Switch

switch(cor) {
    case "azul":
        console.log("A cor é azul");
        break
    default:
        console.log("A cor definida não é uma possível")
}

// Fazendo um contado utilizando o Switch para entender sua utilidade
const contador = 3

switch(contador) {
    case 5:
        console.log("5");
    case 4:
        console.log("4")
    case 3:
        console.log("3")
    case 2:
        console.log("2")
    case 1:
        console.log("1")      
    default:
        console.log("BOOOOMMM !!")
}

// Importante lembrar que podemos utilizar junções entre as estruturas condicionais