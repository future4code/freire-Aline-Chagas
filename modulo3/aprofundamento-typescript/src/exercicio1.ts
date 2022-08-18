const minhaString: string = "Aline"

let meuNumero: number | string 
// para que o objeto aceite mais de um tipo de valor, pode-se utilizar union type ou any, porém o any não é muito recomendável.

type Pessoa ={
    nome:string,
    idade: Number,
    corFavorita:string
}

enum Cores{
    AZUL="Azul",
    VERMELHO="Vermelho",
    AMARELO="Amarelo",
    VERDE="Verde",
    ANIL="Anil",
    VIOLETA="Violeta",
    LARANJA="Laranja"
}
const pessoa:Pessoa = {
    nome: "Aline",
    idade: 33,
    corFavorita:Cores.VIOLETA
}
const pessoa1:Pessoa = {
    nome: "Agnes",
    idade: 8,
    corFavorita:Cores.VERMELHO
}
const pessoa2:Pessoa = {
    nome: "Katherine",
    idade: 8,
    corFavorita:Cores.AZUL
}
console.table(pessoa)
console.table(pessoa1)
console.table(pessoa2)