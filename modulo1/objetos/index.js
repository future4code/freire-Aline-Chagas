// EXERCÍCIO INTERPRETAÇÃO 1

//const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) - será impresso o primeiro item do array 'elenco':"Matheus Nachtergaele"

// console.log(filme.elenco[filme.elenco.length - 1]) - será impresso o toral de caracteres do array elenco, 
//exceto pelo último caractere. 

// console.log(filme.transmissoesHoje[2]) - será impresso o sterceiro item do array 'transmissoesHoje': canal: "Globo", horario: "14h"

//EXERCICIO DE INTERPRETAÇÃO 2 
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro) - será impresso o objeto cachorro: nome, idade, raca. 
// console.log(gato)  - será impresso o objeto cachorro, porém alterando o nome
// console.log(tartaruga)  - será impresso o objeto gato, trocando a letra 'a' por 'o'. 
//
// - a sintaxe ... faz o espalhamento ou spread, copiando um objeto ou array inteiro. 
//

//EXERCICIO INTERPRETAÇÃO 3
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender")) - o booleano retorna como false, pois é o que informa a propriedade do objeto.
// console.log(minhaFuncao(pessoa, "altura")) - o valor não foi informado, o retorno será undefined.

//EXERCÍCIO DIGITAÇÃO 1 

// const pessoa ={
//     nome: "Aline", 
//     apelidos:["Line", "Lin", "Nine"]
 
// }

//  function Nome(objeto){
//      console.log (`Eu sou ${objeto.nome}, mas pode me chamar de:${objeto.apelidos}`)

//  }

// Nome(pessoa);

// const novoApelido={
//    ...pessoa,
//     apelidos: ["Alininha", "Lineta", "Liline"] 
// }
// Nome(novoApelido)

//EXERCICIO DIGITAÇÃO 2

// function item1 (obj1){

// console.log ([obj1.nome, obj1.nome.length, obj1.idade, obj1.profissao, obj1.profissao.length])

// }

// const obj1={
//     nome: "João",
//     idade: 22, 
//     profissao:"desenvolvedor"
 
// }
// item1 (obj1)


// const obj2 = {
//     nome: "Pedro",
//     idade: 28,
//     profissao: "analista de dados"
    
// }
// item1(obj2)

//EXERCICIO DE DIGITAÇÃO 3 


//  let carrinho = []


//     const fruta1 = {
//         nome:"banana",
//         disponibilidade: true

//     } 
//     const fruta2 = {
//         nome:"melancia",
//         disponibilidade: true
//     } 

//     const fruta3 = {
//         nome: "uva",
//         disponibilidade: true
//     }

//   function sacolao(fruta1){

// return carrinho.push(fruta1)
// }

// sacolao (fruta1)
// sacolao (fruta2)
// sacolao (fruta3)

// console.log (carrinho)

// -------  desafio 1 

// let nome = prompt ("qual o seu nome?")
// let idade = prompt ("qual a sua idade?")
// let profissao = prompt ("qual a sua profissão?")

// console.log (`"nome:${nome}, idade:${idade}, profissão:${profissao}"`)

//--------   desafio 2 

//  const filmes = () => {

//     const filme1 = 
//     nome:"O senhor dos Aneis",
//     ano:2002

//     const filme2 = 
//     nome:"Avatar",
//     ano:2010
    


// console.log (`"O primeiro filme foi lançado antes do segundo?" 
// ${"filme1.ano"} > {filme2.ano}`)

// console.log (`"O primeiro filme foi lançado no mesmo ano do segundo?" 
// ${filme1.ano} === ${filme2.ano}`)
// }
    
    






    
    






