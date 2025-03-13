/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata, sabendo que PI é
um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA, utilize a
fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: Pablo Isaac Sponchiado da Silva
*/
const teclado = require(`prompt-sync`)();

let pi : number = 3.14159;
let altura : number = teclado(`Qual a altura?: `);
let raio : number = teclado(`Qual o raio?: `);

let volume: number = pi * (raio * 2) * altura

console.log(`O volume da lata é ${volume}`);
