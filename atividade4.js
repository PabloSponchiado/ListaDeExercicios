/* (5 pontos)
4-Escreva um programa que receba três números inteiros e mostre eles em ordem crescente.
Nome Aluno:Pablo Isaac Sponchiado da Silva
*/
var teclado = require("prompt-sync")();
var n1 = teclado("Digite o primeiro numero: ");
var n2 = teclado("Digite o segundo numero: ");
var n3 = teclado("Digite o terceiro numero: ");
if (n1 < n2 && n3 && n2 < n3) {
    console.log("Primeiro-".concat(n1, ", Segundo-").concat(n2, ",Terceiro-").concat(n3));
}
else if (n2 < n1 && n3 && n1 < n3) {
    console.log("Primeiro-".concat(n2, ", Segundo-").concat(n1, ",Terceiro-").concat(n3));
}
else {
    console.log("Primeiro-".concat(n3, ", Segundo-").concat(n1, ",Terceiro-").concat(n2));
}
