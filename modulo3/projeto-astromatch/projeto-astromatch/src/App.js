import React, { useState } from "react";
import Card from "./Components/Card";
import Matches from "./Components/Matches";
import './App.css';


function App() {
  const [telas, setTelas] = useState(false);
  
  return (
    <div className="App">
    <button onClick={()=>setTelas(!telas)}>Matches</button>
    {telas ? <Matches/> : <Card/>} 
    </div>
  );
}

export default App;
// app.js