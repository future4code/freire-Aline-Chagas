import React, { useState, useEffect } from "react";
import Card from "./Components/Card";
import Matches from "./Components/Matches";
import './App.css';
import axios from "axios";

function App() {
  const [lista, setLista] = useState(true);
  const [telas, setTelas] = useState("inicio");

  const LimpaLista=()=>{
    axios
    .put(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aline-freire/clear")

    .then((response) => {
      setLista(response.data.lista)
    })
    .catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    LimpaLista();
  }, []);
  
  return (
    <div className="App">
    
    {telas !== "inicio" ? <Matches LimpaLista={LimpaLista} setTelas={setTelas}/> : <Card LimpaLista={LimpaLista} setTelas={setTelas}/>} 

    </div>
  );
}

export default App;
