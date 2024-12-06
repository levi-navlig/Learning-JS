// 📜 Exemplo de um vetor (Array) com elementos de tipos diferentes
const vetor_exemplo = [0.15, 'b', 'true', 10];
console.log("Vetor exemplo:", vetor_exemplo);

// Criando um array de frutas
const frutas = ['maçãs', 'laranjas', 'peras', 'uvas'];

// 🔍 Acessando valores do array
console.log("Primeiro elemento:", frutas[0]); // 'maçãs'
console.log("Segundo elemento:", frutas[1]); // 'laranjas'

// ➕ Adicionando um elemento em um índice específico do array
frutas[4] = 'melancia';
console.log("Elemento adicionado na posição 4:", frutas[4]);

// 📝 Alterando o valor de um elemento
frutas[1] = 'limão';
console.log("Array após alteração:", frutas);

// ➕ Adicionando um elemento no final do array
frutas.push("morangos");
console.log("Array após push:", frutas);

// ➕ Adicionando um elemento no início do array
frutas.unshift("mangas");
console.log("Array após unshift:", frutas);

// ➖ Removendo o último elemento do array
frutas.pop();
console.log("Array após pop:", frutas);

// ➖ Removendo o primeiro elemento do array
frutas.shift();
console.log("Array após shift:", frutas);

// 🔎 Descobrindo o índice de um elemento
console.log("Índice do 'limão':", frutas.indexOf("limão"));

// 🔎 Verificando se uma variável é um array
console.log("É um array?", Array.isArray(frutas)); // true