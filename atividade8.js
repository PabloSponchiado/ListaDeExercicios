/* (10 pontos)
8-Escreva um programa que leia o valor de 3 ângulos de um triângulo e escreva se o triângulo é Acutângulo, Retângulo ou Obtusângulo. Sendo que:
− Triângulo Retângulo: possui um ângulo reto. (igual a 90º)
− Triângulo Obtusângulo: possui um ângulo obtuso. (maior que90º)
− Triângulo Acutângulo: possui três ângulos agudos. (menor que 90º)
Nome Aluno:Pablo Isaac Sponchiado da Silva
E-mail:pablostz2019@gmail.com
*/
var teclado = require('prompt-sync')();
console.log("Digite os valores dos ângulos do triângulo: ");
var a1 = parseInt(teclado("Digite o primeiro ângulo: "));
var a2 = parseInt(teclado("Digite o segundo ângulo: "));
var a3 = parseInt(teclado("Digite o terceiro ângulo: "));
var soma = a1 + a2 + a3;
if (soma == 180) {
    if (a1 == 90 || a2 == 90 || a3 == 90) {
        console.log("Triângulo Retângulo");
    }
    else if (a1 > 90 || a2 > 90 || a3 > 90) {
        console.log("Triângulo Obtusângulo");
    }
    else {
        console.log("Triângulo Acutângulo");
    }
}
else
    console.log("Os ângulos informados não formam um triângulo.");
