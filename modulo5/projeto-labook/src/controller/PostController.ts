import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public createPost = async (req:Request, res:Response)=>{
        try {
            
            const input = {
                content: req.body.content
            }
         
            const response = await this.postBusiness.createPost(input)

            res.status(201).send(response)
        } catch (error:any) {
            res.status(400).send({ message: error.message })
        }
    }
    }
   // public getPost = async (req: Request, res: Response) => {
    //     try {
    //         const input: any = {
    //             token: req.headers.authorization,
    //             search: req.query.search as string,
    //             order: req.query.order as string,
    //             sort: req.query.sort as string,
    //             limit: req.query.limit as string,
    //             page: req.query.page as string
    //         }

    //         const response = await this.userBusiness.getUsers(input)

    //         res.status(200).send(response)
    //     } catch (error:any) {
    //         res.status(400).send({ message: error.message })
    //     }
    // }

}