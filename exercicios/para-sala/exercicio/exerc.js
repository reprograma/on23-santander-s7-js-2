function filtrarIdade() {

  let idade = 10;

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

  for (let i = 0; i < filmes.length; i++) {
    if (idade >= filmes[i].classificacaoEtaria) {
      console.log('Você pode assistir este filme: ' + filmes[i].nome);
    }
  }

}

filtrarIdade();