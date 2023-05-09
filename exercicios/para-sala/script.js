# Exercício de Casa 🏠 

## Nome do Exercicio

- Explicação do exercício: Criar uma função que receba a idade de uma pessoa e diga quais filmes aquela pessoa pode assistir. Use como base o seguinte objeto:

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



// pseudo código:

// Primeiro - Idadade é uma condição, então criar um prompt solicitando a idade para possam ser visualizados os filmes.
// Armazenar esse dado em uma variável.

// Segundo - Com a idade armazenada, criar a condição determinante no for -> Se idade >= 18, serão exibidos todos os filmes. 
// Se idade >=  16, exibir x filmes. Se idade >= 14, exibir y filmes. Se idade >= 12 exibir z filmes. Se idade < 12, exibir f filmes.

// Terceiro: Após a condição, acessar a lista de filmes[] e nela, verifica se dentro do objeto() a propriedade "classificacaoEtaria" está 
// dentro das condições anteriores, e somente após essa verificação exibir a lista de filmes. Essa verificação, será realizada dentro do for,
// pois através dele, teria como percorer a propriedade e a partir dela exibir a lista. Esse for, pode estar dentro de uma função.


const mostrarFilmeFaixa = function () {
    let idade = Number(prompt("Qual tua idade, boy?"));
    for (let filme of filmes) {
        if(idade >= filme.classificacaoEtaria) {
            console.log(filme.nome)
        }
    }
}
