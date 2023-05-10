let produtos = [
    {
      nome: "TV 20 polegadas",
      categoria: "áudio e vídeo",
      preco: 1500
    },
    {
      nome: "Mouse",
      categoria: "informática",
      preco: 70
    },
    {
      nome: "Teclado",
      categoria: "informática",
      preco: 350 
    },
    {
      nome: "Aparelho de som",
      categoria: "áudio e vídeo",
      preco: 600
    },
    {
      nome: "Sanduicheira",
      categoria: "eletrodomésticos",
      preco: 130
    },
    {
      nome: "Microondas 20L",
      categoria: "eletrodomésticos",
      preco: 800
    },
    {
      nome: "Geladeira frost free",
      categoria: "eletrodomésticos",
      preco: 2100
    },
    {
      nome: "Carregador de notebook Dell",
      categoria: "informática",
      preco: 140
    },
    {
      nome: "Caixa de som JBL",
      categoria: "áudio e vídeo",
      preco: 230
    },
    {
      nome: "Webcam",
      categoria: "informática",
      preco: 330
    },
    {
      nome: "Fogão 4 bocas",
      categoria: "eletrodomésticos",
      preco: 680
    },
    {
      nome: "Monitor 24 polegadas",
      categoria: "informática",
      preco: 900
    },
    {
      nome: "Air fryer",
      categoria: "eletrodomésticos",
      preco: 450
    }
  ]

let paragrafoproduto = document.querySelector('p')
paragrafoproduto.innerHTML ="Hello Mundo"

let Pesquisaprompt = prompt('Digite sua pesquisa')

function Buscarproduto(){
    for(produto of produtos){
        if (produto.nome == Pesquisaprompt){
        paragrafoproduto.innerHTML = produto.nome + produto.categoria + produto.preco
        }
        }
}

Buscarproduto()















  
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