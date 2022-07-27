import React from "react";
import logo from "../assets/logo.png";
import SignUpForm from "../hooks/SignUpForm";
import { LogoImage, ScreenContainer } from "./styledLogin";

const SignUpPage = () => {
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <SignUpForm />
    </ScreenContainer>
  );
};

export default SignUpPage;
