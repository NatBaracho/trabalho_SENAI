const prompt = require('prompt-sync')();

let conta = Number(prompt("Digite o valor da conta: "));
let clientes = Number(prompt("Digite o número de clientes: "));
let valorPorCliente = conta / clientes;

console.log("Cada cliente deve pagar: R$ " + valorPorCliente.toFixed(2));
