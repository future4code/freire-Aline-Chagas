/*

exercício 1:

let a = 10
let b = 10

console.log(b) valor de b = 10

b = 5 // valor de b alterado para 5

console.log(a, b) valor de a = 10 e valor de b = 5
*/

/*

exercicio 2 

let a = 10
let b = 20
c = a // valor de c = 10
b = c // valor de b = 10
a = b // valor de a = 10

console.log(a, b, c) será impresso 10, 10, 10
*/

/*

exercicio 3

let jornadaDeTrabalho = prompt("Quantas horas você trabalha por dia?") 
let valorRecebidoPorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${jornadaDeTrabalho/valorRecebidoPorDia} por hora`)
*/


/*exercicio de escrita de codigo 

 nome = 
console.log(typeof nome)

idade = 
console.log(typeof idade)

/* o valor retorna como undefined, pois não foi atribuído valor para a variável*/

//----------------------------------------------------------------------------------

let nome = prompt ("Qual o seu nome?")
let idade = prompt ("Qual a sua idade?")
console.log("Olá", nome, "você tem", idade, "anos")

let corDosOlhos = ("seus olhos são azuis?")
let gostaDePizza = ("você gosta de pizza?")
let gostaDeMotos = ("você gosta de motos?")

let respostaOlhos = ("não")
let respostaPizza = ("sim")
let respostaMotos = ("sim")

console.log (corDosOlhos, respostaOlhos)
console.log (gostaDePizza, respostaPizza)
console.log (gostaDeMotos, respostaMotos)

//-----------------------------------------------------------------------------
let a = 10
let b = 25

c = a
a = b 
b = c
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10