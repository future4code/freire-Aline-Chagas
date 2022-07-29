import React from "react";
import { InputsContainer } from "../pages/styledLogin";
import { Button, TextField } from "@material-ui/core";
import useForm from "../hooks/useForm";
import axios from "axios";

const AddRecipeForm = () => {
  const [form, onChange, clear] = useForm({
    title: "",
    description: "",
    image: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();

    const createRecipe = (form, clear) => {
      axios
        .post(`https://cookenu-api.herokuapp.com/recipe`, form, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          alert(res.data.message);
          clear();
        })
        .catch((err) => {
          alert(err.response.message);
        });
    };

    createRecipe(form, clear);
  };

  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={"title"}
          value={form.title}
          onChange={onChange}
          label={"Título"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
          autoFocus
        />
        <TextField
          name={"description"}
          value={form.description}
          onChange={onChange}
          label={"Descrição"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
        />
        <TextField
          name={"image"}
          value={form.image}
          onChange={onChange}
          label={"Foto"}
          variant={"outlined"}
          fullWidth
          margin={"normal"}
          required
        />

        <Button
          color={"primary"}
          variant={"contained"}
          type={"submit"}
          fullWidth
        >
          Adicionar Receita
        </Button>
      </form>
    </InputsContainer>
  );
};

export default AddRecipeForm;
