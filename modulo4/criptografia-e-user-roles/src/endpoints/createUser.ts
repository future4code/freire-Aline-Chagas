import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../types";
import { GenerateId } from "../services/GenerateId";
import { Autheticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export default async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { name, nickname, email, password, role } = req.body;

    if (!name || !nickname || !email || !password) {
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
    const hash = await instanceHash.hash(password);

    const newUser: user = { id, name, nickname, email, password: hash, role };

    await connection("to_do_list_users").insert(newUser);

    const newToken = new Autheticator();
    const token = newToken.generateToken({ id: id, role: role });

    res.status(201).send({ newUser, token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: error.message });
    } else {
      res.send({ message: error.message });
    }
  }
}
