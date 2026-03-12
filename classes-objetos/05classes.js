// Classe é uma definição. Como um objeto deve ser.
class Senai {
    // codigo;
    // cidade;

    // Dentro de uma classe não precisa da palavra function
    descreverEscola(){console.log(`O código ${this.codigo} pertence a Escola SENAI de ${this.cidade}.`)}
}


// Instância é uma ocorrência (criando uma nova escola)
const senaiArqa = new Senai(); // -> senaiArqa{}
// Incrementando o Objeto
senaiArqa.codigo = 603;
senaiArqa.cidade = 'Araraquara';

const senaiMat = new Senai();
senaiMat.codigo = 145;
senaiMat.cidade = 'Matão';
senaiMat.rua = 'Rua das Flores';

senaiArqa.descreverEscola();
senaiMat.descreverEscola();