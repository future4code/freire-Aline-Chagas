const nome =process.argv[2]
const idadeAtual =Number(process.argv[3])
const idadeFutura = idadeAtual + 7

console.log(
  ` \u001B[35m Olá, ${nome}. Você tem ${idadeAtual} anos. Em sete anos você terá ${idadeFutura}.`
);
