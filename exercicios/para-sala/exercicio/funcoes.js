// Criar uma função para receber a idade da pessoa e guardar numa variavel
// Percorrer a lista de filmes com um for
// Verificar se a classificação etária do filme é menor ou igual a idade
// Se for menor ou igual add o nome do filme em uma lista de filmes permitidos
// Retornar a lista

/* OUTRO PASSO A PASSO
    1 - Receber a idade do usuário
    2 - Percorre a lista de filmes e verificar se a idade do usuário é maior q a classificação etária
    3 - Se for, colocar o filme na tela
    4 - Senão, não mostar nada
*/

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
  
  const mostrarFilmesPermitidos = function(){
    let idade = Number (prompt ('Qual a sua idade?'))
    for (let filme of filmes) {
      if (idade >= filme.classificacaoEtaria) {
        console.log(filme.nome)
      }

    }

  }

  mostrarFilmesPermitidos()


  /*const mostrarFilmesPermitidos2 = function () {
    let idade = Number(prompt('Qual sua idade?'))
    if (idade >=18 ){
      console.log(filmes[0].nome)
      console.log(filmes[1].nome)
      console.log(filmes[2].nome)... //até finalizar a quantdade de filmes
    }
  }*/


  //forEach

  let numbers = [2, 20, 40, 70, 30]
  function logar (numero) {
    console.log (numero)
  }

  numbers.forEach(logar)
  