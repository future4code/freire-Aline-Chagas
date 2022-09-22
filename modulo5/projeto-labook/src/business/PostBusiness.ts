import { PostDatabase } from "../database/PostDatabase"
import { ParamsError } from "../errors/ParamsError"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { IPostDB, Post } from "../models/Post"
import { likes } from "../database/migrations/data"

export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}
    public createPost = async (input:any)=>{
        const {content, token} = input
    

        if (!content || !token) {
            throw new ParamsError()
        }

        if (typeof content !== "string" || content.length < 1) {
            throw new Error("parâmetro deve ter no mínimo uma palavra")
        }

        const payload = this.authenticator.getTokenPayload(token)
        if(!payload){
            throw new ParamsError()
        }
        
       
        const id = this.idGenerator.generate()

        const user_id = payload.id

        // const likes = 0

        const post = new Post(id,content, user_id)
        await this.postDatabase.createPost(post)
        const response = {
            message: "Post criado com sucesso"
        }

        return response
    }
    getPost = async()=>{
        
    }
    }
