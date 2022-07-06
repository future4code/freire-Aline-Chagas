import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const ListaMatches = styled.div `
display: flex;
flex-direction: row;
img {
  width: 15px;
}
`

export default function Matches() {
    const [match, setMatch] = useState([]);

    const ListaMatch = () => {
        axios.get(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aline-chagas-freire/matches")
          .then((response) => {
            setMatch(response.data.matches);
          })
          .catch((err) => {
            console.log(err);
          });
      };

console.log(match);

useEffect(() => {
    ListaMatch();
  }, []);

return (
    <div>
     {match.map((match)=>{ 
    return (
      <ListaMatches>
        <img src={match.photo} alt = ""/>
        <p>{match.name}</p>
        </ListaMatches>
    )
     })}
    </div>)
}    
// componente matches