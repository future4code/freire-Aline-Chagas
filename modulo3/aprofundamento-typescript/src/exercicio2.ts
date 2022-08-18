// a) a entrada da função é o parâmetro numeros, a saída é o objeto estatísticas, chamado no return

type Dados ={
    maior: number,
    menor:number,
    media: number
}
function obterEstatisticas(numeros: number[]) :Dados {

    const numerosOrdenados: number[] = numeros.sort(
        (a:number, b:number):number => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas : Dados = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type AmostraDeDados ={
    numeros:number []
}