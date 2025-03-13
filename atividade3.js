/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.
Nome Aluno:Pablo Isaac Sponchiado da Silva
*/
var teclado = require("prompt-sync")();
var letra = teclado("Digite a letra: ");
if (letra == "a" || "e" || "i" || "o" || "u") {
    console.log("A letra \u00E9 vogal ");
}
else {
    console.log("A letra \u00E9 consoante");
}
