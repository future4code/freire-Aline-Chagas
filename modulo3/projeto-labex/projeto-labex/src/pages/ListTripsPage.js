import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { voltaPagina } from "./Routes/Coordinator";
import { goToApplicationForm } from "./Routes/Coordinator";

export const ListTripsPage = () => {
  const navigate = useNavigate();
  const [viagens, setViagens] = useState([]);

  const listaViagem = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/aline/trips"
      )
      .then((response) => {
        setViagens(response.data.trips);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    listaViagem();
  }, []);

  return (
    <div>
      {viagens.map((viagem) => {
        return (
          <p key={viagem.id}>
            {viagem.name}
            {viagem.date} {viagem.durationInDays} {viagem.planet}
          </p>
        );
      })}

      <h1>ListTripsPage</h1>
      <button onClick={() => voltaPagina(navigate)}>Voltar</button>
      <button onClick={() => goToApplicationForm(navigate)}>
        Inscrever-se
      </button>
    </div>
  );
};
