import React from "react";
import useProtectedPage from "../hooks/useProtectedPage";
import AddRecipeForm from "../hooks/AddRecipeForm";
import { RecipeContainer, ScreenContainer } from './styledAddRecipe'
import Typography from '@material-ui/core/Typography'

const AddRecipePage = () => {
    useProtectedPage()

    return(
         <ScreenContainer>
      <RecipeContainer>
        <Typography gutterBottom variant={'h4'} align={'center'} color={'textPrimary'}>Adicionar Nova Receita</Typography>
        <AddRecipeForm/>
      </RecipeContainer>
    </ScreenContainer>
    )
}

export default AddRecipePage