let produtos = [
    { nome: "TV 20 polegadas", categoria: "áudio e vídeo", preço: 1500 },
    { nome: "Mouse", categoria: "informática", preço: 70 },
    { nome: "Teclado", categoria: "informática", preço: 350 },
    { nome: "Aparelho de som", categoria: "áudio e vídeo", preço: 600 },
    { nome: "Sanduicheira", categoria: "eletrodomésticos", preço: 130 },
    { nome: "Microondas 20L", categoria: "eletrodomésticos", preço: 800 },
    { nome: "Geladeira frost free", categoria: "eletrodomésticos", preço: 2100 },
    { nome: "Carregador de notebook Dell", categoria: "informática", preço: 140 },
    { nome: "Caixa de som JBL", categoria: "áudio e vídeo", preço: 230 },
    { nome: "Webcam", categoria: "informática", preço: 330 },
    { nome: "Fogão 4 bocas", categoria: "eletrodomésticos", preço: 680 },
    { nome: "Monitor 24 polegadas", categoria: "informática", preço: 900 },
    { nome: "Air fryer", categoria: "eletrodomésticos", preço: 450 }
];

let produto = prompt("Diga o nome do produto");

filtrarProduto(produto);

function filtrarProduto(produto) {
    produtos.forEach(item => {
        if (item.nome === produto) {
            document.write(`<p>Nome: ${item.nome}</p>`)
            document.write(`<p>Categoria: ${item.categoria}</p>`)
            document.write(`<p>Preço: R$ ${item.preço}</p>`)
        }
    });
};
