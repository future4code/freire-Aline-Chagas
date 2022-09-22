import { PostDatabase } from "../database/PostDatabase"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}
    public createPost = async (input:any)=>{
        const content = input
    

        if (!content) {
            throw new Error("Um ou mais parâmetros faltando")
        }

        if (typeof content !== "string" || content.length < 1) {
            throw new Error("parâmetro deve ter no mínimo uma palavra")
        }
       
        const IdUserDB = await this.userDatabase.findByEmail(content)

        if (userDB) {
            throw new Error("E-mail já cadastrado")
        }

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)

        const user = new(
            
        )

        await this.postDatabase.createUser(user)

        const payload = {
            id: user.getId(),
            role: user.getRole()
        }

        
        const token = this.authenticator.generateToken(payload)

        const response:ISignupOutputDTO = {
            message: "Cadastro realizado com sucesso",
            token
        }

        return response
    }
    }
}