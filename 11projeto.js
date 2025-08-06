const prompt = require('prompt-sync')();

let chinchilas = Number(prompt("Digite o número atual de chinchilas (mínimo 2): "));
while (chinchilas < 2) {
    chinchilas = Number(prompt("Valor inválido! Digite o número atual de chinchilas (mínimo 2): "));
}

let anos = Number(prompt("Digite o número de anos: "));
let anoAtual = 2025;

console.log("Ano " + anoAtual + ": " + chinchilas + " chinchilas");
for (let i = 1; i <= anos; i++) {
    chinchilas *= 3;
    anoAtual++;
    console.log("Ano " + anoAtual + ": " + chinchilas + " chinchilas");
}
