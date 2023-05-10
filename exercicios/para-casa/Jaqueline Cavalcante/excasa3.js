// Lista de produtos
let produtos = [
    { nome: "TV 20 polegadas", categoria: "áudio e vídeo", preco: 1500 },
    { nome: "Mouse", categoria: "informática", preco: 70 },
    { nome: "Teclado", categoria: "informática", preco: 350 },
    { nome: "Aparelho de som", categoria: "áudio e vídeo", preco: 600 },
    { nome: "Sanduicheira", categoria: "eletrodomésticos", preco: 130 },
    { nome: "Microondas 20L", categoria: "eletrodomésticos", preco: 800 },
    { nome: "Geladeira frost free", categoria: "eletrodomésticos", preco: 2100 },
    { nome: "Carregador de notebook Dell", categoria: "informática", preco: 140 },
    { nome: "Caixa de som JBL", categoria: "áudio e vídeo", preco: 230 },
    { nome: "Webcam", categoria: "informática", preco: 330 },
    { nome: "Fogão 4 bocas", categoria: "eletrodomésticos", preco: 680 },
    { nome: "Monitor 24 polegadas", categoria: "informática", preco: 900 },
    { nome: "Air fryer", categoria: "eletrodomésticos", preco: 450 }
  ];
  
  function pesquisarProduto() {
    // Pesquisar produto
    document.getElementById("nomeProduto").textContent = "";
    document.getElementById("categoriaProduto").textContent = "";
    document.getElementById("precoProduto").textContent = "";
    document.getElementById("feedback").textContent = "";
  
    // Obter o valor digitado pelo usuário
    let searchTerm = document.getElementById("productInput").value.toLowerCase();
  
    // Pesquisar o produto na lista
    let produtoEncontrado = produtos.find(function(produto) {
      return produto.nome.toLowerCase() === searchTerm;
    });
  
    // Exibir os detalhes do produto, se encontrado
    if (produtoEncontrado) {
      document.getElementById("nomeProduto").textContent = produtoEncontrado.nome;
      document.getElementById("categoriaProduto").textContent = produtoEncontrado.categoria;
      document.getElementById("precoProduto").textContent = produtoEncontrado.preco;
    } else {
        document.getElementById("feedback").textContent = "Produto não encontrado!";
    }
  }
  