// Criando um Objeto
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
}

// Acessando uma propiédade de um objeto
console.log(pessoa.nome);

// Acessando um elemento de uma propiedade vetor
console.log(pessoa.passatempos[1]);

// Acessando uma propiedade de uma propiedade
console.log(pessoa.endereco.bairro);

// Definindo novas propiedade do objeto
pessoa.email ="levinavlig1227@gmail.com";
console.log(pessoa);

// Criando um vetor de objetos
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
        completo
    }
]

// Selecionando uma propiedade de um elemento do vetor
console.log(tarefas[1].texto);

// Formatando um objeto em formato JSON
console.log(JSON.stringify(tarefas));
// Muito utilizado para transferencia de dados

