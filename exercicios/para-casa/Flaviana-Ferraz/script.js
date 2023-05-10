// Pedir para o usuário pesquisar um produto da lista que está abaixo através do prompt, se encontrar o produto colocar o nome, categoria e preço na tela.
// OBS: não precisa se preocupar com letras maiúsculas e minúsculas.
// O usuário vai ter que digitar EXATAMENTE do jeito que está cadastrado na lista.

// DICA: Já deixar no html os parágrafos para preencher com as informações do produto caso encontrado;

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

//PASSOS:
////1.Receber o produto que o usuario deseja pesquisar;
//2.Buscar o nome desse produto na lista de produtos e retornar;
//3.Mostrar em tela dados do produto: nome, categoria, preço;

let pesquisaProduto = prompt("Digite qual produto deseja pesquisar");

let paragrafo = document.querySelector('p');

function buscaProduto (){
  for(produto of produtos){
    if(produto.nome == pesquisaProduto){
      paragrafo.innerHTML = 'Produto: ' +produto.nome+ '</br>' + 'Categoria: ' +produto.categoria+ '</br>' + 'Preço: R$' +produto.preco
    }
  }
};


buscaProduto();