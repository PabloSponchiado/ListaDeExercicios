/* (5 pontos)
3 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.  
Nome Aluno:Pablo Isaac Sponchiado da Silva 
*/

const teclado = require(`prompt-sync`)();

let letra: string = teclado(`Digite a letra: `);


if (letra == `a` || `e` || `i` || `o` || `u` || `A` || `E` || `I` || `O` ||`U`) {
    console.log(`A letra é vogal `)
} 
else {
    console.log(`A letra é consoante`)
}



