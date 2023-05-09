function buscar() {
    
    let box1 = document.getElementById("box1");
    let resultado = document.getElementById('resultado')
    let txtBusca = box1.value.toLowerCase()
    let listaProdutosFiltrados = filtrarProduto(txtBusca)
    let txtResultado = buscarProduto(txtBusca)

    resultado.innerHTML = ''

    let msgNadaEncontrado = `<div class = 'div-result'><hr><p class="txt">Nenhum produto encotrado.</p></div>`
   

    if (box1.value.length === 0) {
        alert('DIGITE ALGO.')
    } else if(listaProdutosFiltrados.length === 0){
        resultado.innerHTML = msgNadaEncontrado
    } else{
        resultado.innerHTML = txtResultado
    }
}
  
function convertToHTML(produto, listaProdutosFiltrados) {
    let indice = (listaProdutosFiltrados.indexOf(produto)) + 1
    let nomeEncontrado = produto.nome
    let categoriaEncontrada = produto.categoria
    let precoEncontrado = produto.preco
    return `<div class = 'div-result'> <hr> <p class="txt">Produto ${indice}</p>
            <p class="txt txt-produto">Nome: ${nomeEncontrado}</p>
            <p class="txt txt-produto">Categoria: ${categoriaEncontrada}</p> 
            <p class="txt txt-produto">Preço: ${precoEncontrado}</p></div>`
  }
  
function filtrarProduto(textoDeBusca) {
    return listaProdutosFiltrados = produtos.filter(produto => compararProduto(produto, textoDeBusca));
}
function compararProduto(produto, textoDeBusca) {
          return produto.nome.toLowerCase().startsWith(textoDeBusca)
      }
      
function buscarProduto(textoDeBusca) {
            let listaProdutosFiltrados = filtrarProduto(textoDeBusca)
              let resultList = []
              for (const produto of listaProdutosFiltrados) {
                let produtoHtml = convertToHTML(produto, listaProdutosFiltrados)
                resultList.push(produtoHtml)
              }
              return resultList.join('')
}

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
    { nome: "Air fryer", categoria: "eletrodomésticos", preco: 450 },
  ];


