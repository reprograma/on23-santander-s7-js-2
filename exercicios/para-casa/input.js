const botao = document.querySelector('button');
const input = document.querySelector('input');
const nomeProduto = document.getElementById("nome-produto");
let precoProduto = document.querySelector("#preco-produto");
const categoriaProduto = document.getElementById("categoria-produto");

function pesquisarProdutos() {
  let pesquisa = input.value;
  for (let produto of produtos) {
    if (produto.nome === pesquisa) {
      nomeProduto.innerHTML = produto.nome;
      precoProduto.innerHTML = produto.preco;
      categoriaProduto.innerHTML = produto.categoria;
    }
  }
}

botao.addEventListener('click', pesquisarProdutos)