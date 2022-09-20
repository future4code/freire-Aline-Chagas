import { Request, Response } from "express";
import RecipeData from "../data/recipeData";
import Recipe from "../model/recipe";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export default class recipeClass{
    async createRecipe(req:Request, res: Response){
    try {
        const token = req.headers.authorization
        const {title, description} = req.body

        if(!title || !description){
            throw new Error ("todos os campos devem ser preenchidos")
        }

        if(!token){
            throw new Error ("token inválido")
        }

        const tokenData= new Authenticator().getTokenData(token)
        const author_id = tokenData.id

        const idRecipe = new GenerateId().generateId()
        const recipe = new Recipe(idRecipe,title,description,author_id)

        const recipeDataDB = new RecipeData()
        const result = await recipeDataDB.createdRecipe(recipe)

        res.status(201).send(result)

    } catch (error:any) {
        res.status(500)
        .send({ message: error.message || error.sqlMessage });
    }
    }

    async getRecipeById(req:Request, res:Response){
        try {
        const token = req.headers.authorization
        const idRecipe= req.params.id
        if(!token){
            throw new Error("token inválido")
        }

        const id:any = new Authenticator().getTokenData(token)

        const recipeData = new RecipeData()
        const recipe = await recipeData.getRecipeById(idRecipe)
        res.status(200)
        .send({id:recipe.id,title:recipe.title,description:recipe.description, created_at:recipe.created_at});

        } catch (error:any) {
            res.status(500)
            .send({ message: error.message || error.sqlMessage });
        }
    }

}
