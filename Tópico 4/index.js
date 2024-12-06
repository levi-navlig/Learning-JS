// Exemplo de um vetor
const vetor_exemplo = [0.15, 'b', 'true', 10];
console.log(vetor_exemplo);

const frutas = ['maças', 'laranjas', 'peras', 'uvas']

// Obter um valor
console.log(frutas[0]);
console.log(frutas[1]);

// Adicionar um elemento em um canto especifico do vetor
frutas[4] = 'melancia';
console.log(frutas[4]);

// Alterar o valor de um elemento
frutas[1] = 'limão';
console.log(frutas);

// Adicionar um elemento no final do vetor
frutas.push("morangos");
console.log(frutas);

// Adicionar um elemento no início de um vetor
frutas.unshift("mangas");
console.log(frutas);

// Remover um elemento do fim de um vetor
frutas.pop();
console.log(frutas);

// Remover um elemento do início de um vetor
frutas.shift();
console.log(frutas);

// Descobrir o índice de um elemento
frutas.indexOf("limão");
console.log(frutas);

// Determinar se uma constante/variável é um vetor
Array.isArray(frutas);