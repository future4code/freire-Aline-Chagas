import { Request, Response } from "express";
import { UserDatabase } from "../database/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export class UserController {
    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                res.statusCode = 400
                throw new Error("todos os campos são obrigatórios")
            }

            const userDB = new UserDatabase()
            const user = await userDB.getUserByEmail(email)

            if (!user) {
                res.statusCode = 400
                throw new Error('usuário não encontrado no banco de dados')
            }

            const isPasswordValid = new HashManager().compareHash(password, user.password)

            if (!isPasswordValid) {
                res.statusCode = 400
                throw new Error('Senha inválida')
            }

            const token = new Authenticator().generateToken({
                id: user.id,
                role: user.role
            })

            res.status(200).send({
                message: 'usuário logado com sucesso',
                token
            })

        } catch (error: any) {
            if (res.statusCode === 200) {
                res.status(500).send({ message: error.message })
            } else {
                res.status(res.statusCode).send({ message: error.sqlMessage || error.message })
            }
        }
}
}
