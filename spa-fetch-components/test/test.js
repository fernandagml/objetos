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

// RESOLUÇÃO IVO:
// const url = './c-test.html';
// const containerP = document.querySelector('#containerP');
// carregarComponente(url, containerP);

const containerP = document.querySelector('.containerP');
carregarComponente('./c-test.html', containerP);