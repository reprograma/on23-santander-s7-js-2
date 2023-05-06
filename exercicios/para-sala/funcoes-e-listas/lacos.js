let nomes = ['Annie', 'Manu', 'Aline', 'Tamires', 'Flaviana']

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i])
}
// Flaviana
// Tamires
// Aline
// Manu
// Annie

// percorrer a lista de trás pra frente
for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i])
}
// Flaviana
// Tamires
// Aline
// Manu
// Annie

// FOR OF
// usado para percorrer os itens da lista, criamos uma variável para representar o item da lista que está sendo percorrido no momento
for (let nome of nomes) {
    console.log(nome)
}
// Annie
// Manu
// Aline
// Tamires
// Flaviana
