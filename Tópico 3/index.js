// 📜 Criando uma String
const meu_nome = "Levi Navlig Trajano de Medeiros";
console.log("String original:", meu_nome);

// 🔗 Concatenação de Strings
console.log("Meu nome é " + meu_nome);

// 📝 Criando uma String Dinâmica com Template Literals
console.log(`Meu nome é ${meu_nome}`);

// 🛠️ Usando as propriedades e métodos de uma string

// 📏 Mostrando o comprimento da string
console.log("Comprimento da string:", meu_nome.length);

// 🔡 Convertendo para maiúsculo e minúsculo
console.log("Maiúsculas:", meu_nome.toUpperCase());
console.log("Minúsculas:", meu_nome.toLowerCase());

// ✂️ Demonstrando substring
console.log("Substring (primeiros 5 caracteres):", meu_nome.substring(0, 5));

// 🔗 Dividindo a string usando o método split
console.log("Dividido por 'i':", meu_nome.split("i"));