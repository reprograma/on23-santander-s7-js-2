let filmes = [
    { nome: "Deadpool", classificacaoEtaria: 18 },
    { nome: "Your Name", classificacaoEtaria: 0 },
    { nome: "Kill Bill", classificacaoEtaria: 18 },
    { nome: "Shrek", classificacaoEtaria: 0 },
    { nome: "Matrix ", classificacaoEtaria: 14 },
    { nome: "Você nem imagina", classificacaoEtaria: 12 },
    { nome: "Brilho eterno de uma mente sem lembranças", classificacaoEtaria: 14 },
    { nome: "Scott Pilgrim contra o mundo", classificacaoEtaria: 12 },
    { nome: "Capitão Fantástico", classificacaoEtaria: 14 },
    { nome: "El Camino", classificacaoEtaria: 16 },
    { nome: "Parasita", classificacaoEtaria: 16 },
    { nome: "Star Wars: o retorno do jedi", classificacaoEtaria: 0 },
    { nome: "Red: crescer é uma fera", classificacaoEtaria: 0 },
    { nome: "Ninja Assassino", classificacaoEtaria: 18 }
  ];
  
  function filmesPermitidos(idade) {
    let permitidos = [];
    for (let i = 0; i < filmes.length; i++) {
      if (filmes[i].classificacaoEtaria <= idade) {
        permitidos.push(filmes[i].nome);
      }
    }
    return permitidos;
  }
  
  let idade = parseInt(prompt("Qual a sua idade?"));
  let permitidos = filmesPermitidos(idade);
  
  if (permitidos.length > 0) {
    console.log("Você pode assistir aos seguintes filmes:");
    console.log(permitidos);
  } else {
    console.log("Não há filmes permitidos para a sua idade.");
  }
  