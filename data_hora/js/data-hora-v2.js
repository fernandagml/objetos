// 1. Objeto de Estilos (Dicionário CSS)
const temas = {
    estiloPadrao: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
        width: '100vw',
        fontFamily: 'Geneva, Verdana, sans-serif',
        margin: '0'
    },
    modoDark: {
        backgroundColor: 'black',
        color: '#7FFFD4',
        textShadow: '2px 2px 5px #7FFFD4'
    },
    modoLight: {
        backgroundColor: '#fff',
        color: '#000',
        textShadow: '2px 2px 5px black'
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
        color: '#fff',
        opacity: '0.8'
    }
};