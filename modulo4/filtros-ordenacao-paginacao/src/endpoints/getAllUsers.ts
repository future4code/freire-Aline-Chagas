import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsers = async(req: Request,res: Response): Promise<any> =>{
   try {
      
      const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)
   res.send(result[0])
   
}catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

