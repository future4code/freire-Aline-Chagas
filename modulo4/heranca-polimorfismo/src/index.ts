export class User{
   private id:string
   private name:string
    private email:string
    private password:string | number
    // type: ENUM = 

        constructor( id:string, name:string, email:string, password:string | number){
            this.id = id
            this.name = name
            this.email = email
            this.password = password
        
        console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}
}

// exercicio 1
// a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?* Sim, a senha é impressa nessa instância 

const usuario1= new User ('001', 'zé@hotmail.com', 'José', '123456')
console.log(usuario1)

// b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?* apenas uma vez


// exercicio 2
// a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?*  nenhuma

// b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?* uma. 

export class Costumer extends User{
    private creditCard:number
    public totalBill: number

    constructor(id:string, name:string, email:string, password:string | number, creditCard:number, totalBill:number){
       super(id, name, email, password) 
       console.log("Chamando o construtor da classe Customer")
        this.creditCard = creditCard
        this.totalBill = totalBill
    }    
    
}    

export class Employee{
    private salary: number

    constructor(salary: number){
        this.salary = salary
    }
}

