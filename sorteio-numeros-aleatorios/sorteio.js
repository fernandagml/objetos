const form = document.querySelector('.sorteio__form');
const inputMin = document.querySelector('.sorteio__input--min');
const inputMax = document.querySelector('.sorteio__input--max');
const resultado = document.querySelector('.sorteio__resultado--texto');

// Evento do formulário
form.addEventListener('submit', (event) => {
    event.preventDefault() // Controla o recarregamento

    const min = inputMin.value.trim();
    const max = inputMax.value.trim();

    if (min === '' || max === '') {
        resultado.textContent = 'Preencha os dois campos para realizar o sorteio.';
        return;
    }

    const numeroMin = Number(min);
    const numeroMax = Number(max);

    if (isNaN(numeroMin) || isNaN(numeroMax)) {
        resultado.textContent = 'Digite apenas números.';
        return;
    }

    if (numeroMin > numeroMax) {
        resultado.textContent = 'O valor mínimo não pode ser maior que o valor máximo.';
        return;
    }

    const numeroSorteado = Math.floor(Math.random() * (numeroMax - numeroMin + 1)) + numeroMin;
    resultado.textContent = `Número Sorteado: ${numeroSorteado}.`;
})