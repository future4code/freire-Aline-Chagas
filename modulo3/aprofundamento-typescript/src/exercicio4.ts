type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) escrevendo tsc exercicio4.ts no terminal
// c) incluindo o comando "tsc && node ./src/exercicio3.js" no RootDir do tsconfig.json
// d) podemos transpilar vários arquivos com o comando tsc, colocando os nomes deles separados por um espaço. 