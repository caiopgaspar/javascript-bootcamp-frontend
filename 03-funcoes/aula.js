function sayMayName(name){
    console.log('Your name is: ' + name);
}

sayMayName('Caio');

function quadrado(valor){
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

console.log(quadrado(2) + quadrado(2));


function incrementarJuros(valor, percenturalJuros) {
    const valorDeAcrescimo = (percenturalJuros / 100) * valor
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(90,15));
console.log('\n\n------------------\n\n');

/*----------------------*/

function main(){
    console.log('Programa principal');
}

main();