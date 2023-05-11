// SELECIONA ELEMENTO BODY E INPUT
let body = document.querySelector('body')
let input = document.querySelector('input')

// CRIA O ELEMENTO P
let erro = document.createElement('p')

// ADICIONA UM CLASSLIST NO ERRO (P)
erro.classList.add('erro')

// ALTERA O CONTEÚDO DO HTML DO ERRO
erro.innerHTML = 'Login inválido'

// INSERE/ANEXA UM ELEMENTO DENTRO DE OUTRO
// neste caso: insere o erro no body
body.appendChild(erro)

// INSERE UM ELEMENTO ANTES DE OUTRO 
// neste caso: insere o erro antes do input dentro do body
body.insertBefore(erro, input)