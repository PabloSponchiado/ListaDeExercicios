/* (10 pontos)
7 - As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia,
e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas,
calcule e escreva o valor total da compra.
Nome Aluno:Pablo Isaac Sponchiado Da Silva
E-mail:pablostz2019@gmail.com
*/

const teclado = require(`prompt-sync`)();
let total: number = 0
let compras = parseInt(teclado(`Quantas foram compradas:`));

console.log(`Foram compradas ${compras} maças`)

if (compras > 12) {
    let total = compras * 0.30;
    console.log(`O preço por maça é 0,30, devido a condição`);
} else {
    let total = compras * 0.25;
    console.log(`o preço por maça é 0,25, devido a condição`);
}
console.log(`o valor total da compra é ${total}`);