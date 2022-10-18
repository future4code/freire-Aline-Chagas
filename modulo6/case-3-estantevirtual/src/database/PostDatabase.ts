import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { ILikeDB, IPostDB, Post } from "../models/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    createPost = async (post:Post)=>{
        await BaseDatabase.connection(PostDatabase.TABLE_POSTS).insert({
            id:post.getId(),
            content:post.getContent(),
            user_id:post.getUserId()
        })
    }

    public getPost = async (token:string) => {
      
        const postDB: IPostDB[] = await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .select("*")
          
        return postDB
    }
   
    public deletePost = async (id:string) => {
        await BaseDatabase
            .connection(PostDatabase.TABLE_POSTS)
            .delete()
            .where({id})
            return("post excluído com sucesso!")
    }

    likePost = async(input:ILikeDB) =>{
        await BaseDatabase
        .connection(PostDatabase.TABLE_LIKES)
        .insert(input)

        return("você curtiu o post") 
    }
    
    getLike = async(token:string,id:string) =>{
        const result = await BaseDatabase
        .connection(PostDatabase.TABLE_LIKES)
        .select("*")
        .where("user_id",`${token}`)
        .andWhere("post_id",`${id}`)
        return result
    }

    dislikePost = async(token:string, post_id:string) =>{
        await BaseDatabase
        .connection(PostDatabase.TABLE_LIKES)
        .delete()
        .where("user_id",`${token}`)
        .andWhere("post_id",`${post_id}`)
        return("você descurtiu o post") 
    }

}