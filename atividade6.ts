/* (15 pontos)
6 – Ler valor de nota de N1 e N2 calcule a média e escrever a nota correspondente,
 tal que 0 é a menor nota e 10 a maior, e imprimir o conceito equivalente (A, B, C, D ou E), 
 conforme a seguinte tabela:
  A  -   nota=>8,5  nota=<10
  B  -   nota=>7     nota<8,5
  C  -   nota=>5     nota<7
  D  -   nota=>3     nota<5
  E  -   nota>3

Nome Aluno:Pablo Isaac Sponchiado Da Silva
*/

const teclado = require(`prompt-sync`)();

let n1: number = teclado(`Qual a primeira nota: `);
let n2: number = teclado(`Qual a segunda nota: `);

let media: number = ((n1 + n2) / 2);

if (media >= 8.5 && media <= 10) {
    console.log(`Sua nota final é A`);
}
else if (media >= 7 && media < 8.5) {
    console.log(`Sua nota final é B`);
}
else if (media >= 5 && media < 7) {
    console.log(`Sua nota final é C`);
}
else if (media >= 3 && media < 5) {
    console.log(`Sua nota final é D`);
}
else {
    console.log(`Sua nota final é E`);
}