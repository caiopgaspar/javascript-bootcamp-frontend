class Carro {
    marca;
    cor;
    gastoMedioCombustivelPorKm;

    constructor(marca, cor, gastoMedioCombustivelPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivelPorKm = gastoMedioCombustivelPorKm;
    }

    valorGasto(distanciaKm, precoCombustivel) {
        return distanciaKm * this.gastoMedioCombustivelPorKm * precoCombustivel;
    }
}

const palio = new Carro('Fiat', 'Cinza', 1/12);


console.log(`Carro da marca ${palio.marca}, de cor ${palio.cor} com gasto médio de combustível de ${(palio.gastoMedioCombustivelPorKm).toFixed(2)}L/Km`);
console.log(`Valor gasto: R$${(palio.valorGasto(100, 5.35)).toFixed(2)}`);
