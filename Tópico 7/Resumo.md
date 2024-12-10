# 🔄 **Estruturas de Repetição no JavaScript**

Estruturas de repetição são usadas para executar blocos de código várias vezes, com base em uma condição ou até que um determinado critério seja atendido.

---

## 🧪 **Tipos de Estruturas de Repetição**

### **1. `while`**

- Executa o bloco enquanto a condição é verdadeira.
- Ideal para loops em que o número de iterações não é previamente conhecido.

#### Exemplo:
```javascript
let i = 0;
while (i < 5) {
    console.log("miau");
    i++;
}
2. while (true)
Utilizado para criar loops infinitos.
Deve conter um controle de saída (break) para evitar loops incontroláveis.
Exemplo:
javascript
Copiar código
let i = 3;
while (true) {
    if (i === 0) {
        console.log("parei");
        break;
    }
    console.log("Vou parar");
    i--;
}
3. for
Útil para iterar sobre valores com início, fim e incremento bem definidos.
Exemplo:
javascript
Copiar código
for (let i = 5; i > 0; i--) {
    console.log(`Explosão em ${i}`);
}
4. Percorrendo Arrays com for
Itera sobre elementos de um array utilizando o índice.
Exemplo:
javascript
Copiar código
const tarefas = [
    { id: 1, texto: "correr 5km", feito: false },
    { id: 2, texto: "dormir 8h", feito: true }
];

for (let i = 0; i < tarefas.length; i++) {
    console.log(`Tarefa ${i + 1}: ${tarefas[i].texto}`);
}
📝 Pontos Importantes
Controle de Loop:

Use break para encerrar loops antecipadamente.
Use continue para pular para a próxima iteração.
Evitar Loops Infinitos:

Certifique-se de que a condição do loop será falsa em algum momento.
Boas Práticas:

Utilize nomes descritivos para variáveis de controle.
Prefira estruturas adequadas para o contexto (ex: for para contadores, while para condições dinâmicas).
🧩 Resumo Prático
Estrutura	Quando Usar?
while	Quando o número de iterações é incerto.
for	Quando o número de iterações é previamente conhecido.
for (Array)	Para iterar elementos de arrays.
while (true)	Para loops infinitos com controle manual.
Explore os exemplos no arquivo index.js! 🚀