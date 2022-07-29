import React from "react";
import { useNavigate } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import useRequestData from "../hooks/UseRequestData";
import { goToRecipeDetailPage, goToAddRecipePage } from "../routes/Coordinator";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import { RecipeListContainer, AddRecipeButton } from "./styledRecipeList";
import { Add } from "@material-ui/icons";

const RecipesListPage = () => {
  useProtectedPage();
  const navigate = useNavigate();

  const recipes = useRequestData(
    [],
    `https://cookenu-api.herokuapp.com/recipe/feed`
  );

  const onClickCard = (id) => {
    goToRecipeDetailPage(navigate,id);
  };

  const recipeCard = recipes.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={() => onClickCard(recipe.recipe_id)}
      />
    );
  });
  return (
    <RecipeListContainer>
      {recipeCard}
      <AddRecipeButton
        color={"primary"}
        onClick={() => goToAddRecipePage(navigate)}
      >
        <Add />
      </AddRecipeButton>
    </RecipeListContainer>
  );
};

export default RecipesListPage;
