function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let comissaoPorVenda =(qtdeCarrosVendidos*100)+valorTotalVendas*0.05
let salarioFinal = comissaoPorVenda + 2000
 return salarioFinal
}