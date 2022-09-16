import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";
import { user } from "../types";

export default class userClass{
    async login(req:Request, res:Response){
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
        res.status(500)
        .send({ message: error.message || error.sqlMessage });
        }
    }
    async signUp(req:Request, res:Response){
        try {
            const { name, email, password, role } = req.body;

    if (!name  || !email || !password ||!role) {
      res.statusCode = 422;
      throw new Error(
        "Preencha todos os campos"
      );
    }

    const [user] = await connection("to_do_list_users").where({ email });

    if (user) {
      res.statusCode = 409;
      throw new Error("Email já cadastrado");
    }

    const uuidClass = new GenerateId();
    const id: string = uuidClass.generateId();

    const instanceHash = new HashManager();
    const hash = await instanceHash.generateHash(password);

    const newUser: user = { id, name,  email, password: hash, role };

    await connection("cookenu_users").insert(newUser);

    const newToken = new Authenticator();
    const token = newToken.generateToken({ id: id, role:role});

    res.status(201).send({ newUser, token });
        } catch (error:any) {
            res.status(500)
            .send({ message: error.message || error.sqlMessage });
            }
    }
    async getProfile(req:Request, res:Response){
        try {
            const token = req.headers.authorization
            if(!token){
                throw new Error("token inválido")
            }
            const id=new Authenticator().getTokenData(token)
            console.log(token)
            const result = await connection().select("*").from("cookenu_users").where(id)
            console.log(result[0])
        } catch (error:any) {
            res.status(500)
            .send({ message: error.message || error.sqlMessage });
        }
    }
}