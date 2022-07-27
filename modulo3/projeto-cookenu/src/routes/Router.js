import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddRecipePage from "../pages/AddRecipePage";
import LoginPage from "../pages/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage";
import RecipesListPage from "../pages/RecipesListPage";
import SignUpPage from "../pages/SignUpPage";
import ErrorPage from "../pages/ErrorPage";
import Header from "../components/Header/Header";


const Router = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/receitas/lista" element={<RecipesListPage />} />
        <Route path="/detalhes/:id" element={<RecipeDetailPage />} />
        <Route path="/adicionar-receita" element={<AddRecipePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
