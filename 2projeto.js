const prompt = require('prompt-sync')();

const velocidadePermitida = Number(prompt("Insira a velocidade média da via "));

let velocidadeCondutor = prompt("Insira a velocidade do condutor (em km/h): ");
velocidadeCondutor = Number(velocidadeCondutor); // Converte a entrada para um número

const limiteMultaLeve = velocidadePermitida * 1.20; // 20% acima da velocidade permitida
const limiteMultaGrave = velocidadePermitida * 1.50; // Um exemplo de limite para multa grave

if (velocidadeCondutor <= velocidadePermitida) {
    console.log("Sem Multa");
} else if (velocidadeCondutor <= limiteMultaLeve) {
    console.log("Multa Leve");
} else {
    console.log("Multa Grave");
}