import app from "./app";
import editUser from "./endpoints/editUser";
import createUser from "./endpoints/createUser";
import { v4 } from "uuid";
import { Autheticator } from "./services/Authenticator";
import { AuthenticationData } from "./types";
import login from "./endpoints/login";
import { HashManager } from "./services/HashManager";
import getProfile from "./endpoints/getProfile";

app.post("/user/signup", createUser);
app.put("/user/edit", editUser);
app.post("/user/login", login);
app.get("/user/profile", getProfile)

// const testeHash = async () => {
//   const password = "labenu";
//   const passwordTentativa = "labenu2"

//   const instanceHash = new HashManager();

//   const hash = await instanceHash.hash(password);

//   console.log("HASH ---->", hash);

//   const compareHash:boolean = await instanceHash.compareHash(password, hash)
//   if(!compareHash){
//     console.log("credenciais inválidas")
//   }else{
//     console.log("logado com sucesso")
//   }
// };
// testeHash();



