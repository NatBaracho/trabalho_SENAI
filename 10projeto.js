const prompt = require('prompt-sync')();


let num = prompt("Digite um numero: ");

let contador = parseInt(num);

while (contador >= 0) {
    process.stdout.write(contador + " ");
    contador--;
}
