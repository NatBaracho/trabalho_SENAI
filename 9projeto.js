const prompt = require('prompt-sync')();

let preco = Number(prompt("Preço R$: "));
let aVista = preco * 0.9; // 10% de desconto
let parcela = preco / 10;  // valor de cada parcela

console.log("À Vista R$: " + aVista.toFixed(2));
console.log("Ou 10x de R$: " + parcela.toFixed(2));
