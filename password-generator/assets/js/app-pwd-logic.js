/* Seleciona os elementos do DOM usando o método querySelector, que retorna o primeiro elemento 
que corresponde ao seletor CSS especificado */
const sliderElement = document.querySelector('.app-pwd__main--input-slider'); // Elemento do controle deslizante
const buttonElement = document.querySelector('.app-pwd__main--input-button'); // Botão de gerar senha
const clearButton = document.querySelector('.app-pwd__main--input-button-clear'); //Botão para limpar o histórico de senhas
const sizePassword = document.querySelector('.app-pwd__main--input-size'); // Elemento que mostra o tamanho da senha
const password = document.querySelector('.app-pwd__main--result-output'); // Elemento que exibe a senha gerada
const containerPassword = document.querySelector('.app-pwd__main--result'); // Container da senha gerada
const welcomeElement = document.querySelector('.app-pwd__header--welcome'); // Elemento de saudação
const datetimeElement = document.querySelector('.app-pwd__header--datatime'); // Elemento de data e hora


/* Objeto que contém os conjuntos de caracteres possíveis para a geração de senha */
const charsets = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWYZ',
  lowercase: 'abcdefghijklmnopqrstuv',
  numbers: '0123456789',
  special: '!@#$%&*'
};


/* Variáveis para armazenar a senha atual e o histórico de senhas */
let senha = '';
let historico = []; // Array


/* Função que retorna uma saudação baseada na hora atual do dia*/
const getSaudacao = () => {
  const hora = new Date().getHours();
   /**
   * Regras da saudação:
   * 00:00 - 11:59 -> Bom dia
   * 12:00 - 17:59 -> Boa tarde
   * 18:00 - 23:59 -> Boa noite
   */
  if (hora < 12) return 'Bom Dia!';
  if (hora < 18) return 'Boa Tarde!';
  return 'Boa Noite!';
};


/* Função que formata a data e hora atual em um formato legível
Utiliza vários métodos do objeto Date para obter os componentes da data */
const formatarDataHora = () => {

  /** Cria um objeto com a data e hora atual */
  const horaAtual = new Date();

  /** Array com os nomes dos dias da semana */
  const diasSemana = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado'
  ]

  /** Obtém o dia da semana */
  const diaSemana = diasSemana[horaAtual.getDay()];

  /** Dados da data */
  const dia = horaAtual.getDate().toString().padStart(2, '0');
  const mes = (horaAtual.getMonth() + 1).toString().padStart(2, '0');
  const ano = horaAtual.getFullYear();
  
  /* Hora como número (para lógica, se necessário no futuro)
  * Aqui usamos apenas para formatação */
  const hora = horaAtual.getHours().toString().padStart(2, '0');
  const minuto = horaAtual.getMinutes().toString().padStart(2, '0');
  const segundo = horaAtual.getSeconds().toString().padStart(2, '0');

  /** Retorna apenas a data e hora (sem saudação) */
  return `${diaSemana}, ${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}


/* Função que atualiza o cabeçalho com a saudação e a data/hora atual */
const atualizarHeader = () => {
  welcomeElement.textContent = `${getSaudacao()}!`;
  datetimeElement.textContent = formatarDataHora();
}

/* Atualizar header a cada segundo */
setInterval(atualizarHeader, 1000);

/* Inicializar header */
atualizarHeader();

/* Exibe inicialmente o valor do slider*/
sizePassword.textContent = sliderElement.value;

/* Atualiza o valor exibido do tamanho da senha conforme o slider é movimentado */
sliderElement.addEventListener('input', (e) => {
  sizePassword.textContent = e.target.value;
});


/* Função principal para gerar a senha */
const generatePassword = () => {

}

// String que armazenará todos os caracteres possíveis para a senha

  /* Obter os checkboxes selecionados */




  /* Construir o charset baseado nas opções selecionadas */
 

  /* Se nenhuma opção estiver selecionada, selecionar todas */
 

  // Inicializa uma string vazia para armazenar a senha gerada
 


  /* Loop que itera pelo número de caracteres definido no slider
 Usa o operador de incremento (++) para aumentar o contador */

  
    /* Adiciona um caractere aleatório à senha:
    1. Math.random() gera um número decimal entre 0 e 1
    2. Multiplicado pelo comprimento do charset para obter um índice válido
    3. Math.floor() arredonda para baixo para obter um índice inteiro
    4. charAt() retorna o caractere na posição do índice calculado */

  
  /* Remove a classe 'hide' para exibir o container da senha */
  

  /* Insere a senha gerada no elemento HTML */

 
  /*  Armazena a senha atual na variável global para uso posterior (ex: copiar) */
  
  /* Gerenciamento do histórico de senhas:
  unshift() adiciona a nova senha no início do array */
 

  /*  Limita o histórico a 3 senhas:
  Se o array tiver mais de 3 itens, pop() remove o último */
 
  /* Atualizar a lista de histórico na interface: */
 
    /* Remover a classe 'hide' para exibir o histórico */
    

    /* Cria elementos <li> para cada senha no histórico:
    1. map() transforma cada senha em um elemento HTML
    2. join('') concatena todos os elementos em uma única string */

  

/* Função para copiar a senha gerada para a área de transferência */
const copyPassword = () => {
  alert('Senha copiada com sucesso!'); // Exibe um alerta de sucesso
  navigator.clipboard.writeText("novaSenha"); // Copia a senha usando a API Clipboard
}


/* Adicionar os event listeners para os eventos de clique */
buttonElement.addEventListener('click', generatePassword); // Gera nova senha
containerPassword.addEventListener('click', copyPassword);  // Copia a senha

/* Função para limpar os dados e esconder os containers */
const clearData = () => {
  // Limpa o histórico de senhas
  historicoSenhas = [];
  novaSenha = '';

  /* Esconder os containers */
  containerPassword.classList.add('hide');
  const historico = document.querySelector('.app-pwd__history');
  if (historico) return historico.style.display = 'none';

  /* Reseta os checkboxes para o estado inicial (marcados) */
  document.querySelector('.uppercase-check').checked = true;
  document.querySelector('.lowercase-check').checked = true;
  document.querySelector('.numbers-check').checked = true;
  document.querySelector('.special-check').checked = true;

  /* Reseta o slider para o valor inicial */
  sliderElement.value = 8;
  sizePassword.textContent = '8'
}

/* Adiciona o event listener para o botão de limpar */
clearButton.addEventListener('click', clearData);