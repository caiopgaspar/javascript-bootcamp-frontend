class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`)
    }
}

/*instância - ocorrência do objeto*/
const caio = new Pessoa();
caio.nome = 'Caio H P Gaspar';
caio.idade = 32

const livia = new Pessoa();
livia.nome = 'Livia';
livia.idade = 28

console.log(caio);
console.log(livia);

caio.descrever();
livia.descrever();


const henrique = new Pessoa('Henrique',33);
console.log(henrique);