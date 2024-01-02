let precoNormal = 10.5;
let condicaoPagamento = 4;
let valorPagar;

console.log('Condição de pagamento: 1 - Débito, 2 - Dinheiro ou PIX, 3 - Duas vezes, 4 - Acima de duas vezes');

if (condicaoPagamento == 1){
    valorPagar = precoNormal - (precoNormal * 0.1);
} else if ((condicaoPagamento == 2)){
    valorPagar = precoNormal - (precoNormal * 0.15);
} else if (condicaoPagamento == 3){
    valorPagar = precoNormal;
} else if (condicaoPagamento == 4){
    valorPagar = precoNormal + (precoNormal * 0,1);
} else {
    console.log('\nA condição de pagamento deve ser um dos números: 1, 2, 3 ou 4. Sendo 1 - "Débito", 2 - "Dinheiro" ou "PIX", 3 - "Duas vezes" ou 4 - "Acima de duas vezes"\n');
    condicaoPagamento = 0.0001;
}
if (condicaoPagamento != 0.0001){
    console.log('\nPreço normal:', precoNormal.toFixed(2));
    console.log('Condição de pagamento:', condicaoPagamento);
    console.log('Valor total a pagar:', valorPagar.toFixed(2), '\n');
}