import React from "react";
import { InputsContainer, LoginFormContainer } from "../pages/styledLogin";
import { Button, TextField } from "@material-ui/core";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { login } from "../services/user";
import { useState } from "react";
import { CircularProgress } from "@mui/material";

const LoginForm = ({ setRightButtonText }) => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, navigate, setRightButtonText, setIsLoading);
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
            {isLoading ? (
              <CircularProgress color={"inherit"} size={24} />
            ) : (
              <>Fazer Login</>
            )}
          </Button>
        </form>
      </InputsContainer>
    </LoginFormContainer>
  );
};

export default LoginForm;
