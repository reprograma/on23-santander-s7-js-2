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

//criar a função para perguntar o nome do produto / o mesmo precisae ser == a propriedade nome 

  function consultarProduto() {
    let resultado = document.getElementById("produtes");

    let qualProduto = prompt("Qual produto você deseja consultar?");
    let prodCorrecao = qualProduto.toLowerCase()

    let produtoEncontrado  = produtos.find(function(produto) {
        return produto.nome.toLowerCase() === prodCorrecao;
      });
  
    if (produtoEncontrado) {
      resultado.innerHTML = `Nome: ${produtoEncontrado.nome} | Categoria: ${produtoEncontrado.categoria} | Preço: R$ ${produtoEncontrado.preco}`;
    } else {
      resultado.innerHTML = "Produto não encontrado";
    }
}
  
  consultarProduto();

  

