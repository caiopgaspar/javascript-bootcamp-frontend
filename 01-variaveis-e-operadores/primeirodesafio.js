//Programa para calcular o valor de uma viagem

const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciaEmKm = 100;

const valorDaViagem = (distanciaEmKm / kmPorLitro) * precoCombustivel;

console.log('Preço do combustível: R$', precoCombustivel.toFixed(2));
console.log('Gasto médio de combustível: ', kmPorLitro, 'Km por litro');
console.log('Distância total: ', distanciaEmKm, 'Km');

console.log('Valor total da viagem: R$', valorDaViagem.toFixed(2));