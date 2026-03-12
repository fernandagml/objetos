class Senai {
    constructor(codigo, cidade, anoConstrucao, qntdCursos) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.anoConstrucao = anoConstrucao;
        this.qntdCursos = qntdCursos
        this.idade = new Date().getFullYear() - anoConstrucao;
    };
    
    dadosEscola() {
    console.log(`\n ======= RELATÓRIO DE CADASTRO: ${this.cidade.toUpperCase()} =======`);
    console.log(`- Código: ${this.codigo}`);
    console.log(`- Fundação: ${this.anoConstrucao} (${this.idade} anos de história)`);
    console.log(`- Capacidade: ${this.qntdCursos} cursos ativos`);
    console.log(`=============================================\n`);
    };
};

const escolaA = new Senai(603, 'Araraquara', 1990, 1200);
const escolaB = new Senai(145, 'São Carlos', 2010, 600);
const escolaC = new Senai(545, 'Américo Brasiliense', 1993, 567);
const escolaD = new Senai(608, 'Bauru', 2001, 2321);

escolaA.dadosEscola();
escolaB.dadosEscola();
escolaC.dadosEscola();
escolaD.dadosEscola();

const compararEscolas = (e1, e2) => {
    console.log(`> Comparando oferta de cusos: ${e1.cidade} vs ${e2.cidade}...`)

    if (e1.qntdCursos > e2.qntdCursos) return console.log(`Resultado: O SENAI ${e1.cidade} possui mais cursos.`);
    if (e2.qntdCursos > e1.qntdCursos) return console.log(`Resultado: O SENAI ${e2.cidade} possui mais cursos.`);
    else console.log(`Resultado: Ambas as unidades possuem a mesma quantidade de cursos.`);

    console.log(`Status: ${e1.cidade} (${e1.qntdCursos}) | ${e2.cidade} (${e2.qntdCursos})\n`);
    
    //e1.qntdCursos > e2.qntdCursos? console.log(`Resultado: O SENAI ${e1.cidade} possui mais cursos.`):console.log(`Resultado: O SENAI ${e2.cidade} possui mais cursos.`);
    //e1.qntdCursos === e2.qntdCursos? console.log(`Resultado: Ambas as unidades possuem a mesma quantidade de cursos.`):console.log(`---`);
};

compararEscolas(escolaA, escolaB);