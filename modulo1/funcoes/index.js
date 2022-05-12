/*
EXERCÍCIO INTERPRETAÇÃO 1

function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))      
console.log(minhaFuncao(10))

//
a - no console, serão impressos os valores 2 e 10 multiplicados por 5, pois é o que está no return
b - sem o console.log, nada será impresso e o sistema indica que (minhaFuncao (...)) não é uma função válida

EXERCÍCIO INTERPRETAÇÃO 2 

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// o console imprime 'false', pois a frase inserida não continha a palavra cenoura.

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   Eu gosto de cenoura // imprimirá true, pois a frase contém a palavra cenoura
     ii.  CENOURA é bom pra vista // imprimirá true, pois o comando toLowerCase imprimirá a palavra em minúsculo
     iii. Cenouras crescem na terra // imprimirá true, pois a palavra cenoura está na frase.



// EXERCÍCIO DIGITAÇÃO 1

const funcao = function (){

console.log ("Eu sou Aline, tenho 33 anos, moro em São Paulo e sou estudante.")

}

funcao() 

let nome = prompt ("digite seu nome")
let idade = prompt("qual a sua idade?")
let cidade = prompt("em qual cidade você mora?")
let profissao = prompt("qual a sua profissão?")

const funcao = function(nome, idade, cidade, profissao){

console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)

}

funcao(nome, idade, cidade, profissao)


//EXERCÍCIO DE DIGITAÇÃO 2 
//a

let num1 = +prompt ("insira um número")
let num2 = +prompt ("agora, insira mais um número")


const funcao = function (num1,num2){

    let resultado = num1 + num2

    return resultado 

}
funcao ()
console.log (funcao(num1, num2)) 

//b

let num1 = +prompt ("insira um número")
let num2 = +prompt ("agora, insira mais um número")


const funcao = function (num1,num2){

    let resultado = num1 >= num2

    return resultado 

}
funcao ()
console.log (funcao(num1>=num2)) 

//c

let num = +prompt ("insira um número")

const funcao = function (num){

    const resultado = num % 2
    return resultado === 0
}
console.log (funcao(num)) 
funcao() 

//d

const texto = prompt ("digite uma mensagem")

const funcao = function(texto){

    return `${texto.toUpperCase()},${texto.length}`

}
const resposta = funcao(texto)
console.log(resposta)


EXERCÍCIO DE DIGITAÇÃO 3

const funcao1 = function(num1,num2){
    return num1 + num2 

}

const funcao2 = function(num1,num2){
    return num1 - num2 
}

const funcao3 = function(num1,num2){
    return num1 * num2 
}

const funcao4 = function(num1,num2){
    return num1 / num2 
}
let num1 = +prompt ("digite um número")
let num2 = +prompt ("digite mais um número")

console.log (`${funcao1(num1,num2)}
${funcao2(num1,num2)}
${funcao3(num1,num2)}
${funcao4(num1,num2)}`)*/

