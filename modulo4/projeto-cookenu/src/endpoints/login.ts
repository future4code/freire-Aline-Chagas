
import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";


export default async function login(
   req: Request,
   res: Response
): Promise<void>{
    try {

        const {email,password} = req.body

        if(!email || !password){
            res.statusCode = 422
            throw new Error("Preencha seu email e senha")
        }
        
        const [user] = await connection('cookenu_users').where({email})

        if(!user){
            res.statusCode = 409
            throw new Error("usuário não encontrado")
        }
        
        const instanceHash = new HashManager()
        const isCompareHash = await instanceHash.compareHash(password, user.password)
        if(!isCompareHash){
            res.statusCode = 409
            throw new Error("Senha Incorreta")
        }

        const newToken = new Authenticator()
        const token = newToken.generateToken({id: user.id, role:user.role})

        res.status(200).send({token})
        
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}