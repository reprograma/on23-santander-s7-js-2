let produtos = [
  {
      nome: "Camiseta",
      categoria: "Vestuário",
      preco: 29.90
  },
  {
      nome: "Tênis",
      categoria: "Calçados",
      preco: 99.90
  },
  {
      nome: "Celular",
      categoria: "Eletrônicos",
      preco: 799.00
  }
];

let produtoBuscado = prompt("Digite o nome do produto:");

for(let i = 0; i < produtos.length; i++){
  if(produtos[i].nome.toLowerCase() === produtoBuscado.toLowerCase()){
      alert(`Produto: ${produtos[i].nome}\nCategoria: ${produtos[i].categoria}\nPreço: R$${produtos[i].preco.toFixed(2)}`);
      break;
  }
}
