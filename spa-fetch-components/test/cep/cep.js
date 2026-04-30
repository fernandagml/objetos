// EXERCÍCIO CEP:
const inputCep = document.querySelector('.cep');

const buttonThen = document.querySelector('#buttonThen');
const contentResultadoBusca = document.querySelector('#resultadoBusca')



const resultadoBusca = buttonThen.addEventListener('click', async = () => {
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
);