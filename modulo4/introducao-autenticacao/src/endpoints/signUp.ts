import { Request, Response } from "express";
import { userInfo } from "os";
import connection from "../connection";
import { generateId } from "../services/GenerateId";
import { generateToken } from "../services/generateToken";

export default async function signup(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error("preencha o email");
    }

    if ( email.indexOf("@") === -1) {
        throw new Error("email inválido");
      }
    if ( password.length < 6) {
        throw new Error("a senha deve conter no mínimo 6 caracteres");
      }

    const userId = generateId();
    const newToken = generateToken({ id: userId });

    const createUser = await connection ("users_exercicio1209").insert({id:userId, email, password})
    res.status(201).send(newToken)
  } catch (error:any) {
    res.status(500).send(error.message)
  }
}
