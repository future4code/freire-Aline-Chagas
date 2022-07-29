import React from "react";
import { Routes, Route } from "react-router-dom";
import AddRecipePage from "../pages/AddRecipePage";
import LoginPage from "../pages/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage";
import RecipesListPage from "../pages/RecipesListPage";
import SignUpPage from "../pages/SignUpPage";
import ErrorPage from "../pages/ErrorPage";

const Router = ({ setRightButtonText }) => {
  return (
    <Routes>
      <Route
        index
        element={<LoginPage setRightButtonText={setRightButtonText} />}
      />
      <Route
        path="/cadastro"
        element={<SignUpPage setRightButtonText={setRightButtonText} />}
      />
      <Route path="/receitas/lista" element={<RecipesListPage />} />
      <Route path="/detalhes/:id" element={<RecipeDetailPage />} />
      <Route path="/adicionar-receita" element={<AddRecipePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
