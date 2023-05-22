confirm("Bem vindo ao Site de Compras. \n Temos Diversos Produtos Eletrônicos e Eletrodomésticos")

let acessorios = [
    {
      nome: "TV 20 polegadas",
      categoria: "Áudio e Vídeo",
      preco: 1500
    },
    {
      nome: "Mouse",
      categoria: "Informática",
      preco: 70
    },
    {
      nome: "Teclado",
      categoria: "Informática",
      preco: 350 
    },
    {
      nome: "Aparelho de Som",
      categoria: "Áudio e Vídeo",
      preco: 600
    },
    {
      nome: "Sanduicheira",
      categoria: "Eletrodomésticos",
      preco: 130
    },
    {
      nome: "Microondas 20L",
      categoria: "Eletrodomésticos",
      preco: 800
    },
    {
      nome: "Geladeira Frost Free",
      categoria: "Eletrodomésticos",
      preco: 2100
    },
    {
      nome: "Carregador de Notebook Dell",
      categoria: "Informática",
      preco: 140
    },
    {
      nome: "Caixa de Som JBL",
      categoria: "Áudio e Vídeo",
      preco: 230
    },
    {
      nome: "Webcam",
      categoria: "Informática",
      preco: 330
    },
    {
      nome: "Fogão 4 Bocas",
      categoria: "Eletrodomésticos",
      preco: 680
    },
    {
      nome: "Monitor 24 Polegadas",
      categoria: "Informática",
      preco: 900
    },
    {
      nome: "Air Fryer",
      categoria: "Eletrodomésticos",
      preco: 450
    }
  ]

//document e innerHTML chama o texto no html

let  compraProduto = document.querySelector("p");

let pesquisa = prompt("Digite o produto que está procurando")

function buscarproduto() {
    for(produto of acessorios){
 if (produto.nome == pesquisa){ 

   compraProduto.innerHTML =(' O produto ' + ' ' + produto.nome + ' ' + 'categoria de ' + produto.categoria + ' custa ' + ' ' + produto.preco + ' ' + 'reais'); 

   }
 }
}

buscarproduto();