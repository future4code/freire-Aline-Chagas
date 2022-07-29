import axios from "axios";
import { goToRecipesListPage } from "../routes/Coordinator";

export const login = (body, clear, navigate, setRightButtonText) => {
  axios
    .post(`https://cookenu-api.herokuapp.com/user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();

      goToRecipesListPage(navigate);
      setRightButtonText("Logout");
      alert("Bem-Vindx!");
    })
    .catch((err) => {
      console.log("Login não realizado :( ");
    });
};

export const signUp = (body, clear, navigate, setRightButtonText) => {
  axios
    .post(`https://cookenu-api.herokuapp.com//user/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      alert("Cadastro realizado! Faça seu login!")
      goToRecipesListPage(navigate);
      setRightButtonText("Logout");
    })
    .catch((err) => {
      alert("Opa! Algo deu errado...");
    })
  }