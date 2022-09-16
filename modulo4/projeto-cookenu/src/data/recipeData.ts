import Recipe from "../model/recipe";
import { Authenticator } from "../services/Authenticator";
import { connectionDB } from "./connectionDB";

class RecipeData extends connectionDB {

  private static tableName = "cookenu_recipes";

  async createdRecipe(recipe: Recipe) {

    await connectionDB
      .connection(RecipeData.tableName)
      .insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        author_id: recipe.getAuthorId()
      });

    return "Receita cadastrada com sucesso! :)";
  }

  async getRecipeById(id:string){
    const result = await connectionDB.connection(RecipeData.tableName)
    .select("*").where({id})
    return result[0]
}

}

export default RecipeData;
