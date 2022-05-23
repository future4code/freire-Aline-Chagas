// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    let array2 = array.length

    return (array2)
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {

    return array.reverse();
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

    array.sort((a, b)=> a-b)
    
 return array
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {

 let arrayNumeros = []

 for (let i=0; i < array.length; i++){
  if (array[i]%2===0){
    arrayNumeros.push(array[i])
  }
   
} 
 return arrayNumeros
}
   

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let numerosElevadosADois = []
    for (let i=0; i < array.length; i++){

        if (array[i]%2===0){

            let numerosElevados = array[i]**2
          numerosElevadosADois.push(numerosElevados)
 
}
    }
    return numerosElevadosADois
} 

// EXERCÍCIO 06
function retornaMaiorNumero(array){
    array.sort(function(a,b){
        return b-a
    })
    return array[0]
}
   
   

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objeto = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: true,
    diferenca: 0

    }
    if (num1 < num2){
      objeto.maiorNumero = num2
      objeto.maiorDivisivelPorMenor = num2 % num1 ===0
      objeto.diferenca = num2 - num1
    
    }else{
     objeto.maiorNumero = num1
     objeto.maiorDivisivelPorMenor = num1 % num2 ===0
     objeto.diferenca = num1 - num2
    }
 
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (let i = 0; i < n; i++) {
     numerosPares.push(i*2)
}
      return numerosPares
}



// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ((ladoA===ladoB) && (ladoB===ladoC)){
        return "Equilátero"

    }else if ((ladoA!==ladoB) && (ladoA!== ladoC) && (ladoB!==ladoC)){
        return "Escaleno"

    }else{
        return "Isósceles"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    

  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const usuarioAnonimo = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return usuarioAnonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas){

let pessoasAutorizadas = pessoas.filter((pessoas) => {

if (pessoas.idade >14 && pessoas.altura >= 1.5 && pessoas.idade<60) {
    return true  
}
})
return pessoasAutorizadas
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter((pessoas) => {
        if (pessoas.idade <=14 || pessoas.altura < 1.5 || pessoas.idade>60) {
          return true  
        }
        })
        return pessoasNaoAutorizadas
        }

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}