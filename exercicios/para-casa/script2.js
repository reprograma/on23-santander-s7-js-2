
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
];


const categoriaElement = document.getElementById('categoria');
const precoElement = document.getElementById('preco');
const resultadoElement = document.getElementById('resultado');

function filtrar() {
  
  const categoriaSelecionada = categoriaElement.value;
  const precoSelecionado = precoElement.value;

 
  const produtosFiltrados = produtos.filter(function(produto) {
   
    if (categoriaSelecionada !== '' && produto.categoria !== categoriaSelecionada) {
      return false;
    }

   
    if (precoSelecionado !== '') {
      const preco = produto.preco;
      if (precoSelecionado === 'ate100' && preco > 100) {
        return false;
      }
      if (precoSelecionado === 'de101a500' && (preco <= 100 || preco > 500)) {
        return false;
      }
      if (precoSelecionado === 'acima500' && preco <= 500) {
        return false;
      }
    }
    return true;
  });

 
  if (produtosFiltrados.length > 0) {
    const resultadoHTML = '<ul>' +
      produtosFiltrados.map(function(produto) {
        return '<li>' + produto.nome + ' - R$ '})}}