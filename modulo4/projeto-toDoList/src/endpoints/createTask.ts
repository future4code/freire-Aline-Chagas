import { Request, Response } from "express";
import moment from "moment";
import insertTask from "../data/insertTask";


export default async function createTask(req: Request, res: Response) {
  try {
    if (
      !req.body.title ||
      !req.body.description ||
      !req.body.deadline ||
      !req.body.author_id
    ) {
      res
        .status(400)
        .send(
          "preencha todos os campos obrigatórios para criar a sua tarefa"
        );
      return;

    }
    const dateDiff: number =
      moment(req.body.limitDate, "DD/MM/YYYY").unix() - moment().unix();
      if (dateDiff <=0){
        res.status(400).send("deadline deve ser uma data futura")
      }
      await insertTask(
        req.body.title,
        req.body.description,
        moment(req.body.deadline, "DD/MM/YYYY").format("YYYY-MM-DD"),
        req.body.author_id)

      res.status(201).send("tarefa criada com sucesso");
  
  } catch (error: any) {
    res.status(400).send({
      message: error.message || error.sqlMessage,
    });
  }
}
