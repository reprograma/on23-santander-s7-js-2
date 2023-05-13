/*## Nome do Exercicio
- Pedir para o usuário pesquisar um produto da lista que está abaixo através do prompt, se encontrar o produto colocar o nome, categoria 
e preco na tela.
OBS: nao precisa se preocupar com letras maiusculas e minusculas.
O usuário vai ter que digitar EXATAMENTE do jeito que está cadastrado na lista.

DICA: Já deixar no html os parágrafos para preencher com as informações do produto
*/


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



let prodEscolhido = document.getElementById('entrada')
var consultar = document.querySelector("#consultar");

consultar.addEventListener("click", function () {
  console.log(prodEscolhido)

  let prodEncontrado = false
  for (let index = 0; index < produtos.length; index++) {

    if (prodEscolhido.value.toUpperCase() === produtos[index].nome.toUpperCase()) {
      let nomeProduto = document.getElementById('nomeProduto')
      let categoria = document.getElementById('categoria')
      let preco = document.getElementById('valor')

      nomeProduto.innerHTML = produtos[index].nome;
      categoria.innerHTML = produtos[index].categoria;
      preco.innerHTML = produtos[index].preco;
      prodEncontrado = true

    }
  }
  if (prodEncontrado == false) {
    alert("Produto não encontrado")
  }  
});

