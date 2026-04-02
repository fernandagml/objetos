const app = () => {

    // Criação dos elementos
    const containerData = document.createElement('div');
    const containerHora = document.createElement('div');
    const containerDiaSemana = document.createElement('div');
    const containerContador = document.createElement('div');

    // Adicionando o elemento 'por último' no body
    document.body.appendChild(containerData);
    document.body.appendChild(containerHora);
    document.body.appendChild(containerDiaSemana);
    document.body.appendChild(containerContador);


    const exibirRelogio = () => {
        const hora = new Date();
        containerData.textContent = hora.toLocaleDateString();
        containerHora.textContent = hora.toLocaleTimeString();
        containerDiaSemana.textContent = hora.toLocaleDateString('pt-br', { weekday: 'long' });
    };

    exibirRelogio();
    setInterval(exibirRelogio, 1000);

    // Estilos
    const estiloBasico = () => {
        document.body.style.display = 'flex';
        document.body.style.justifyContent = 'center';
        document.body.style.flexDirection = 'column';
        document.body.style.height = '100vh';
        document.body.style.alignItems = 'center';
        document.body.style.width = '100vw';
        document.body.style.fontSize = 'xx-large';
        document.body.style.margin = '0';
    };

    const modoDark = () => {
        estiloBasico();
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'aquamarine';
        document.body.style.textShadow = '2px 2px 5px aquamarine';
    };
    const modoLight = () => {
        estiloBasico();
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.body.style.textShadow = '2px 2px 5px grey';
    };

    // Configuração dos Botões
    const buttonModoDark = document.createElement('button');
    buttonModoDark.textContent = "Modo Dark";
    document.body.appendChild(buttonModoDark);
    buttonModoDark.addEventListener('click', modoDark);

    const buttonModoLight = document.createElement('button');
    buttonModoLight.textContent = "Modo Light";
    document.body.appendChild(buttonModoLight);
    buttonModoLight.addEventListener('click', modoLight);

    modoLight();
    
};

app()