// EXERCICIO INTERPRETAÇÃO 1

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
//
//EXERCICIO INTERPRETAÇÃO 2
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
//a) O que vai ser impresso no console?

//EXERCICIO INTERPRETAÇÃO 3 
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" },
// ]

// const novoArrayC = usuarios.filter((item, index, array) => {
//    return item.apelido !== "Chijo"
// })

// console.log(novoArrayC)

//a) O que vai ser impresso no console?

//EXERCICIO DIGITAÇÃO 1 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//  a) Crie um novo array que contenha apenas o nome dos doguinhos
// const nomePets = pets.map((item,index,array) => {
//     return item.nome
// })
// console.log(nomePets)


// b)
// const racaPets = pets.filter((item,index,array) => {
//     return item.raca === "Salsicha"
// })
// console.log(racaPets)


// c) 
// const racaPets = pets.filter((item,index,array) => {

//     return item.raca === "Poodle"
// })

// const nomePoodle = racaPets.map((item, index, array) => {
//     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`


// })

// console.log(nomePoodle)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
//  a) Crie um novo array que contenha apenas o nome de cada item
// const nomeItens= produtos.map((item,index,array) => {
//         return item.nome
//     })
//     console.log(nomeItens)


// // b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// const precoItens= produtos.map((item,index,array) => {

//         return {nome: item.nome, preco: item.preco *0.95}
// })
//     console.log(precoItens)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const bebidas= produtos.filter((item,index,array) => {

//         return item.categoria === "Bebidas"
// })

//     console.log(bebidas)

// // d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// const detergente = produtos.filter((item) =>{
    
//         return item.nome.includes("Ypê")
        

// })

// console.log(detergente)
//  
// // e) 

// const compraPreco= detergente.map((item, index, array) => {

//     if (item.nome.includes("Ypê")){

//         return `Compre ${item.nome} por ${item.preco}`
//     }
  
//   })
  
//   console.log(compraPreco)


// DESAFIO

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 //a) Crie um novo array que contenha apenas o nome dos pokémons em **ordem alfabética**
//  const pokemonNome = pokemons.map((item,indice,array) => {

//     return item.nome

//  })

//  console.log(pokemonNome.sort())

//  b) Crie um novo array apenas com os tipos dos pokémons, sem repetição

// const pokemonTipo = pokemons.map((item,indice,array) => {

//     return item.tipo

// })

// const pokemonSemRepetir = pokemonTipo.filter((item,indice,array) =>{

//   return pokemonTipo.indexOf(item)===indice 

// })

// console.log(pokemonSemRepetir)


// 
    

