
/*declarando objeto*/
const pessoa = {
    nome: 'Caio H P Gaspar',
    idade: 32,

    /*método*/
    descrever: function () {
        this
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`)
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);

/*incluindo atributo*/
pessoa.altura = 1.87;

console.log(pessoa);

/*excluindo atributo*/
delete pessoa.altura;

console.log(pessoa);
console.log('\n')

/*chamando método*/
pessoa.descrever();

console.log('\n')

pessoa.nome = 'Livia';
pessoa.idade = 28;

pessoa.descrever();

console.log('\n')

/*alterando método*/
pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
};

pessoa.descrever();
console.log('\n')

/*acessando dinamicamente um atributo */
const atributo = 'idade';

console.log(pessoa[atributo]);

pessoa['nome'] = 'teste';
/*pessoa.nome = 'teste'*/

pessoa.descrever();


