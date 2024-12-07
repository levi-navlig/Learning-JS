# 🔀 **Estruturas Condicionais no JavaScript**

Estruturas condicionais permitem que você tome decisões no código com base em condições lógicas. Elas são fundamentais para construir fluxos de execução dinâmicos.

---

## 🧪 **Tipos de Estruturas Condicionais**

### **1. `if` e `else`**

- **`if` (se):** Executa um bloco de código se a condição for verdadeira.
- **`else` (senão):** Executa um bloco de código caso a condição do `if` seja falsa.

#### Exemplo:
```javascript
const x = 30;
const y = 10;

if (x > y) {
    console.log("x é maior que y");
} else {
    console.log("x não é maior que y");
}
2. Operador Ternário
Forma reduzida para avaliar condições que envolvem if e else.

Exemplo:
javascript
Copiar código
const resultado = x > y ? "x é maior" : "x não é maior";
console.log(resultado); // "x é maior"
3. Estruturas Aninhadas (if-else em cascata)
Para tratar múltiplas condições sequencialmente.

Exemplo:
javascript
Copiar código
if (x === y) {
    console.log("x é igual a y");
} else if (x < y) {
    console.log("x é menor que y");
} else {
    console.log("x é maior que y");
}
4. Estrutura switch
Ideal para avaliar uma única variável ou expressão contra múltiplos valores. Substitui longas cadeias de if-else.

Exemplo:
javascript
Copiar código
const cor = "azul";

switch (cor) {
    case "vermelho":
        console.log("A cor é vermelho");
        break;
    case "verde":
        console.log("A cor é verde");
        break;
    case "azul":
        console.log("A cor é azul");
        break;
    default:
        console.log("Cor não reconhecida");
}
📝 Pontos Importantes
break no switch:

Impede a execução dos próximos casos no switch.
Sem break, todos os casos verdadeiros após o primeiro serão executados.
Combinação de Estruturas:

if, else e switch podem ser combinados para lógica mais complexa.
🧩 Resumo Prático
Estrutura	Quando Usar?
if/else	Condições simples ou quando há um único caminho a seguir.
Operador Ternário	Condições curtas e diretas.
if-else Aninhado	Várias condições inter-relacionadas.
switch	Muitas condições baseadas em um único valor.
Confira exemplos práticos no arquivo index.js! 🚀