import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerLista = styled.div`
border: 1px solid black;
  width: 400px;
  height: 600px;
  align-content: center;
  margin: auto 0; 
  background-color: white;
  border-radius: 10px;
`

const ListaMatches = styled.div `
display: flex;
flex-direction: row;

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;

}
`

export default function Matches(props) {
    const [match, setMatch] = useState([]);

    const ListaMatch = () => {
        axios.get(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aline-freire/matches")
          .then((response) => {
            setMatch(response.data.matches);
          })
          .catch((err) => {
            console.log(err);
          });
      };


useEffect(() => {
    ListaMatch();
  }, []);

return (
    <ContainerLista>
        <p>Astromatch</p>
        <button onClick={()=>props.setTelas("inicio")}>Inicio</button>
        <button onClick={props.LimpaLista}>Limpar Matches</button>
     {match.map((match)=>{ 
    return (
      <ListaMatches key={match.id}>
        <img src={match.photo} alt = ""/>
        <p>{match.name}</p>
        </ListaMatches>
    )
     })}
    </ContainerLista>)
}    
