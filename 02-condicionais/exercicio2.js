let pesoKg = 87;
let alturaM = 1.87;
let imc = pesoKg / (Math.pow(alturaM,2));

console.log('\nIMC =', imc.toFixed(2));

if (imc < 18.5){
    console.log('Abaixo do peso')
} else if (imc < 25){
    console.log('Peso normal');
} else if (imc < 30){
    console.log('Acima do peso');
} else if (imc < 40){
    console.log('Obeso');
} else {
    console.log('Obesidade grave');
}

console.log('\n')