const tarefa = ["comprar maçãs", "comprar ovos"]
const addTarefa = process.argv[2]

 tarefa.push(addTarefa)

console.table(tarefa)