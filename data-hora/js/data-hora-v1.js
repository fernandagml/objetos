// Criando elementos no js para manter o código funcional.
const containerData = document.createElement('div');
const containerHora = document.createElement('div');
const containerDiaSemana = document.createElement('div');

document.body.appendChild(containerData);
document.body.appendChild(containerHora);
document.body.appendChild(containerDiaSemana);

function atualizarRelogio() {
    const hora = new Date();

    containerData.textContent = hora.toLocaleDateString();
    containerHora.textContent = hora.toLocaleTimeString();
    containerDiaSemana.textContent = hora.toLocaleDateString('pt-br', {weekday: 'long'});
};

atualizarRelogio()

func

// Pq está usando function ao invés de const e pq definir estilo por estilo
const modoDark = () => {
    document.body.style = 'display: flex; justify-content: center; flex-direction: column; background-color: black; color: aquamarine; text-shadow: 2px 2px 5px aquamarine; height: 100vh; align-items: center; width: 100vw; font-size: xx-large;';
}

const modoLight = () => {
    document.body.style = 'display: flex; justify-content: center; flex-direction: column; background-color: white; color: black; height: 100vh; align-items: center; width: 100vw; font-size: xx-large;';
}

modoDark()


// const getSaudacao = () => {
//     const hora = new Date().getHours();
//     if (hora < 12) return 'Bom Dia!';
//     if (hora < 18) return 'Boa Tarde!';
//     return 'Boa Noite!';
// };

// const formatarHora = () => {
//     const horaAtual = new Date();
//     const dia = horaAtual.getDate().toString().padStart(2, '0');
//     const mes = (horaAtual.getMonth() + 1).toString().padStart(2, '0');
//     const ano = horaAtual.getFullYear();

//     return `${dia}/${mes}/${ano}` 
// };

// const formatarData = () => {
//     const horaAtual = new Date();
//     const diasSemana = [
//         'Domingo',
//         'Segunda-Feira',
//         'Terça-Feira',
//         'Quarta-Feira',
//         'Quinta-Feira',
//         'Sexta-Feira',
//         'Sábado'
//     ];
//     const diaSemana = diasSemana[horaAtual.getDay()];



//     return `${diaSemana}`;
// };

// const formatarHora = () => {

//     const hora = horaAtual.getHours().toString().padStart(2, '0');
//     const minuto = horaAtual.getMinutes().toString().padStart(2, '0');
//     const segundo = horaAtual.getSeconds().toString().padStart(2, '0');

//     return `${hora}:${minuto}:${segundo}`;
// }