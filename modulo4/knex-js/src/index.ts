import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net"
import connection from "./connection"

const app: Express = express();

app.use(express.json());
app.use(cors());

// exercício 1 
// a) o método raw retorna exatamente o que está no banco de dados, utilizando diretamente a linguagem SQL

// b)
app.get("/ator/:name", async(req,res) =>{
 try{
const name = req.params.name
const result = await connection.raw(`
  SELECT * FROM Actor 
  WHERE name = "${name}"
 `);
 res.status(200).send(result);
 }catch(error:any) {
    res.status(500).send(error.sqlMessage || error.message);
 }
});
//  c)Faça uma função que receba um gender retorne a quantidade de itens na tabela 
// Actor com esse gender. Para atrizes, female e para atores male.

app.get('/ator/:gender', async (req,res) =>{
    try{
    const gender:string = req.params.gender
    const result = await connection.raw(`
    SELECT gender FROM Actor
    WHERE gender = "${gender}"
    `);
    res.status(200).send(result);

    }catch(error:any){
    res.status(500).send(error.sqlMessage || error.message);

    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});