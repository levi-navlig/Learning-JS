// 📜 Criando um Objeto com propriedades de diferentes tipos
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

// 🔍 Acessando uma propriedade de um objeto
console.log("Nome:", pessoa.nome);

// 🔍 Acessando um elemento dentro de uma propriedade que é um vetor
console.log("Passatempo favorito:", pessoa.passatempos[1]);

// 🔍 Acessando uma propriedade de uma propriedade (objeto dentro de objeto)
console.log("Bairro:", pessoa.endereco.bairro);

// ➕ Adicionando novas propriedades a um objeto
pessoa.email = "levinavlig1227@gmail.com";
console.log("Pessoa com email:", pessoa);

// ➕ Criando um vetor de objetos
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

// 🔍 Acessando uma propriedade de um objeto dentro do vetor
console.log("Tarefa:", tarefas[1].texto); // "Varrer o Chão"

// 🔄 Formatando um objeto em formato JSON
console.log("Tarefas em JSON:", JSON.stringify(tarefas)); // Transforma em JSON