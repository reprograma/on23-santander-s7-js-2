// FUNCAO COM PALAVRA RESERVADA FUNCTION

function somar(numero1, numero2) {
  return numero1 + numero2
}

// EXPRESSÃO
// atribuir a função a uma variável

const somar = function (numero1, numero2) {
  return numero1 + numero2
}

// ARROW FUNCTION
const somar = (numero1, numero2) => {
  return numero1 + numero2
}

// FUNÇÃO ANÔNIMA
// funções que não possuem nome na sua criação
// arrow function são funções anônimas

() => { }

function (numero1, numero2) {
  return numero1 + numero2
}

// CALLBACK
// funções passadas como parâmetro de outra função para ser executada dentro da primeira função

// setTimeout -> função de js que permite executar uma função passada como callback com um delay passado como segundo parâmetro em mili segundos
function mensagem() {
  console.log('Esta mensagem aparece depois de 3 segundos')
}

setTimeout(mensagem, 3000)

// a função de callback pode ser criada fora da execução da função principal ou dentro dos parâmetros direto como função anônima

setTimeout(function () {
  console.log('Esta mensagem aparece depois de 3 segundos')
}, 3000)

// OU
setTimeout(() => {
  console.log('Esta mensagem aparece depois de 3 segundos')
}, 3000)
