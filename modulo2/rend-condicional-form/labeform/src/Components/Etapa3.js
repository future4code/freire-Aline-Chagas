import React from "react";


export default class Etapa3 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 3 - DADOS GERAIS</h3>
        <form>
            <li> 5 - Por qual motivo não concluiu o Ensino Superior?</li>
          <input></input>
            <li> 6 - Você fez algum curso complementar?</li>
            <select name="">
                <option value="curso tec">Curso Técnico</option>
                <option value="ingles">Curso de inglês</option>
                <option value="nenhum">Não fiz nenhum curso complementar</option>
                </select>
         
        </form>
      </div>
    );
  }
}