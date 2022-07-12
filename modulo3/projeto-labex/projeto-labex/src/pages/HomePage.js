import React from "react";
import { useNavigate } from "react-router-dom";
import { goToTripsList, LoginAdmin } from "./Routes/Coordinator";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Home</h3>
      <button onClick={() => goToTripsList(navigate)}>Ver Viagens</button>
      <button onClick={() => LoginAdmin(navigate)}>
        Área do Administrador
      </button>
    </div>
  );
};
