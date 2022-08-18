
const operacao = process.argv[2];

switch(operacao){
	case "add":
		console.log("O resultado é", Number(process.argv[3]) + Number(process.argv[4]))
		break;
	case "sub":
		console.log("O resultado é", Number(process.argv[3]) - Number(process.argv[4]))
		break;
	case "mult":
		console.log("O resultado é", Number(process.argv[3]) * Number(process.argv[4]))
		break;
	case "div":
		console.log("O resultado é", Number(process.argv[3]) / Number(process.argv[4]))
		break;
}

