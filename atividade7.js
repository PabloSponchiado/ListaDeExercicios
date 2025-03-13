/* (10 pontos)
7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia,
e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas,
calcule e escreva o valor total da compra.
Nome Aluno:Pablo Isaac Sponchiado Da Silva
E-mail:pablostz2019@gmail.com
*/
var teclado = require("prompt-sync")();
var total = 0;
var compras = parseInt(teclado("Quantas foram compradas:"));
console.log("Foram compradas ".concat(compras, " ma\u00E7as"));
if (compras > 12) {
    var total_1 = (compras * 0.30);
    console.log("O pre\u00E7o por ma\u00E7a \u00E9 0,30, devido a condi\u00E7\u00E3o");
}
else {
    var total_2 = (compras * 0.25);
    console.log("o pre\u00E7o por ma\u00E7a \u00E9 0,25, devido a condi\u00E7\u00E3o");
}
console.log("o valor total da compra \u00E9 ".concat(total));
