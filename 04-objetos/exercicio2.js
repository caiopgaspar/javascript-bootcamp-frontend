class PessoaImc {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / Math.pow(this.altura, 2);
    }

    dizerImc(){
        console.log(`Me chamo ${this.nome} e meu IMC é ${(this.calcularImc()).toFixed(1)}`);
    }

    classificarIMC(){
        const imc = this.calcularImc();
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
}


const jose = new PessoaImc('José', 70, 1.75);

jose.dizerImc();

console.log('Me chamo ' + jose.nome + ' e a classificação do meu IMC é: ' +jose.classificarIMC());
