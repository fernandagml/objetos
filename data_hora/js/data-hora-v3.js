const temaDark = {
    corpo: {
        backgroundColor: '#000',
        color: '#ff69b4',
        fontFamily: 'Geneva, Verdana, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: '0'
    },
    saudacao: {
        fontSize: '24px',
        marginBottom: '10px',
        textTransform: 'uppercase',
        letterSpacing: '2px'
    },
    relogio: {
        fontSize: '100px',
        fontWeight: 'bold',
        textShadow: '0 0 15px #ff69b4'
    },
    data: {
        fontSize: '20px',
        marginTop: '10px',
        color: '#ffffff',
        opacity: '0.8'
    },
    button: {
        padding: '12px 24px',
        marginTop: '25px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        color: '#ff69b4',
        border: '2px solid #ff69b4',
        borderRadius: '30px',
        fontSize: '14px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        boxShadow: '0 0 10px rgba(255, 105, 180, 0.3)'
    }
};

const temaLight = {
    corpo: {
        backgroundColor: '#fff',
        color: '#000',
        fontFamily: 'Geneva, Verdana, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        margin: '0'
    },
    saudacao: {
        fontSize: '24px',
        marginBottom: '10px',
        textTransform: 'uppercase',
        letterSpacing: '2px'
    },
    relogio: {
        fontSize: '100px',
        fontWeight: 'bold',
        textShadow: '0 0 10px #000'
    },
    data: {
        fontSize: '20px',
        marginTop: '10px',
        color: '#000',
        opacity: '0.8'
    },
    button: {
        padding: '12px 24px',
        marginTop: '10px',
        cursor: 'pointer',
        backgroundColor: '#000',
        color: '#fff',
        border: 'none',
        borderRadius: '30px',
        fontSize: '14px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }
};

const elementoSaudacao = document.createElement('div');
const elementoRelogio = document.createElement('div');
const elementoDataCompleta = document.createElement('div');
const buttonModoDark = document.createElement('button');
buttonModoDark.textContent = "Modo Dark";
const buttonModoLight = document.createElement('button');
buttonModoLight.textContent = "Modo Light";

aplicarEstilos = (elemento, estilo) => {
    Object.assign(elemento.style, estilo);
};

const atualizarPainel = () => {
    const hora = new Date();

    const horaAtual = hora.getHours();
    let saudacao = 'Boa Noite!';
    if (horaAtual < 12) saudacao = 'Bom Dia!';
    else if (horaAtual < 18) saudacao = 'Boa Tarde!';

    const opcoes = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    elementoSaudacao.textContent = `Olá, ${saudacao}!`;
    elementoRelogio.textContent = hora.toLocaleTimeString('pt-BR');
    elementoDataCompleta.textContent = hora.toLocaleDateString('pt-BR', opcoes);
};

const modoDark = () => {
    aplicarEstilos(document.body, temaDark.corpo),
        aplicarEstilos(elementoSaudacao, temaDark.saudacao),
        aplicarEstilos(elementoRelogio, temaDark.relogio),
        aplicarEstilos(elementoDataCompleta, temaDark.data),
        aplicarEstilos(buttonModoDark, temaDark.button)
};

const modoLight = () => {
    aplicarEstilos(document.body, temaLight.corpo),
        aplicarEstilos(elementoSaudacao, temaLight.saudacao),
        aplicarEstilos(elementoRelogio, temaLight.relogio),
        aplicarEstilos(elementoDataCompleta, temaLight.data),
        aplicarEstilos(buttonModoLight, temaLight.button)
};

modoLight();
modoDark();

buttonModoDark.addEventListener('click', modoDark);
buttonModoLight.addEventListener('click', modoLight);

document.body.append(elementoSaudacao, elementoRelogio, elementoDataCompleta, buttonModoDark, buttonModoLight);

setInterval(atualizarPainel, 1000);
atualizarPainel();