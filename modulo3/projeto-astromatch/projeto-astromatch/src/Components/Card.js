import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Estilizacao = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 600px;
  align-content: center;
  margin: auto 0;

  img {
    width: 100%;
    border-radius: 5px;
  }
  p {
    text-align: center;
  }
  button {
    justify-content: space-evenly;
  }
`;

export default function Card() {
  const [perfil, setPerfil] = useState({});
  const [escolherPerfil, setEscolherPerfil] = useState();

  const PerfilExibido = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aline-chagas-freire/person"
      )
      .then((response) => {
        setPerfil(response.data.profile);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  const EscolhePerfil = () => {
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aline-chagas-freire/choose-person",
        {
          id:perfil.id,
          choice: escolherPerfil,
        })

      .then((response) => {
      PerfilExibido()
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const Like = () =>{
    EscolhePerfil();
    setEscolherPerfil(true);
  }; 

  const Dislike= () =>{
    EscolhePerfil();
    setEscolherPerfil(false);
  }; 

  const MostraPerfil = () => {
    return (
      <Estilizacao>
        <p>Astromatch</p>
        <p>
          {perfil.name}, {perfil.age}
        </p>
        <img src={perfil.photo} alt={perfil.name} />
        <p>{perfil.bio}</p>
        <button onClick={Dislike}> x </button>
        <button onClick={Like}> ♥ </button>
      </Estilizacao>
    );
  };

  useEffect(() => {
    PerfilExibido();
  }, []);

  return <MostraPerfil />;
}
// cards perfis 
