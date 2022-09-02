import { Request,Response } from "express";
import { User, userData } from "../types/typeUser";
import insertUser from "../data/insertUser";

export default async function createUser(req:Request, res:Response){
    try {

        const { name, email, password }: User = req.body

        if (!name || !email || !password) {
            throw new Error("os campos são obrigatórios")
        }

        const insert: userData = {
            id: Date.now().toString(),
            name,
            email,
            password
        }

        const result = await insertUser(insert)

        res.status(201).send({message: result})
    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}