/* (10 pontos)
5 – Faça um programa que o usuário digite dois números e o programa informe qual é o número maior,
 com a seguinte frase: `O número maior é ${variavel} e o número menor é ${variavel}`,
  se ser iguais uma frase:  ` Os números ${variavel} e ${variavel} são iguais`.
Nome:Pablo Isaac Sponchiado da Silva
*/
var teclado = require("prompt-sync")();
var n1 = teclado("Qual o primeiro numero: ");
var n2 = teclado("Qual o segundo numero:");
if (n1 > n2) {
    console.log("O n\u00FAmero maior \u00E9 ".concat(n1, " e o n\u00FAmero menor \u00E9 ").concat(n2));
}
else if (n1 < n2) {
    console.log("O n\u00FAmero maior \u00E9 ".concat(n2, " e o n\u00FAmero menor \u00E9 ").concat(n1));
}
else {
    console.log("Os n\u00FAmeros ".concat(n1, " e ").concat(n2, " s\u00E3o iguais"));
}
