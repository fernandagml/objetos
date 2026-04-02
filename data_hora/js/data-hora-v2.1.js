// 1. Objeto de Estilos (Dicionário CSS)
const temas = {
    corpo: {
        backgroundColor: '#121212',
        color: '#00ff99',
        fontFamily: "'Courier New', Courier, monospace",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: '0',
        textShadow: '0 0 10px rgba(0, 255, 153, 0.5)'
    },
    saudacao: {
        fontSize: '24px',
        marginBottom: '10px',
        textTransform: 'uppercase',
        letterSpacing: '2px'
    },
    relogio: {
        fontSize: '100px',
        fontWeight: 'bold'
    },
    data: {
        fontSize: '20px',
        marginTop: '10px',
        color: '#ffffff',
        opacity: '0.8'
    }
};

const elementoSaudacao= document.createElement('div');
const elementoRelogio = document.createElement('div');
const elementoDataCompleta = document.createElement('div');

aplicarEstilos = (elemento, estilo) => {
    Object.assign(elemento.style, estilo);
};

const saudacao = () => {
    const hora = new Date();

    const horaAtual = hora.getHours();
    let saudacao = 'Boa Noite!';
    if (horaAtual < 12) saudacao = 'Bom Dia!';
    else if (horaAtual < 18) saudacao = 'Boa Tarde!';

    elementoSaudacao.textContent = `Olá, ${saudacao}!`;
};

const relogio = () => {
    const hora = new Date();
    elementoRelogio.textContent = hora.toLocaleTimeString('pt-BR');
};

const dataCompleta = () => {
    const hora = new Date();
    const opcoes = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    elementoDataCompleta.textContent = hora.toLocaleDateString('pt-BR', opcoes);
}

const atualizarPainel = () => {
    saudacao();
    relogio();
    dataCompleta();
};

aplicarEstilos(document.body, temas.corpo);
aplicarEstilos(elementoSaudacao, temas.saudacao);
aplicarEstilos(elementoRelogio, temas.relogio);
aplicarEstilos(elementoDataCompleta, temas.data);

document.body.append(elementoSaudacao, elementoRelogio, elementoDataCompleta);

setInterval(atualizarPainel, 1000);
atualizarPainel();