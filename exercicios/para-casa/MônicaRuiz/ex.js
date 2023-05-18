let produtos = [{
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
paragrafoproduto.innerHTML="Hello Mundo"

let pesquisaprompt = prompt('Digite a sua pesquisa')

function Buscarproduto() {
  
  for(produto of produtos){

    if (produto.nome == pesquisaprompt) {
      paragrafoproduto.innerHTML = produto.nome + produto.categoria + produto.preco
    }

}


}
Buscarproduto()