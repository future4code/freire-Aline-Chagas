
// EXERCÍCIO INTERPRETAÇÃO 1

// O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// EXERCICIO INTERPRETAÇÃO 2 
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     if (numero > 18) {
//           console.log(numero)
//       }
//   }
//   a) O que vai ser impresso no console?
//   b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
//   Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
//   const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
//   let quantidadeAtual = 0
//   while(quantidadeAtual < quantidadeTotal){
//     let linha = ""
//     for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//       linha += "*"
//     }
//     console.log(linha)
//     quantidadeAtual++
//   }

// EXERCICIO DIGITAÇÃO 1

// let pet = +prompt ("Quantos animais de estimação você tem?")

// let listaPet = []

// if (pet === 0){
//     console.log ("Que pena! Você pode adotar um pet!")

// }else {
//  for (let i = 0; i < pet; i++){

//     const nomePet = prompt ("Que legal! Qual o nome do seu pet?")
//     listaPet.push(nomePet)
//  }    
// }
// console.log(listaPet)

    
// EXERCICIO DIGITAÇÃO 2

//2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
// a:

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// function imprimeValor(array){

// for (let i = 0; i < array.length; i++){
//     console.log(array[i])

// }
// }
// imprimeValor(arrayOriginal)
  
// //b:

// function divisao (array){
// for ( let i = 0; i < array.length; i++){
//     console.log(array[i]/10)

// }
// }
// divisao(arrayOriginal)

//     //c) 
// let novoArray = []
//    function novaArray (array){
//    for (let i = 0; i< array.length; i++){
//     if  (array[i]%2==0){
//         novoArray.push(array[i])
        
//     }  
//     console.log(novoArray)  
// }
//    }
// novaArray(arrayOriginal)

//     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// let novoArrayString = arrayOriginal.toString

// function arrayString (array){

// for (let i =0; i<array.length; i++){
          
//         console.log(`o índice ${[i]} é igual a ${array[i]}`)

//     }
// }
// arrayString(arrayOriginal)

//  
//    e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
    // let maiorNum = 130
    // let menorNum = 21

    // function maiorMenor (array){
    //     for (let i = 0; i<array.length; i++){
    //         if (array[i]= maiorNum){
    //             maior = array[i];
    //             menor = maior;
    //         }
    //         if (array[i] = menorNum){
    //             menor = array[i]
    //         }
            
    //         }
    //         console.log (`O número maior é ${maiorNum} e o menor é ${menorNum}`)
    //     }
    // maiorMenor(arrayOriginal)
    

//        
  
  
