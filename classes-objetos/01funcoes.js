// FUNÇÃO SIMPLES

function somar(){
    let v1 = 0;
    let v2 = 0;
    const resultado = v1 + v2;
    console.log(resultado);
};

// somar();
// const soma = somar -> executa a função quando eu pedir
// const soma = somar() -> executa a função diretamente

//FUNÇÃO COM PARÂMETROS

function somarParametros(v1, v2){
    const resultado = v1 + v2;
    console.log(resultado);
};


// FUNÇÃO QUE RETORNA O VALOR

function somarReturn(v1, v2){
    const resultado = v1 + v2;
    return resultado;
}

// Exercício 01: Exemplos

function calcularPorcentagem(valor, porcentagem){
    const calculoPorcentagem = valor * (porcentagem / 100);
    return calculoPorcentagem;
};

function calcularPorcentagem(valor, porcentagem){
    return valor * (porcentagem / 100);
};

const calcularPorcentagemConst = (valor, porcentagem) => valor * (porcentagem / 100);

// Exercício 02

const calcularJuros = (valor, juros) => valor + (valor * (juros / 100));