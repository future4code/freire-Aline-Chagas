import { useNavigate } from "react-router-dom";
import { voltaPagina } from "./Routes/Coordinator";
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Layout = styled.div`
align-items: center;
display: flex;
flex-direction: column;

  input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 25px;
  }

  h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;



export const ApplicationFormPage = () => {
  const navigate = useNavigate();
  const [inscrever, setInscrever] = useState([]);

  const inscreverViagem = () => {
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/aline/trips/${trip.id}/apply`
      )
      .then((response) => {
        alert("Inscrição realizada com sucesso!")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    inscreverViagem();
  }, []);

  return (
    <Layout>
      <h1>Quero me inscrever!</h1>
      <input 
      placeholder="Selecione a viagem" 
      value={event.target.value}/>
      <input 
      placeholder="Nome"
      value={event.target.value} />
      <input 
      placeholder="Idade" />
      <input 
      placeholder="Porque devemos te escolher?" />
      <input 
      placeholder="Profissão" />
      <input 
      placeholder="Escolha um País" />
      <button onClick={() => voltaPagina(navigate)}>Voltar</button>
      <button onClick={() => inscreverViagem()}>Inscrever</button>
    </Layout>
  );
};
