// EXERCÍCIO INTERPRETAÇÃO 1 

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza?  - o código verifica se o número é divisível por 2.

// b) Para que tipos de números ele imprime no console "Passou no teste"? -  números múltiplos de 2

// c) Para que tipos de números a mensagem é "Não passou no teste"? - números que não podem ser divididos por 2

// EXERCICIO INTERPRETAÇÃO 2 

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima? 
// - para identificar o preço das frutas especificadas 

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?  
//- 2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?


//EXERCICIO INTERPRETAÇÃO 3

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// - a primeira linha pergunta ao usuário um número e, usando Number, já converte a resposta em um número válido para o sistema, em vez de string.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// - caso o usuário digite 10, a mensagem "esse número passou no teste" será impressa no console. 

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// - a mensagem não será impressa, pois o comando console.log está fora do escopo que determina a mensagem. 
// isso ocorre pois o JS lê por linhas ou blocos, então caso o comando esteja fora do escopo/bloco, ele informará que há um erro, já que ele não consegue encontrar o restante da informação. 

// EXERCÍCIO DE DIGITAÇÃO 1 

// let idade = +prompt ("Qual a sua idade?")
// if (idade >= 18){
//     console.log ("Você pode dirigir :)") 
// } else{
//     console.log ("Você não pode dirigir :(")
// }

// EXERCICIO DE DIGITAÇÃO 2 

// const periodo = prompt ("você estuda de manhã (M), tarde (T) ou noite (N)?").toUpperCase()

// if (periodo === "M"){
//     console.log ("Bom dia!")
// } else if ( periodo === "V"){
//     console.log ("Boa Tarde!")
// } else {
//     console.log ("Boa noite!")
// }

  
// EXERCICIO DE DIGITAÇÃO 3

// const periodo = prompt ("você estuda de manhã (M), tarde (T) ou noite (N)?").toUpperCase()

// let matutino = "M"
// let vespertino = "V"
// let noturno = "N"

//     switch (periodo) {
//         case matutino:
//                 console.log("bom dia")
//                 break
//             case vespertino:
//                 console.log("boa tarde")
//                 break
//             case noturno:
//                 console.log("boa noite")
//                 break
//     }
         
// EXERCICIO DE DIGITAÇÃO 4 


// let generoFilme = prompt ("Qual o gênero do filme que você quer assistir?").toUpperCase()
// let ingressoFilme = +prompt ("Qual o valor do ingresso?")

// if (generoFilme === "FANTASIA" && ingressoFilme === 15){
//     console.log ("Bom Filme!")
// } else {
//     console.log ("Escolha outro filme :(")
// }
        

// // DESAFIO 1

// let generoFilme = prompt ("Qual o gênero do filme que você quer assistir?").toUpperCase()
// let ingressoFilme = +prompt ("Qual o valor do ingresso?")

// if (generoFilme === "FANTASIA" && ingressoFilme === 15){
 
//     let lanchinho = prompt ("Qual lanchinho você deseja?")

//     console.log (`"Aproveite seu ${lanchinho} "`)

//     console.log ("Bom Filme!")
// } else {
//     console.log ("Escolha outro filme :(")
// }




