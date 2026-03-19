/* Exercícios:
  1. No molde da classe 'Senai', adicione o atributo 'statusFuncionamento' 
     que deve iniciar sempre como 'false' (escola fechada por padrão).
  2. Crie o método 'abrirEscola()' para alterar o status para 'true' e
     exibir uma mensagem de boas-vindas.
  3. Crie o método 'fecharEscola()' para alterar o status para 'false' e
     avisar que as atividades encerraram.
  4. Teste as funcionalidades nas instâncias criadas.
*/

class Senai {
    constructor(codigo, cidade, anoConstrucao, qntdCursos) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.qntdCursos = qntdCursos;
        this.idade = new Date().getFullYear() - anoConstrucao;
        this.statusFuncionamento = false;
    };

    abrirEscola() {
        this.statusFuncionamento = true;
        console.log(`[SISTEMA]: O SENAI ${this.cidade} agora está ABERTO. Bem-vindos!`);
    };
    
    fecharEscola() {
        this.statusFuncionamento = false;
        console.log(`[SISTEMA]: O SENAI ${this.cidade} agora está FECHADO. Até amanhã!`);
    };

    descricaoEscola(){
        const statusTexto = this.statusFuncionamento? 'ABERTO':'FECHADO';

        console.log(`\n======= UNIDADE: ${this.cidade.toUpperCase()} (${this.codigo}) =======`);
        console.log(`Status Atual: ${statusTexto}`);
        console.log(`Idade: ${this.idade} | Cursos: ${this.qntdCursos}`);
        console.log(`=========================================\n`);

        // this.statusFuncionamento? console.log(this.abrirEscola()):console.log(this.fecharEscola());
    };
};

const escolaAqa = new Senai(603, 'Araraquara', 1990, 1200);
const escolaSC = new Senai(145, 'São Carlos', 1930, 600);

// escolaAqa.descricaoEscola();
// escolaSC.descricaoEscola();


//Aqa
escolaAqa.descricaoEscola();

// Abrindo escola:
escolaAqa.abrirEscola();
escolaAqa.descricaoEscola();

// Fechando escola:
escolaAqa.fecharEscola();
escolaAqa.descricaoEscola();


// SC
escolaSC.descricaoEscola();

// Abrindo escola:
escolaSC.abrirEscola();
escolaSC.descricaoEscola();

// Fechando escola:
escolaSC.fecharEscola();
escolaSC.descricaoEscola();