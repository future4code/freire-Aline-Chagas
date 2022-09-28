import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public createPost = async (req:Request, res:Response)=>{
        try {
        
            const input = {
                content: req.body.content,
                token: req.headers.authorization
            }
         
            const response = await this.postBusiness.createPost(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }
    
    public getPost = async (req:Request, res:Response)=>{
        try {
            const token = req.headers.authorization as string
            
            const response = await this.postBusiness.getPost(token)
            res.status(200).send(response)

        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public deletePost = async (req:Request, res:Response)=>{
        try {
            const token = req.headers.authorization as string
            const id = req.params.id as string
            
            const response = await this.postBusiness.deletePost(token,id)
            res.status(200).send(response)

        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    public likePost = async (req:Request, res:Response)=>{
        try {
            const token = req.headers.authorization as string
            const post_id = req.body.id as string
            
            const response = await this.postBusiness.likePost(token,post_id)
            res.status(200).send(response)

        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }
    
    public dislikePost = async (req:Request, res:Response)=>{
        try {
            const token = req.headers.authorization as string
            const post_id = req.params.id as string
            
            const response = await this.postBusiness.dislikePost(token,post_id)
            res.status(200).send(response)

        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }

    }
    
   
