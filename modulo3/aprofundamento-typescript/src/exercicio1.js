var minhaString = "Aline";
var Cores;
(function (Cores) {
    Cores["AZUL"] = "Azul";
    Cores["VERMELHO"] = "Vermelho";
    Cores["AMARELO"] = "Amarelo";
    Cores["VERDE"] = "Verde";
    Cores["ANIL"] = "Anil";
    Cores["VIOLETA"] = "Violeta";
    Cores["LARANJA"] = "Laranja";
})(Cores || (Cores = {}));
var pessoa = {
    nome: "Aline",
    idade: 33,
    corFavorita: Cores.VIOLETA
};
console.table(pessoa);
