// Pedir para o usuário pesquisar um produto da lista que está abaixo através do prompt, se encontrar o produto colocar o nome, categoria e preco na tela.
// OBS: nao precisa se preocupar com letras maiusculas e minusculas.
// O usuário vai ter que digitar EXATAMENTE do jeito que está cadastrado na lista.

// DICA: Já deixar no html os parágrafos para preencher com as informações do produto

// Pseudocódigo:
// 1- Criar tag no HTML 
// 2- Solicitar o protuto
// 3- Armazenar o produto
// 4- Criar forma para verificar a lista e achar o produto desejado
// 5- SE encontrar o produto, colocar na tela sem ser pelo alert

//Comandos:
// 1- p
// 2- prompt
// 3- let
// 4- Function 
// 5- If 

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

let descricao = document.querySelector ('p')
let pesquisa = prompt("Por favor, digite o produto a ser pesquisado.")

function buscarProduto(busca){
  for(produto of produtos){
    if (busca == produto.nome){
      descricao.innerHTML = produto.nome + produto.categoria + produto.preco
    }
  }
}

buscarProduto(pesquisa)

// function buscarProduto(){

//     let descricao = document.getElementsByTagName('p');
//     let pesquisa = prompt("Por favor, digite o produto a ser pesquisado.")

//     let produto = protudos.map(item)
//     return ${item.nome}, ${item.categoria}, ${item.preco}; 
// }

// buscarProduto()