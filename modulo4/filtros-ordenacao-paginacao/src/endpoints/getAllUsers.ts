import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsers = async(req: Request,res: Response): Promise<any> =>{
   try {
      
   } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

export const getUsersByName = async (req: Request,res: Response): Promise<any> =>{
 const result = await connection("aula48_exercicio")
 .where ('name','like', `%${name}%`)
 return result
}