/* EXERCÍCIOS DE INTERPRETAÇÃO 1

let array
console.log('a. ', array)   // o valor retorna undefined, pois não foi designado o valor da variável

array = null
console.log('b. ', array)  //retorna null, pois este foi o valor definido

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)                    //retorna o número de caracteres do array

let i = 0
console.log('d. ', array[i])

array[i+1] = 19
console.log('e. ', array)

const valor = array[i+6]
console.log('f. ', valor) 

EXERCÍCIO DE INTERPRETAÇÃO 2

const frase = prompt("Digite uma frase aqui")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) 

//o console imprime a frase em maiúsculo e troca a letra A pela letra I: SUBI EM UM ONIBUS EM MIRROCOS.

EXERCÍCIO DE DIGITAÇÃO 1 

const nomeUsuario = prompt("digite seu nome")
const emailUsuario = prompt ("agora digite seu e-mail")
console.log (` O email ${emailUsuario} foi cadastrado com sucesso, seja bem vindo!  ${nomeUsuario}`)

EXERCÍCIO DE DIGITAÇÃO 2


const listaComidas = ['pizza', 'sushi', 'churrasco','tacos','yakisoba']
console.log (listaComidas)
console.log (`Essas são as minhas comidas preferidas: 
${listaComidas[0]}
${listaComidas[1]}
${listaComidas[2]}
${listaComidas[3]}
${listaComidas[4]}`)

const comidaFavorita = prompt ("qual a sua comida favorita?")
listaComidas[1] = comidaFavorita
console.log (listaComidas)

EXERCICIO DIGITAÇÃO 3 

const listaDeTarefas = [];
const tarefaUsuário1 = prompt ("digite uma tarefa");
const tarefaUsuário2 = prompt ("digite outra tarefa");
const tarefaUsuário3 = prompt ("digite uma terceira tarefa");

console.log (tarefaUsuário1, tarefaUsuário2, tarefaUsuário3);

listaDeTarefas.push(tarefaUsuário1, tarefaUsuário2, tarefaUsuário3);

console.log (listaDeTarefas);

const tarefaRealizada = prompt ("Digite o índice de uma tarefa que já realizou: 0, 1 ou 2");

listaDeTarefas.splice (tarefaRealizada,1);
console.log(listaDeTarefas);*/







