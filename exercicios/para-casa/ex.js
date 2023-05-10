const produtos = [
    {nome: "camiseta", categoria: "Roupas", preco: 29.90},
    {nome: "calça", categoria: "Roupas", preco: 59.90},
    {nome: "tênis", categoria: "Calçados", preco: 99.90},
    {nome: "sapato", categoria: "Calçados", preco: 79.90},
    {nome: "celular", categoria: "Eletrônicos", preco: 899.90},
    {nome: "notebook", categoria: "Eletrônicos", preco: 2499.90}
  ];

  function pesquisar() {
    const nomeProduto = document.getElementById("produto").value;
    const produtoEncontrado = produtos.find(p => p.nome === nomeProduto);
    if (produtoEncontrado) {
      const resultado = document.getElementById("resultado");
      resultado.innerHTML = `
        <p><strong>Nome do Produto:</strong> ${produtoEncontrado.nome}</p>
        <p><strong>Categoria:</strong> ${produtoEncontrado.categoria}</p>
        <p><strong>Preço:</strong> R$ ${produtoEncontrado.preco.toFixed(2)}</p>
      `;
    } else {
      alert("Produto não encontrado.");
    }
  }