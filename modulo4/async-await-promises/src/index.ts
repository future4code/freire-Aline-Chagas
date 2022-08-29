import express, {Request, Response} from "express";
import cors from "cors";
import { AddressInfo } from "net";
import axios from "axios";
import { baseURL } from "../src/services/baseURL";

const app = express();
app.use(express.json());
app.use(cors());

// exercicio 1
// a) o endpoint a ser utilizado deve ser o Get Subscribers (https://labenews.herokuapp.com/subscribers)
// b) pela :Promise<any[]>
// c)
// const getSubscribers = async () => {
// const response = await axios.get(`${baseURL}/subscribers`)
//   return response.data
// };

// exercicio 2
// a)  diferença de sintaxe é a própria arrow function =>
// b)
// const getSubscribers = async():Promise<any[]> => {
//   const response = await axios.get(`${baseURL}/subscribers`);
//   return response.data;
// }

// exercicio 3

type User = {
  id: string;
  name: string;
  email: string;
};
// a) não, não terá um erro de tipagem, já que a função deverá retornar os users da lista.
// b) o tipo 'any' permite que qualquer tipo de informação (boolean, string, number) seja acessado.
// a tipagem correta serve especificamente para garantir que esse tipo de informação seja enviada e recebida de forma controlada

const getSubscribers = async (): Promise<User[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data.map((user:User)=>{
  return{
  id:user.id,
  name:user.name,
  email:user.email
 }
  })

};

// exercicio 4
// a) é uma função assíncrona, pois ela não precisa esperar toda a execução linha a linha do código para ser realizada.

const main = async (): Promise<void> => {
  try {
    const subscribers = await getSubscribers();
  } catch (error: any) {
    const resp = error.response?.data || error.message;
    console.log(resp , "não funcionou");
  }
};
main();

const server = app.listen(3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
