import React from "react";
import logo from "../assets/logo.png";
import SignUpForm from "../hooks/SignUpForm";
import { LogoImage, ScreenContainer } from "./styledLogin";
import useUnprotectedPage from "../hooks/useUnptotectedPage"

const SignUpPage = ({setRightButtonText}) => {
    useUnprotectedPage()
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <SignUpForm setRightButtonText={setRightButtonText}/>
    </ScreenContainer>
  );
};

export default SignUpPage;
