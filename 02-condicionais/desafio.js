/*Calcular o valor de uma viagem*/


const precoEtanol = 4.5;
const precoGasolina = 5.5;
const tipoCombustDoCarro = 'Etanol';
const kmPorLitro = 11;
const kmDistancia = 70;
let valorViagem;

console.log('\nTipo do combustível informado:', tipoCombustDoCarro);

if (tipoCombustDoCarro == 'Gasolina'){
    console.log('Preço do combustível: R$', precoGasolina.toFixed(2));
    valorViagem = (kmDistancia / kmPorLitro) * precoGasolina;
} else if (tipoCombustDoCarro == 'Etanol'){
    console.log('Preço do combustível: R$', precoEtanol.toFixed(2));
    valorViagem = (kmDistancia / kmPorLitro) * precoEtanol;
} else {
    console.log('O tipo do combustível deve ser: Gasolina ou Etanol \n')
}

if (valorViagem != null){
    console.log('Gasto médio de combustível:', kmPorLitro, 'Km por litro');
    console.log('Distância total:', kmDistancia, 'Km \n');
    console.log('Valor total da viagem: R$', valorViagem.toFixed(2), '\n');
}