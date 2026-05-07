const municipiosInput = document.querySelector('#municipios');
const estadoInput = document.querySelector('#estados');

async function buscarLocalThen() {
    const estado = estadoInput.value;
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`;

    municipiosInput.disabled = false;
    try {
        let resposta = await fetch(url);
        if (!resposta.ok) {
            throw new Error('Erro na Requisição.');
        };
        let municipios = await resposta.json();
        console.log(municipios)
        for (let municipio of municipios) {
            console.log(municipio)
            let linha = `<option value='${municipio.id}'>${municipio.nome}</option>`;
            municipiosInput.innerHTML += linha;
        }
    } catch (error) {
        console.warn('Erro:', error.message);
    };
}

estadoInput.addEventListener('input', buscarLocalThen)