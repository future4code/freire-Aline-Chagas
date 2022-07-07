import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import like from "../img/like.png";
import unlike from "../img/unlike.png";

const Estilizacao = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 600px;
  align-content: center;
  margin: auto 0;
  background-color: white;
  border-radius: 10px;

 #imagem{
  display: flex;
  justify-content: center;
  align-items: center;
    width: 400px;
    height: 360px;
    border-radius: 5px;
    overflow: hidden;
  }

  #imagem::after{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: url(${props => props.imagem});
    background-size: cover;
    filter: blur(30px);
    z-index: 2;
  }


  #imagem::before{
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    right: 1px;
    background: linear-gradient(0deg,rgb(0 0 0) 10%,rgba(0,0,0,0) 73%);
    background-size: cover;
    filter: blur(30px);
    z-index: 6;
  }

  #perfil{
    width: 100%;
    z-index: 5;
  }

  p{
    font-size: 25px;
  }

  h2 {
    text-align: start;
    font-size: large;
  }

  h1{
    text-align: left;
  }

  button {
    border-radius: 50%;
    border: none;
    background: none;
    
  }

  .botoes {
    width: 80px;
    height: 80px;
    cursor: pointer;
  }

  #estilizacaoPerfil {
    position: relative;
    overflow: hidden;
    width: 95%;
    margin: 0 auto;
    border-radius: 30px;
    box-shadow: 0px 0px 7px 1px #000000;
  }

  #bioPerfil{
    position: absolute;
    left: 10px;
    bottom: 25px;
    color: white;
    width: fit-content;
    z-index: 50;

  }

  #botaoMatch{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 130px;
  }
`;

export default function Card(props) {
  const [perfil, setPerfil] = useState({});
  const [escolherPerfil, setEscolherPerfil] = useState();
  const [telas, setTelas] = useState(false);

  const PerfilExibido = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aline-freire/person"
      )
      .then((response) => {
        // if(response.data.profile === null){
        //   return ({MostraPerfil})
        // }
        setPerfil(response.data.profile || {end: true});
      })

      .catch((err) => {
        console.log(err);
      });
  };
  const EscolhePerfil = () => {
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aline-freire/choose-person",
        {
          id: perfil.id,
          choice: escolherPerfil,
        }
      )

      .then((response) => {
        PerfilExibido();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const Like = () => {
    EscolhePerfil();
    setEscolherPerfil(true);
  };

  const Dislike = () => {
    EscolhePerfil();
    setEscolherPerfil(false);
  };

  const MostraPerfil = () => {
    return (
      <Estilizacao imagem={perfil.photo}>
        <p>Astromatch</p>
        <button onClick={()=>props.setTelas("teste")}>Matches</button>
        <button onClick={props.LimpaLista}>Limpar Matches</button>

        <div id="estilizacaoPerfil">

          <div id="imagem">

          <img id="perfil" src={perfil.photo} alt={perfil.name} />
          </div>

          <div id="bioPerfil">
            <h1>
              {perfil.name}, {perfil.age}
            </h1>
            <h2>{perfil.bio}</h2>
          </div>
        </div>

        <div id="botaoMatch">
        <button onClick={Dislike}>
          <img className="botoes" src={unlike} />
        </button>
        <button onClick={Like}>
          <img className="botoes" src={like} />
        </button>
        </div>

      </Estilizacao>)
  };

  useEffect(() => {
    PerfilExibido();
  }, []);

  return <MostraPerfil />
}
