/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.
Nome Aluno:Pablo Isaac Sponchiado da Silva
*/

const teclado = require(`prompt-sync`)();

let x : string =teclado(`Digite um numero:`);
let y : string =teclado(`Digite outro numero:`);

console.log(`Você digitou x = ${x} e y = ${y}`);

let z = x;
x = y;
y = z;

console.log(`Após a troca, x = ${x} e y = ${y}`);