import React from "react";
import { InputsContainer } from "../pages/styledLogin";
import { Button, TextField } from "@material-ui/core";
import useForm from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/user";

const SignUpForm = ({ setRightButtonText }) => {
  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, navigate, setRightButtonText);
  };

  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"name"}
          value={form.name}
          onChange={onChange}
          label={"Nome"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          autoFocus
        />
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
          color={"primary"}
          variant={"contained"}
          type={"submit"}
          fullWidth
        >
          Fazer Cadastro
        </Button>
      </form>
    </InputsContainer>
  );
};

export default SignUpForm;
