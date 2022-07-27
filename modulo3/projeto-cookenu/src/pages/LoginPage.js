import React from "react";
import {
  LogoImage,
  ScreenContainer,
   SignUpButtonContainer,
} from "./styledLogin";
import logo from "../assets/logo.png";
import { Button } from "@material-ui/core";
import LoginForm from "../hooks/LoginForm";
import {goToSignUpPage} from "../routes/Coordinator";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
const navigate = useNavigate()
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm/>
      <SignUpButtonContainer>
        <Button
        onClick={() => goToSignUpPage(navigate)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
        >
          Não possui conta? Cadastre-se!
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
