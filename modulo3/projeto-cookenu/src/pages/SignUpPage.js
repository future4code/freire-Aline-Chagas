import React from "react";
import logo from "../assets/logo.png";
import SignUpForm from "../hooks/SignUpForm";
import { LogoImage, ScreenContainer } from "./styledLogin";
import useUnprotectedPage from "../hooks/useUnptotectedPage"

const SignUpPage = () => {
    useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <SignUpForm />
    </ScreenContainer>
  );
};

export default SignUpPage;
