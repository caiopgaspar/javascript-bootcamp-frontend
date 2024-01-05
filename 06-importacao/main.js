/*
const funcoes = require('./funcoes-auxiliares');
console.log(funcoes);
console.log(funcoes.gets());
*/


/*com destructuring:*/
const {gets, print} = require('./funcoes-auxiliares');

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;
for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    } 
}

print (quantidadeDeAlunos);
print(maiorValorEncontrado);





