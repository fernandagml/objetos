// const anna = (num) => num;
// let y = 'banana';
// var num;

// let result = "Not Active.";
// let isActive = false;
// console.log(result, isActive);

// if (isActive !== true) {
//     isActive = true;
//     result = "Active!";
//     console.log(result, isActive);
// }

// try {

// } catch(erro) {
//     let text = `
//     <strong>Nome do erro:</strong> ${erro.name} <br />
//     <strong>Mensagem:</strong> ${erro.message} <br />
//     <strong>Stack: </strong><pre>${erro.stack}</pre>
//     `;

//     document.body.innerHTML = text
// };

const carregarComponente = async (caminho, container) => {
    try {
        const resposta = await fetch(caminho);

        // Valida resposta
        if (!resposta.ok) {
            throw new Error('Erro ao carregar componente');
        };

        // Converte para texto
        const html = await resposta.text();

        // Injeta no DOM
        container.innerHTML = html;

    } catch (erro) {
        console.error(erro);
    };
};
const containerP = document.querySelector('.containerP');
carregarComponente('./c-test.html', containerP);
// RESOLUÇÃO IVO:
// const url = './c-test.html';
// const containerP = document.querySelector('#containerP');
// carregarComponente(url, containerP);


// ERRO PERSONALIZADO:
try {
    let idade = -5;

    if (idade < 0) {
        let erro = new Error('Idade Inválida.');
        erro.codigo = 1001;
        erro.tipo = 'Validação';

        throw erro;

        // Minha resolução:
        // throw new Error('A idade deve ser maior que zero.');
    };

} catch (erro) {
    let text = `
    <strong>Nome do erro:</strong> ${erro.name} <br />
    <strong>Mensagem:</strong> ${erro.message} <br />
    <strong>Código:</strong> ${erro.codigo} <br />
    <strong>Tipo:</strong> ${erro.tipo} <br />
    <strong>Stack:</strong> <span>${erro.stack}</span>
    `;

    document.body.innerHTML = text;
};

// FUNÇÃO GERADORA DE ERRO
const erros = (erro_n, mensagem, codigo, tipo) => {

    if (erro_n < 0) {
        let erro = new Error(mensagem);
        erro.codigo = codigo;
        erro.tipo = tipo;

        throw erro;
    };
};

try {

    erros(-5, 'Idade Inválida', 1001, 'Validação');

} catch (erro) {

    let text = `
    <strong>Nome do erro:</strong> ${erro.name} <br />
    <strong>Mensagem:</strong> ${erro.message} <br />
    <strong>Código:</strong> ${erro.codigo} <br />
    <strong>Tipo:</strong> ${erro.tipo} <br />
    <strong>Stack:</strong> <span>${erro.stack}</span>
    `;

    document.body.innerHTML = text;

};
