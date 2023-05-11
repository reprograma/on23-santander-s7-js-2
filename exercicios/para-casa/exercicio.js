



//array de variáveis do tipo objeto

let listaProdutos = [
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
  
  // Utilizar o método filter() para acessar os elementos em uma array de objetos.
 
  let pegarNome = prompt("Digite o nome do produto: ")
  let paragrafo = document.querySelector("p")
    
  //função chamada retornaNome, que devolverá todos os objetos que sejam da categoria nome
  // declaração da variável de retorno para a aplicação do javascript filter object.

  function retornaNome (value){
    if (value.nome == pegarNome)
    return value;
}

//estrutura de repetição forEach, que lê todos os elementos da array

var produtosNome = listaProdutos.filter(retornaNome);
produtosNome.forEach(produtoNomeado => 
  { 

    paragrafo.innerHTML = JSON.stringify(produtoNomeado)

    // alert (JSON.stringify(produtoNomeado));
})
