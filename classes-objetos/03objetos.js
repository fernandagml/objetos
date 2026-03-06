// Delcaração de um objeto.
// Chave: valor

let quadrado01 = {}; // Objeto

let quadrado02 = []; // Array

let quadrado03 = [{}]; // Array de objetos -> Mais comum


// Forma Literal
let quadrado1 = {
    lados: 4, // É uma propriedade do quadrado -> ele possui 4 lados
    //Função descritiva
    area: function(lado){return lado * lado},
    perimetro: function(lado){return this.lados * lado}
}; // uma função(area) dentro de um objeto se chama método.


// Forma Reduzida
let quadrado2 = {
    lados: 4,
    cor: '#000',
    area(lado) {return lado * lado},
    perimetro(lado) {return this.lados * lado} // This retorna a propriedade lados que está definida dentro do próprio objeto -> 4 lados vezes o valor de cada lado.
};

// quadrado1.cor = '#000';

const senai = {
    codigo: 603,
    cidade: 'Araraquara'
}

console.log('-----------------------');

senai.telefone = 1633035252;
senai.rua = 'Hugo Negrini';
senai.telefone = 1723158968;
delete senai.rua;

senai.endereco = {
    rua: 'Hugo Negrini',
    bairro: 'Quitandinha',
    numero: 60
};

senai.aluno = ['SESI', 'EEBA', 'Comunidade'];

senai.endereco.numero = 62; // Para trocar o número dentro do Objeto

senai.aluno[2] = 'Fatec'; // Para trocar o item dentro do Array

console.log(senai);