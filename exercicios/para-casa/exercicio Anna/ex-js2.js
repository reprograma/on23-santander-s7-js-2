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

  let form = document.querySelector ('form');
  // let resultado = document.querySelector ('#resposta')

  form.addEventListener ('submit', function(event) {
    event.preventDefault ();
    let produtoProcurado = document.getElementById('produto').value
    let produtosFiltrados = produtos.filter((produto) => produto.nome === produtoProcurado)
    
    let resultado = document.createElement('ul')
     produtosFiltrados.forEach((produto) => {
        let itens = document.createElement('li')
        itens.textContent = `Produto: ${produto.nome}, Preço:${produto.preco}, Categoria:${produto.categoria}`
        resultado.appendChild(itens)
      });

      document.body.appendChild(resultado)

    //  let resposta = document.getElementById ('paragrafo')
    //  resposta.innerText = (resultado)
   
  });
//                      ** TENTANDO EXPLICAR O QUE EU FIZ AQUI **
  //coloquei um evento para assim que o botão for clicado ele executar a função que foi colocada dentro dele.
  //o preventDefalt é pra evitar que a página seja reiniciada
  //Defini a variável de procudutoProcurado pegando o valor que foi digitado no formulario, usdando o getElementById
  //usei o método Filter para filtrar os elementos do array produtos (nessa hora me enrolei um pouco demorei que só pra
  // entender que o erro era que eu tava filtrando produto por produto kk)
  // para exibi os resultados usei o forEach para adicionar um paragrafo pra cada produto que fosse encontrado.
  //O css está "desativado" porq o resultado simplemente deapareceia quando tava tudo bonitinho D:
  // as outras partes comentadas foram tentativas loucas kkkk








  
  