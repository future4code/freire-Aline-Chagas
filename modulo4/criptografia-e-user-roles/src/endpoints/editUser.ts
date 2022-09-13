import { Request, Response } from "express";
import connection from "../connection";
import { Autheticator } from "../services/Authenticator";
import { userRole } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname } = req.body


      const token = req.headers.authorization
      console.log(token)

      if(!token){
         res.statusCode = 401
         throw new Error("Não autorizado")
      }
      
      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }
      
      const getTokenAuthenticatior = new Autheticator()
      const tokenData = getTokenAuthenticatior.getTokenData(token)
   
      if(!tokenData){
         res.statusCode = 401
         throw new Error("Token inválido")
      }
             
      console.log("role:", tokenData.role)
      console.log("id:", tokenData.id)

      if(tokenData.role !== userRole.ADMIN){
         res.statusCode = 409
         throw new Error("credenciais inválidas, procure um/a ADMIN do sistema") 
      }

      await connection('to_do_list_users')
         .update({ name, nickname })
         .where({ id: tokenData.id })

      res.status(201).send("editado com sucesso")

   } catch (error:any) {

      if (res.statusCode === 200) {
         res.status(500).send(error.message || error.sqlMessage)
      }
      
     
      res.status(res.statusCode).send(error.message)
   }
}
