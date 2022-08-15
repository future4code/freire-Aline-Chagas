import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());


app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

type User={
 id: number,
 name:string,
 phone:number,
 email:string,
 website: string
}
type Post={
 id: number,
 title:string,
 body:string,
 userId: number
}

const user:User[]=[
    {
    id: 1,
    name: 'João',
    phone:1199999999,
    email: 'joao@gmail.com',
    website:'joaozinho.com.br'

},
    {
    'id': 2,
    'name': 'Pedrinho',
    'phone':1199998888,
    'email': 'pedrinho@gmail.com',
    'website':'pedrinho.com.br'

},
    {
    'id': 3,
    'name': 'Maria',
    'phone':1177777999,
    'email': 'maria@gmail.com',
    'website':'donamaria.com.br'

},
    {
    'id': 4,
    'name': 'Julia',
    'phone':1199555999,
    'email': 'jujuliana@gmail.com',
    'website':'jujubinha.com.br'

}
]
const post:Post[]=[
    {
    userId:1,
    id: 1,
    title: 'No dia em que eu saí de casa',
    body: 'minha mãe me disse: filho, vem cá'


    
    

}
   
]

app.get('/users', (req,res)=>{
   res.send(user)
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

