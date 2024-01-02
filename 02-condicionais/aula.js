const numero = 10;

const eNumeroPar = (numero % 2) === 0;

console.log(eNumeroPar)

/*
= recebe valor
== compara valores mas sem ver o tipo
=== compara valor e tipo (mais utilizado)
*/

if (eNumeroPar){
    console.log('É par');
} else {
    console.log('É ímpar');
}


//---------


const numero2 = 5;

const isNumeroDivisivelPor5 = (numero2 % 5) === 0;


if (numero2 === 0) {
    console.log('O número é inválido')
} else if (isNumeroDivisivelPor5){
    console.log('Sim');
    } else {
    console.log('Não');
}