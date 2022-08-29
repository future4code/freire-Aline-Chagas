import { Request, Response } from "express";
import updateUser from "../data/updateUser";

export default async function editUser(req: Request, res: Response) {
  try {
    if (
      req.body.name === "" ||
      req.body.nickname === "" ||
      req.body.email === ""
    ) {
      res.status(400).send("Preencha corretamente todos os campos")
      return
    }

    if (!req.body.name && !req.body.nickname && !req.body.email) {
      res.status(400).send("Informe ao menos um campo a ser alterado")
      return
    }

    await updateUser(req.params.id, req.body.name, req.body.nickname, req.body.email);

    res.status(200).send("Usuário Atualizado com sucesso");
  } catch (error: any) {
    res.status(400).send(error.message || error.sqlMessage);
  }
}
