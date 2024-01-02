function calcularIMC(peso, altura) {
    return peso / Math.pow(altura,2);    
}

function classificarIMC(imc){
    if (imc < 18.5){
        return 'Abaixo do peso';
    } else if (imc < 25){
        return 'Peso normal';
    } else if (imc < 30){
        return 'Acima do peso';
    } else if (imc < 40){
        return 'Obeso';
    } else {
        return 'Obesidade grave';
    }
}

/*Função principal
function main() {
    let pesoKg = 87;
    let alturaM = 1.87;
    let imc = calcularIMC(pesoKg, alturaM)

    console.log('\nIMC =', imc.toFixed(2));
    console.log(classificarIMC(imc));
    console.log('\n');
}

main();
*/

/*Função anônima executada apenas uma vez, declarada e invocada em seguida*/
(function () {
    let pesoKg = 87;
    let alturaM = 1.87;
    let imc = calcularIMC(pesoKg, alturaM)

    console.log('\nIMC =', imc.toFixed(2));
    console.log(classificarIMC(imc));
    console.log('\n');
})();