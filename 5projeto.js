const prompt = require('prompt-sync')();

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));
let soma = numero1 + numero2;
console.log("A soma de " + numero1 + " e " + numero2 + " é " + soma);
