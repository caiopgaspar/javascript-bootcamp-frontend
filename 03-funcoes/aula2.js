/*
function escreverMeuNome(nome){
    console.log('Meu nome é ' + nome);
}

escreverMeuNome('Caio');


function verificarMaioridade(idade){
    if (idade >= 18){
        console.log('Maior');
    } else {
        console.log('Menor');
    }
}
*/
verificarMaioridade(17);
verificarMaioridade(30);

/*---------------*/

function escreverMeuNome(nome){
    return 'Meu nome é ' + nome;
}

function verificarMaioridade(idade){
    if (idade >= 18){
        return 'Maior';
    } else {
        return'Menor';
    }
}

function nomeEIdade(){
    console.log(escreverMeuNome('Caio') + '\n' + verificarMaioridade(32));
}
nomeEIdade();