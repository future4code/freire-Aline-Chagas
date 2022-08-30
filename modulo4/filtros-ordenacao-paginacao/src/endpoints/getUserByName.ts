import { Request, Response } from "express"
import { connection } from "../data/connection"
import selectUserByName from '../data/selectUserByName'

export const getUsersByName = async (req: Request,res: Response): Promise<any> =>{
  try{
    let name = req.query.name as string
    const result= await selectUserByName(name)
    res.status(200).send(result)

   }catch(error:any){
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}
