const inputSliderMin = document.querySelector('.intervalo__slider--min');
const inputSliderMax = document.querySelector('.intervalo__slider--max');

const btnSortear = document.querySelector('.area__button');
const elementoNumero = document.querySelector('.area__numero');

const listaNumeros = document.querySelector('.historico__lista');
const btnLimparHistorico = document.querySelector('.sorteador__footer--limpar');

const mensagem = document.querySelector('.area__mensagem');


// Atualizar slider com o valor do slide
const atualizarValorSlider = () => {
    const min = Number(inputSliderMin.value);
    const max = Number(inputSliderMax.value);

    // Exibir o valor do slide na interface
    document.querySelector('.intervalo__valor--min').textContent = min;
    document.querySelector('.intervalo__valor--max').textContent = max;
};


// Inicializar interface com os valores atuais
atualizarValorSlider()

// Evento para atualizar o valor em tempo real
inputSliderMin.addEventListener('input', atualizarValorSlider);
inputSliderMax.addEventListener('input', atualizarValorSlider);


// Função para gear um número aleatório
const numeroAleatorioReduzido = (min, max) => {
    Math.floor(Math.random() * (max - min + 1)) + min;
};


const atualizarTexto = (elemento, valor) => {
};


const validarNumero = () => {
    
    const min = inputSliderMin.value.trim();
    const max = inputSliderMax.value.trim();   
    
    if (min === '' || max === '') {

    }

}

btnSortear.addEventListener('click', )

// Capturar os valores
// Evento click no botão 
// Validar os valores
// Aparecer o número sorteado
// Salvar o número sorteado