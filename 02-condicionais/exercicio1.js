let nota1 = 1;
let nota2 = 1;
let nota3 = 10;
let media = (nota1 + nota2 + nota3) / 3;

console.log('\nMédia das notas:', media);

if (media < 5){
    console.log('Classificação: reprovação');
} else if (media < 7){
    console.log('Classificação: recuperação');
} else {
    console.log('Classificação: passou de semestre');
}
console.log('\n')