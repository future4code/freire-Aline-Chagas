
import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../types";
import { GenerateId } from "../services/GenerateId";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, email, password, role } = req.body;

    if (!name  || !email || !password ||!role) {
      res.statusCode = 422;
      throw new Error(
        "Preencha todos os campos"
      );
    }

    const [user] = await connection("to_do_list_users").where({ email });

    if (user) {
      res.statusCode = 409;
      throw new Error("Email já cadastrado");
    }

    const uuidClass = new GenerateId();
    const id: string = uuidClass.generateId();

    const instanceHash = new HashManager();
    const hash = await instanceHash.generateHash(password);

    const newUser: user = { id, name,  email, password: hash, role };

    await connection("cookenu_users").insert(newUser);

    const newToken = new Authenticator();
    const token = newToken.generateToken({ id: id, role:role});

    res.status(201).send({ newUser, token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.send({ message: error.message });
    }
  }
}
    
//     Body
    
//     ```json
//     {
//     	"name": "Alice",
//     	"email": "alice@lbn.com",
//     	"password": "123456"
//     }
//     ```
    
//     **Saídas**
    
//     Body
    
//     ```json
//     {
//     	"access_token": "token de acesso"
//     }
//     ```
    
//     **Observações**:
    
//     - O seu código deve validar se os três campos estão completos 
//     (ou seja se não foram enviados ou se não estão vazios) 
//     e retornar um erro caso não estejam válidos
//     - O seu código deve gerar o id do usuário