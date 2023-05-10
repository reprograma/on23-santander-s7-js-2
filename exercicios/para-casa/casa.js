// Pedir para o usuário pesquise um produto da lista que está abaixo através do prompt, 
// se encontrar o produto coloque o nome, categoria e preço na tela. OBS: nao precisa se preocupar 
// com letras maiusculas e minusculas. O usuário vai ter que digitar EXATAMENTE do jeito que está cadastrado na lista.
// DICA: Já deixe no html os parágrafos para preencher com as informações do produto/

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



function buscarProduto() {
    let resultado = document.getElementById("paragrafo");
    let nomeProduto = prompt("Qual produto voce procura?");
    let produtoFiltrado = produtos.find(
        (produto) => produto.nome === nomeProduto);

    if (produtoFiltrado) {
        resultado.innerHTML =( 
            'nome:'${produtoFiltrado.nome} | categoria:${produtoFiltrado.categoria} | preco: R${produtoFiltrado.preco} )
 
    } else {
        resultado.innerHTML = ("Produto não encontrado");
    }

}
buscarProduto()