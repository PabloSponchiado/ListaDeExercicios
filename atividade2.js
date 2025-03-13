/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.
Nome Aluno:Pablo Isaac Sponchiado da Silva
*/
var teclado = require("prompt-sync")();
var x = teclado("Digite um numero:");
var y = teclado("Digite outro numero:");
console.log("Voc\u00EA digitou x = ".concat(x, " e y = ").concat(y));
var variavel = x;
x = y;
y = variavel;
console.log("Ap\u00F3s a troca, x = ".concat(x, " e y = ").concat(y));
