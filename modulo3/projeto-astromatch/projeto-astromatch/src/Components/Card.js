import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import like from "../img/like.png";
import unlike from "../img/unlike.png";
import match from "../img/match.png"

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
    height: 300px;
    border-radius: 5px;
    overflow: hidden;
  }

  #imagem::after{
    content: "";
    width: 80%;
    height: 80%;
    position: absolute;
    background: url(${props => props.imagem});
    background-size: cover;
    filter: blur(30px);
    z-index: 2;
  }


  #imagem::before{
    content: "";
    width: 80%;
    height: 80%;
    position: absolute;
    right: 1px;
    background: linear-gradient(0deg,rgb(0 0 0) 10%,rgba(0,0,0,0) 73%);
    background-size: cover;
    filter: blur(30px);
    z-index: 6;
  }

  #perfil{
    width: 70%;
    z-index: 5;
  }

  p{
    font-size: 25px;
    text-shadow:  0.1em 0.1em 0.2em black;
    float: left;
  }

  h2 {
    text-align: start;
    font-size: large;
    text-shadow:  0.1em 0.1em 0.2em black;
  }

  h1{
    text-align: left;
    text-shadow:  0.1em 0.1em 0.2em black;
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
  .matchbutton{
    display: flex;
    width: 45px;
    height: 45px;
    align-content: flex-end;
    justify-content: end;
    align-content: space-between;
    float: right;
  }
.topApp{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
        <div className="topApp">
        <p>Astromatch</p> <button onClick={()=>props.setTelas("teste")}>
        <img className="matchbutton" src={match} /></button>
        </div>
      
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
