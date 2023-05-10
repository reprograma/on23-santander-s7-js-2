// PASSO A PASSO
// ENTRADA:
// definir funcao filtrarIdade
// criar variavel de idade do usuario
// receber a idade do usuário e armazenar na variável

// PROCESSAMENTO:
// percorrer a lista let filmes
// enquanto 
// testar a condição de idade do user para verificar a indicação de filme:
//     SE classificacaoEtaria- 12>= 14 / 12=<14 / 14=<16 / >=18
//     SENÃO - classificacaoEtaria - 0 (livre)

// SAIDA:
// retorna o filme de acordo com a idade preenchida pelo user.

// --------------------------------------------------

// pseudo código:

// Primeiro - Idadade é uma condição, então criar um prompt solicitando a idade para possam ser visualizados os filmes.
// Armazenar esse dado em uma variável.

// Segundo - Com a idade armazenada, criar a condição determinante no for -> Se idade >= 18, serão exibidos todos os filmes. 
// Se idade >=  16, exibir x filmes. Se idade >= 14, exibir y filmes. Se idade >= 12 exibir z filmes. Se idade < 12, exibir f filmes.

// Terceiro: Após a condição, acessar a lista de filmes[] e nela, verifica se dentro do objeto() a propriedade "classificacaoEtaria" está 
// dentro das condições anteriores, e somente após essa verificação exibir a lista de filmes. Essa verificação, será realizada dentro do for of,
// pois através dele, teria como percorer a propriedade e a partir dela exibir a lista.

//-----------------------------------------------------------

/* PASSO A PASSO
  1 - receber idade do usuário
  2 - percorrer a lista a lista de filmes e verificar se a idade do usuário é maior que a classificação etária
  3 - se for, colocar o filme na tela
  4 - senão, não mostrar nada
*/


//-----------------------------------------------------------

// JS
let filmes = [
  {
    nome: "Deadpool",
    classificacaoEtaria: 18 
  },
  {
    nome: "Your Name",
    classificacaoEtaria: 0
  },
  {
    nome: "Kill Bill",
    classificacaoEtaria: 18
  },
  {
    nome: "Shrek",
    classificacaoEtaria: 0 
  },
  {
    nome: "Matrix ",
    classificacaoEtaria: 14 
  },
  {
    nome: "Você nem imagina",
    classificacaoEtaria: 12
  },
  {
    nome: "Brilho eterno de uma mente sem lembranças",
    classificacaoEtaria: 14
  },
  {
    nome: "Scott Pilgrim contra o mundo",
    classificacaoEtaria: 12
  },
  {
    nome: "Capitão Fantástico",
    classificacaoEtaria: 14
  },
  {
    nome: "El Camino",
    classificacaoEtaria: 16 
  },
  {
    nome: "Parasita",
    classificacaoEtaria: 16 
  },
  {
    nome: "Star Wars: o retorno do jedi",
    classificacaoEtaria: 0
  },
  {
    nome: "Red: crescer é uma fera",
    classificacaoEtaria: 0
  },
  {
    nome: "Ninja Assassino",
    classificacaoEtaria: 18
  },
]

const mostrarFilmesPermitidos = function () {
  let idade = Number(prompt('Qual a sua idade'));
  for (let filme of filmes) {
    if (idade >= filme.classificacaoEtaria) {
      console.log(filme.nome)
    }
  }
}

// mostrarFilmesPermitidos()

const mostrarFilmesPermitidos2 = function () {
  let idade = Number(prompt('Qual a sua idade'));
  if (idade >= 18) {
    console.log(filmes[0].nome)
    console.log(filmes[1].nome)
    console.log(filmes[2].nome)
    console.log(filmes[3].nome)
    console.log(filmes[4].nome)
    console.log(filmes[5].nome)
    console.log(filmes[6].nome)
    console.log(filmes[7].nome)
    console.log(filmes[8].nome)
    console.log(filmes[9].nome)
    console.log(filmes[10].nome)
    console.log(filmes[11].nome)
    console.log(filmes[12].nome)
    console.log(filmes[13].nome)
  } else if (idade >= 16) {
    console.log(filmes[1].nome)
    console.log(filmes[3].nome)
    console.log(filmes[4].nome)
    console.log(filmes[5].nome)
    console.log(filmes[6].nome)
    console.log(filmes[7].nome)
    console.log(filmes[8].nome)
    console.log(filmes[9].nome)
    console.log(filmes[10].nome)
    console.log(filmes[11].nome)
    console.log(filmes[12].nome)
  } else if (idade >= 14) {
    console.log(filmes[1].nome)
    console.log(filmes[3].nome)
    console.log(filmes[4].nome)
    console.log(filmes[5].nome)
    console.log(filmes[6].nome)
    console.log(filmes[7].nome)
    console.log(filmes[8].nome)
    console.log(filmes[11].nome)
    console.log(filmes[12].nome)
  } else if (idade >= 12) {
    console.log(filmes[1].nome)
    console.log(filmes[3].nome)
    console.log(filmes[5].nome)
    console.log(filmes[7].nome)
    console.log(filmes[11].nome)
    console.log(filmes[12].nome)
  } else {
    console.log(filmes[1].nome)
    console.log(filmes[3].nome)
    console.log(filmes[11].nome)
    console.log(filmes[12].nome)
  }
}

const mostrarFilmesPermitidos3 = function () {
  let idade = Number(prompt('Qual a sua idade'));
  for (let filme of filmes) {
    if (idade >= filme.classificacaoEtaria) {
      alert(filme.nome)
    }
  }
}
mostrarFilmesPermitidos3()

const mostrarFilmesPermitidos4 = function (idade) {
  for (let filme of filmes) {
    if (idade >= filme.classificacaoEtaria) {
      console.log(filme.nome)
    }
  }
}

mostrarFilmesPermitidos4(15)

const mostrarFilmesPermitidos5 = function (idade) {
  for (let i = 0; i < filmes.length; i++) {
    if (idade >= filmes[i].classificacaoEtaria) {
      console.log(filmes[i].nome)
    }
  }
}