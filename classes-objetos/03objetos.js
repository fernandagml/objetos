// Delcaração de um objeto.
// Chave: valor

let quadrado01 = {}; // Objeto

let quadrado02 = []; // Array

let quadrado03 = [{}]; // Array de objetos -> Mais comum


// Forma Literal
let quadrado1 = {
    lados: 4, // É uma propriedade do quadrado -> ele possui 4 lados
    area: function(lado){return lado * lado},
    perimetro: function(lado){return lado * 4}
}; // uma função(area) dentro de um objeto se chama método.


// Forma Reduzida
let quadrado2 = {
    lados: 4,
    cor: '#000',
    area(lado) {return lado * lado},
    perimetro(lado) {return this.lados * lado} // This retorna a propriedade lados -> 4 lados vezes o valor de cada lado.
};

// quadrado1.cor = '#000';