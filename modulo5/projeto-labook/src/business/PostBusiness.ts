import { PostDatabase } from "../database/PostDatabase"
import { ParamsError } from "../errors/ParamsError"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"
import { ILikeDB, IPostDB, Post } from "../models/Post"
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

        const post = new Post(id,content, user_id)
        await this.postDatabase.createPost(post)
        const response = {
            message: "Post criado com sucesso"
        }

        return response
    }

    getPost = async(input:string)=>{
        
        const payload = this.authenticator.getTokenPayload(input)
        if(!payload){
            throw new Error("tá faltando algo")
        }

        const response = await this.postDatabase.getPost(payload.id)
        
        return response
    }

    deletePost = async(token:string, id:string)=>{
        
        const payload = this.authenticator.getTokenPayload(token)
        if(!payload){
            throw new Error("tá faltando algo")
        }
        if(!id){
            throw new Error("postId Inválido")
        }

        const response = await this.postDatabase.deletePost(id)
        
        return response
    }

    likePost = async(token:string, post_id:string)=>{
        const id = this.idGenerator.generate()
        
        const payload = this.authenticator.getTokenPayload(token)
        if(!payload){
            throw new Error("tá faltando algo")
        }
        if(!post_id){
            throw new Error("postId Inválido")
        }
        const validateLike = await this.postDatabase.getLike(payload.id, post_id)
        
        if(validateLike.length > 0){
            throw new Error("você já curtiu este post")
        }
    
        const like:ILikeDB = {
            id:id,
            user_id:payload.id,
            post_id:post_id
        }
        
        const response = await this.postDatabase.likePost(like)
        
        return response
    }
    dislikePost = async(token:string, post_id:string)=>{
        const id = this.idGenerator.generate()
        
        const payload = this.authenticator.getTokenPayload(token)
        if(!payload){
            throw new Error("tá faltando algo")
        }
        if(!post_id){
            throw new Error("id Inválido")
        }
        const validateLike = await this.postDatabase.getLike(payload.id, post_id)
        console.log(validateLike)
        if(validateLike.length < 1){
            throw new Error("você não curtiu este post")
        }

        const response = await this.postDatabase.dislikePost(token, post_id)
        
        return response
    }
    }
