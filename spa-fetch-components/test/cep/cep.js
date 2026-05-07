// EXERCÍCIO CEP:
const inputCep = document.querySelector('.cep');

const buttonThen = document.querySelector('#buttonThen');
const buttonAsyncAwait = document.querySelector('#buttonAsyncAwait')

function buscarCepThen() {
    const valueCep = inputCep.value
    const url = `https://viacep.com.br/ws/${valueCep}/json/`;
    fetch(url)
        .then((resposta) => {
            if (!resposta.ok) {
                console.log(resposta)
                throw new Error('Erro na Requisição.');

            };
            return resposta.json();
        })
        .then((dados) => {
            if (dados.erro) {
                throw new Error('Cep inválido ou não encontrado.');
            };
            console.log(dados);
        })
        .catch((error) => {
            console.warn(error.message);
        })
}
buttonThen.addEventListener('click', buscarCepThen);


/* Criar uma requisição HTTP com fecth e async/await */
async function buscarCepAsyncAwait() {
    const valueCep = inputCep.value
    const url = `https://viacep.com.br/ws/${valueCep}/json/`;
    try {
        let resposta = await fetch(url);
        if (!resposta.ok) {
            console.log(resposta)
            throw new Error('Erro na Requisição.');
        };
        let dataObj = await resposta.json();
        if (dataObj.erro) {
            throw new Error('Cep inválido ou não encontrado.');
        };
        console.log(dataObj);
    } catch (error) {
        console.warn(error.message);
    }

};
buttonAsyncAwait.addEventListener('click', buscarCepAsyncAwait)