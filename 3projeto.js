const prompt = require('prompt-sync')();

let lado1 = prompt("Insira o primeiro lado: ");
let lado2 = prompt("Insira o segundo lado: ");
let lado3 = prompt("Insira o terceiro lado: ");

lado1 = Number(lado1);
lado2 = Number(lado2);
lado3 = Number(lado3);

if (lado1 === lado2 && lado2 === lado3) { //se todos os lados são iguais, é preciso encadear as comparações usando o operador lógico &&.
    console.log("Triângulo Equilátero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) { //O operador || (OU) permite que uma das condições seja verdadeira para que todo o bloco de código seja executado
    console.log("Triângulo Isósceles");
} else {
    console.log("Triângulo Escaleno");
}

/*
Comparação de Igualdade: Em JavaScript, para verificar se dois valores são iguais, usamos o operador de comparação == ou ===. Você estava usando o operador de atribuição =, que define um valor, e não compara.

Múltiplas Comparações: A lógica lado1 = lado2 = lado3 não funciona como você espera. Para verificar se todos os lados são iguais, é preciso encadear as comparações usando o operador lógico && (E). A forma correta é lado1 === lado2 && lado2 === lado3.

Condição para Triângulo Isósceles: Para um triângulo ser isósceles, pelo menos dois de seus lados precisam ser iguais. A sua lógica original lado1 = lado2 != lado3 não estava correta. A maneira certa de expressar isso é lado1 === lado2 || lado1 === lado3 || lado2 === lado3, que significa "o lado 1 é igual ao lado 2, OU o lado 1 é igual ao lado 3, OU o lado 2 é igual ao lado 3". O operador || (OU) permite que uma das condições seja verdadeira para que todo o bloco de código seja executado.
*/