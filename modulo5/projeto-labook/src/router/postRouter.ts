import { Router } from 'express'
import { PostBusiness } from '../business/PostBusiness'
import { PostController } from '../controller/PostController'
import { PostDatabase } from '../database/PostDatabase'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'

export const postRouter = Router()

const postController = new PostController(
    new PostBusiness(
        new PostDatabase(),
        new IdGenerator(),
        new Authenticator()
    )
)

postRouter.post("/create-post", postController.createPost)
postRouter.get("/get-post", postController.getPost)
postRouter.post("/like", postController.likePost)
postRouter.delete("/delete-post/:id", postController.deletePost)
postRouter.delete("/dislike/:id", postController.dislikePost)
