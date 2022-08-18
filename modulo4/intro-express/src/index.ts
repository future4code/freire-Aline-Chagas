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
},
    {
    userId:1,
    id: 2,
    title: 'Receita de bolo gostoso',
    body: '2 ovos, duas xícaras de farinha, uma xícara de açúcar, meia xícara de chocolate em pó, duas colheres de Manteiga...'
},
    {
    userId:2,
    id: 1,
    title: 'A balada foi muito legal',
    body: 'tirando a Julia que vomitou no meu pé :('
},
    {
    userId:3,
    id: 1,
    title: 'Qual a música favorita de vcs?',
    body: 'eu gosto MUITO daquela que é assim: "param param param pampam... eu só não sei o nome'
},
    {
    userId:4,
    id: 1,
    title: 'Nunca mais eu bebo',
    body: 'que ressaca, socorro!'
} 
]

app.get('/users', (req,res)=>{
   res.send(user)
})

app.get('/posts', (req,res)=>{
   res.send(post)
})

app.get('/posts/1', (req,res)=>{
   res.send(post)
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

