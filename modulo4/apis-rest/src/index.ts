import express from "express";
import cors from "cors";
import { users } from "./users";
import path from "path";

const app = express();

app.use(express.json());
app.use(cors());

// exercicio 1
app.get("/userList", (req, res) => {
    res.send(users);
  });

// *a. Qual método HTTP você deve utilizar para isso?*
// o método get
 
// *b. Como você indicaria a **entidade** que está sendo manipulada?*
// a entidade manipulada é a lista de usuários, indicada no path da requisição


// exercicio 2
app.get("/userList/:type", (req, res) => {
    const usersType = users.filter((user)=>{
     if(user.type === req.params.type){
        return user
     }
    })
    res.send(usersType);
  });

// // *a.* Como você passou os parâmetros de type para a requisição? Por quê?
// os parâmetros foram passados via path, para que a requisição seja realizada de acordo com o path param fornecido pelo usuário da api

// b. Você consegue pensar em um jeito de garantir que apenas `types` válidos sejam utilizados?
// sim, criando um switch que retorne um erro caso o type seja inválido

// exercicio 3
app.get("/userList/search/:name", (req, res) => {

   try{
     const usersName = users.filter((user)=>{
        if(user.name === req.params.name){
          return user
        }})
        if(!usersName.length){
            throw new Error(`o nome ${req.params.name} não foi encontrado`)
        }
    res.send(usersName);

    }catch(error : any){
        
        res.status(500).send({message:error.message})
   }
   }
)
// *a. Qual é o tipo de envio de parâmetro que costuma ser utilizado por aqui?*
// o parâmetro utilizado é o nome, enviado pelo path params

// b. Altere este endpoint para que ele devolva uma mensagem de erro caso nenhum usuário tenha sido encontrado.
// feito
// exercicio 4


// a. Mude o método do endpoint para `PUT`. O que mudou?

// b. Você considera o método `PUT` apropriado para esta transação? Por quê?


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});