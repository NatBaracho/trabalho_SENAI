const prompt = require('prompt-sync')();

let dias = Number(prompt("N° Dias: "));
let horasInput = prompt("N° Horas (hh:mm): ");
let partes = horasInput.split(":");
let horas = Number(partes[0]);
let minutos = partes[1] ? Number(partes[1]) : 0;

let totalHoras = (dias * 24) + horas;
let totalMinutos = minutos;

