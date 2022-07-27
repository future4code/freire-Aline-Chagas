import React from "react";
import { InputsContainer } from "../pages/styledLogin";

import { Button, TextField } from "@material-ui/core";
import useForm from "../hooks/useForm";

const SignUpForm = () => {
  const [form, onChange] = useForm({ name: "", email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm} />
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

      <Button type={"submit"} fullWidth variant={"contained"} color={"primary"}>
        Cadastrar
      </Button>
    </InputsContainer>
  );
};

export default SignUpForm;
