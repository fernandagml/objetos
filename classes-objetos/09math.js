const gerarNumeroAleatorio = () => {
    // Math.random() gera um número entre 0 e 1 (exclusivo)
    let numeroAletario = Math.random();
    console.log(`Sorteio: ${numeroAleatorio}`);

    // Multiplicamos por 15 para obter um número entre 0 e 14 (exclusivo)
    numeroAleatorio *= 15;
    console.log(`Multiplicar: ${numeroAleatorio}`);

    // Math.floor() para arredondar para baixo para um número inteiro
    numeroAleatorio = Math.floor(numeroAleatorio);
    console.log(`Arredondar: ${numeroAleatorio}`);

    // Somamos 1 para obter um número entre 1 e 15
    numeroAleatorio += 1;
    console.log(`Somar 1: ${numeroAleatorio}`);

    // Retorna o número aleatório.
    return numeroAleatorio;
};

// Atribuindo a função a uma variável
let numeroSorteado = gerarNumeroAleatorio();
console.log(`Número Sorteado: ${numeroSorteado}`);


// Código otimizado -> Professor
const gerarNumeroAleatorioOtimizado = (min = 1, max = 15) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};