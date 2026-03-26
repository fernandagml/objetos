const quantidadeNumerosRecentes = 8
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

const validarIntervalo = () => {
    const min = Number(inputSliderMin.value);
    const max = Number(inputSliderMax.value);

    if (min > max) {
        inputSliderMin.value = max;
        atualizarValorSlider();
        mensagem.textContent = 'Atenção! O valor mínimo deve ser menor que o valor máximo.';
    } else if (max < min) {
        inputSliderMin.value = max;
        atualizarValorSlider();
        mensagem.textContent = 'Atenção! O valor mínimo deve ser menor que o valor máximo.';
    } else {
        atualizarValorSlider();
        mensagem.textContent = ''
    };
};


// Inicializar interface com os valores atuais
atualizarValorSlider()

// Evento para atualizar o valor em tempo real
inputSliderMin.addEventListener('input', validarIntervalo);
inputSliderMax.addEventListener('input', validarIntervalo);


// Função para gear um número aleatório
const gerarNumeroAleatorio = (min, max) => {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
};


const atualizarTextoNumeroSorteado = (elemento, valor) => {
    elemento.textContent = valor;
};


const criarItemHistorico = (numero) => {
    const li = document.createElement('li');
    li.textContent = numero;

    // API
    li.addEventListener('click', () => {
        navigator.clipboard.writeText(numero);
    });

    return li
};


const atualizarHistorico = (lista, item, limite) => {
    // Prepend coloca o item na primeira linha da lista. (apend coloca em último).
    lista.prepend(item);

    if (lista.children.length > limite) {
        lista.removeChild(lista.lastChild);
    };
};


const limparHistorico = () => {
    if(confirm('Deseja realmente limpar o histórico de sorteios?')) {
        listaNumeros.textContent = '';
        elementoNumero.textContent = '0';
    };
};


btnSortear.addEventListener('click', () => {
    const min = Number(inputSliderMin.value);
    const max = Number(inputSliderMax.value);

    mensagem.textContent = '';

    const num = gerarNumeroAleatorio(min, max);
    atualizarTextoNumeroSorteado(elementoNumero, num);
    const item = criarItemHistorico(num);
    atualizarHistorico(listaNumeros, item, quantidadeNumerosRecentes);
})

btnLimparHistorico.addEventListener('click', limparHistorico);