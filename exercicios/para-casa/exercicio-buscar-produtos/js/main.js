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
  
