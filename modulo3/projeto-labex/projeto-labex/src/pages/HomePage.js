import React from "react";
import { useNavigate } from "react-router-dom";
import { goToTripsList, loginAdmin } from "./Routes/Coordinator";
import styled from "styled-components";

const Layout = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
    <h3>LabeX</h3>
    <Layout>
      <button onClick={() => goToTripsList(navigate)}>Ver Viagens</button>
      <button onClick={() => loginAdmin(navigate)}>
        Área do Administrador
      </button>
    </Layout>
    </div>

  );
};
