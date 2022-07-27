import React from "react";
import { InputsContainer, LoginFormContainer } from "../pages/styledLogin";
import { Button, TextField } from "@material-ui/core";
import useForm from "../hooks/useForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToRecipesListPage } from "../routes/Coordinator";

const LoginForm = () => {
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    axios
      .post(`https://cookenu-api.herokuapp.com/user/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToRecipesListPage(navigate);
        clear();
      })

      .catch((err) => alert("Erro no Login"));
  };

  return (
    <LoginFormContainer>
      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"E-mail"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />

          <Button
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
          >
            Fazer Login
          </Button>
        </form>
      </InputsContainer>
    </LoginFormContainer>
  );
};

export default LoginForm;
