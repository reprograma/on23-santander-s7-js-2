
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


  


const filterElement = document.querySelectorAll('header input');
const cards = document.querySelectorAll('.cards li');

filterElement.addEventListener('input', filtrarCards)

function filtrarCards() {
    if (filterElement.value != ' ') {
        for (let card of cards) {
            let title = card.querySelector('h2')
            title = title.textContent.toLocaleUpperCase()
            let filterText = filterElement.value.toLocaleUpperCase()

            if (!title.includes(filterText)) {
                card.style.display = 'none'
            } else {

                card.style.display = 'block'
            }
        }
        } else {
        for (let card of cards) {
            card.style.display = 'block'
        }
    }
}

filtrarCards()