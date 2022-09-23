import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"
import { IPostDB, Post } from "../models/Post"
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

    // public findById = async (id: string) => {
    //     const usersDB: IUserDB[] = await BaseDatabase
    //         .connection(UserDatabase.TABLE_USERS)
    //         .select()
    //         .where({ id })

    //     return usersDB[0]
    // }

    // public deletePost = async (id: string) => {
    //     await BaseDatabase
    //         .connection(PostDatabase.TABLE_POSTS)
    //         .delete()
    //         .where({ id })
    // }

}