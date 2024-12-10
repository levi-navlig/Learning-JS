// Estruturas de Repetição

// 🟢 Repetição com while (condicional)
let i = 0;
while (i != 5) {
    console.log("miau");
    i ++;
}

// 🟢 Repetição com while true (loop infinito controlado)
i = 3;
while (true) {
    if (i != 0) {
        console.log("Vou parar");
        i--;
        continue
    } else {
        console.log("parei")
        break
    }
}

// 🟢 Repetição com for (contador definido)
for (let i = 5; i > 0; i--) {
    console.log(`Explosão em ${i}`);
}

// 🟢 Percorrendo um array com for
const vetor = [
    {
        id: 1,
        texto: "correr 5km",
        feito: false
    },
    {
        id: 2,
        texto: "dormir 8h",
        feito: true
    }
]

for (let i = 0; i < vetor.length; i++) {
    console.log(`Tarefa ${i + 1}: ${vetor[i].texto}`)
}