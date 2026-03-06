// Método é uma função dentro de um objeto
let cidade = 'SP';

const senai = {
    codigo: 603,
    cidade: 'Araraquara',

    // Função anonima pois não está escrito 'function'. Caso esteja, será chamada declarativa.
    descreverEscola(){console.log(`O código ${this.codigo} pertence a Escola SENAI de ${this.cidade}.`)}
};


senai.codigo = 608;
senai.cidade = 'Matão';
senai.descreverEscola();