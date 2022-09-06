import express from "express"
import cors from "cors"
import { AddressInfo } from "net"


export const app = express()

app.use(express.json())
app.use(cors())

// exercicio 1 - a) o constructor executa ações de uma instância de uma classe 
// b) a mensagem foi impressa uma vez no terminal
// c) por meio de um método

class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private transactions: Transaction[] = [];
   private balance: number = 0;
 

   constructor(
      cpf: "12345678920",
      name: "José",
      age: 30,
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
   }
}

//  exercicio 2
class Transaction{
   private description: string;
   private date: string;
   private value: number
 }

 constructor(description: string, date:string,value:number){
    
 }

 class Bank{
   private accounts:UserAccount[]
   constructor(accounts:UserAccount[]){
      this.accounts=accounts
   }
   public getAccounts():UserAccount[]{
      
   } }

const server = app.listen(process.env.PORT || 3003, () => {

   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})

