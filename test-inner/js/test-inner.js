const entrada = document.querySelector('#entrada');
const botao = document.querySelector('#botao');
const resultado = document.querySelector('#resultado');
botao.addEventListener('click', () => {
    resultado.innerHTML = entrada.value;
});