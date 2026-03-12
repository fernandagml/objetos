class Senai {
    constructor(codigo, cidade, anoConstrucao) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.idade = new Date().getFullYear() - anoConstrucao;
    };

    // Método
    dadosEscola() {
        console.log(`Unidade: ${this.cidade} | Código Interno: ${this.codigo} | Idade: ${this.idade}`);
    };
}


// Criação feita em uma linha, agora.
const escolaA = new Senai(603, 'Araraquara', 1990);
const escolaB = new Senai(145, 'São Carlos');
const escolaC = new Senai(545, 'Américo Brasiliense');
const escolaD = new Senai(608, 'Bauru');

escolaA.dadosEscola();
escolaB.dadosEscola();
escolaC.dadosEscola();
escolaD.dadosEscola();