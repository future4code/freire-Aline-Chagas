import { Request, Response } from "express";
import connection from "../connection";
import { Autheticator } from "../services/Authenticator";


export default async function getProfile(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.statusCode = 409;
      throw new Error("token não enviado");
    }
    const authenticator = new Autheticator();

    const tokenData = authenticator.getTokenData(token);

    const [user] = await connection("to_do_list_users").where({
      id: tokenData.id,
    });

    if(user.role !== "NORMAL"){
      res.statusCode = 500;
      throw new Error("apenas usuários normais podem acessar este endpoint");
    }

    res.status(200).send({
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        id: user.id,
      },
    });
  } catch (error: any) {
    res.status(res.statusCode).send(error.message);
  }
}
