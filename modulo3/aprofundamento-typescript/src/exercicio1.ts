const minhaString: string = "Aline"

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
console.table(pessoa)