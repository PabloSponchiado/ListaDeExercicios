/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata, sabendo que PI é
um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA, utilize a
fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: Pablo Isaac Sponchiado da Silva
*/
var teclado = require("prompt-sync")();
var pi = 3.14159;
var altura = teclado("Qual a altura?: ");
var raio = teclado("Qual o raio?: ");
var volume = pi * (raio * 2) * altura;
console.log("O volume da lata \u00E9 ".concat(volume));
