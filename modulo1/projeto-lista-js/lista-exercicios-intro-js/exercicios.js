// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {

  return num1 + num2

}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = +prompt("Digite a altura de um retângulo")
  const largura = +prompt("Agora, digite a largura do retângulo")

  console.log (altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = +prompt("Digite o ano em que estamos")
  const anoNascimento = +prompt("Agora, digite o ano do seu nascimento")

  console.log (anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt ("Digite seu nome.")
  const idade = prompt ("Qual a sua idade?")  
  const email = prompt ("Agora, informe seu e-mail.")
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt ("digite sua primeira cor favorita")
  const cor2 = prompt ("Qual a sua segunda cor favorita?")  
  const cor3 = prompt ("Agora, informe sua terceira cor favorita")
  let array = []
  array.push (cor1, cor2, cor3)
  console.log (array)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const resultado = custo / valorIngresso
  return resultado

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
 const igual = string1.length === string2.length
 return igual

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array [array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const ultimoNum = array[array.length-1]
  const primeiroNum= array[0]
array[0] = ultimoNum
array[array.length-1] = primeiroNum
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1 = string1.toUpperCase()
  string2 = string2.toUpperCase()
  return string1 === string2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}