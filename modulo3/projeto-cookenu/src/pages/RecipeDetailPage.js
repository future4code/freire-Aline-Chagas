import React from "react";
import { useParams } from "react-router-dom";
import useProtectedPage from "../hooks/useProtectedPage";
import useRequestData from "../hooks/UseRequestData";
import {
  ScreenContainer,
  RecipeImage,
  RecipeContainer,
} from "./styledRecipeDetail";
import Typography from "@material-ui/core/Typography";
import Loading from "../components/Loading/Loading";

const RecipeDetailPage = () => {
  useProtectedPage();
  const params = useParams();
  const recipe = useRequestData(
    [],
    `https://cookenu-api.herokuapp.com/recipe/${params.id}`
  )[0]
  

  return (
    <ScreenContainer>
      {recipe ? (
        <RecipeContainer>
          <RecipeImage src={recipe.image} />
          <Typography
            gutterBottom
            align={"center"}
            variant={"h5"}
            color={"primary"}
          >
            {recipe.title}
          </Typography>
          <Typography align={"center"}>{recipe.description}</Typography>
        </RecipeContainer>
      ) : (
        <Loading />
      )}
    </ScreenContainer>
  );
};

export default RecipeDetailPage;
