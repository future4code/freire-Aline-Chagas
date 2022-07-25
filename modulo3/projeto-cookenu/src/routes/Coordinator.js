export const goToSignUpPage = (navigate) => {
  navigate("/cadastro");
};

export const goToRecipesListPage = (navigate) => {
  navigate("/receitas/lista");
};

export const goToRecipeDetailPage = (navigate) => {
  navigate(`detalhe/:id`);
};

export const goToAddRecipePage = (navigate) => {
  navigate("/adicionar-receita");
};

export const goToLoginPage = (navigate) => {
  navigate("/");
};

export const goToLastPage = (navigate) => {
  navigate(-1);
};
