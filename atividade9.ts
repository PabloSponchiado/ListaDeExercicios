/* (15 pontos)
9- Para doar sangue é necessário ter entre 18 e 67 anos e possuir mais de 60Kg. 
Faça um aplicativo que pergunte a idade de uma pessoa e seu peso e diga se ela pode doar sangue ou não, 
caso não diga o(s) motivo(s).
Nome:Pablo Isaac Sponchiado Da Silva
*/
const teclado = require('prompt-sync')();
console.log(`-----------------------------`)
console.log("Digite sua idade e seu peso: ");
console.log(`-----------------------------`)
let idade = parseInt(teclado("Digite a sua idade: "));
let peso = parseInt(teclado("Digite o seu peso: "));
if (idade >= 18 && idade <= 67 && peso > 60) {
    console.log("Você pode doar sangue.");
} else {
    if (idade < 18 || idade > 67) {
        console.log("Você não pode doar sangue por causa da sua idade.");
    }
    if (peso <= 60) {
        console.log("Você não pode doar sangue por causa do seu peso.");
    }
};