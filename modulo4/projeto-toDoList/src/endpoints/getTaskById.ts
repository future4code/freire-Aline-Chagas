import { Request, Response } from "express";
import selectTaskById from "../data/selectTaskById";

export default async function getTaskById(
  req: Request,
  res: Response
){try{
   const result = await selectTaskById(req.params.id)

   if(!result){
    res.status(404).send("tarefa não encontrada")
    return
   }
   res.status(200).send(result)

}catch(error:any){
  res.status(400).send(error.message || error.sqlMessage)
}}