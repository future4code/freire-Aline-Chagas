import axios from "axios";
import { goToRecipesListPage } from "../routes/Coordinator";


export const login = (form, clear, navigate, setRightButtonText) => {
  axios
    .post(`https://cookenu-api.herokuapp.com/user/login`, form)
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

export const signUp = (form, clear, navigate, setRightButtonText) => {
  axios
    .post(`https://cookenu-api.herokuapp.com/user/signup`, form)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      alert("Cadastro realizado!")
      goToRecipesListPage(navigate);
      setRightButtonText("Logout");
    })
    .catch((err) => {
      alert("Opa! Algo deu errado...");
    })
  }