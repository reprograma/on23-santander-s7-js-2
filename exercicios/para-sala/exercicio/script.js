
/* Passo a Passo
1 - receber idade do usuario
2 - percorres a lista a lista de filmes e verificar se a 
idade do usuario e maior que a classificacao etaria
3 - se for, colocar o filme na tela
4 - senao, nao mostrar nada
*/

//JS
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

/*const mostrarFilmesPermitidos = function (idade) {
   
    for (let filme of filmes) {
        if (idade >= filme.classificacaoEtaria){
            console.log(filme.nome)
        }
    }
    let idade = Number (prompt('Qual a sua idade'))
}*/
mostrarFilmesPermitidoS()

/*const mostrarFilmesPermitidos = function () {
    let idade = Number(prompt('Qual a sua idade'));
    for (let filme of filme) {
        if (idade >= filme.classificacaoEtaria) {
            alert(filme.nome)
        }
    }
}*/

const mostrarFilmesPermitidos = function (idade) {
   for (let i = 0; i < filmes.length; i++) {
        if (idade >= filme[i].classificacaoEtaria) {
            console.log(filme[i].nome)
        }
    }
}
mostrarFilmesPermitidoS()