import axios from "axios"
import { Request, Response } from "express"
import selecAllAdress from "../data/selectAllAdress"


export const getAllAddress = async (req: Request, res: Response) => {
 
    try{
const result = await selecAllAdress()
res.send(result)

    }catch(error:any){
res.status(400).send(error.message)
    }
}