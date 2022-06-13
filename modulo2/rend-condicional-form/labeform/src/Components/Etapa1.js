import React from "react";


export default class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <form>

          <li> 1 - Qual o seu nome?</li>
          <input></input>

          <li> 2 - Qual a sua idade?</li>
          <input></input>

          <li> 3 - Qual o seu e-mail?</li>
          <input></input>

          <li> 4 - Qual o seu grau de escolaridade?</li>
          <select name="">
            <option value="EM inc">Ensino Médio Incompleto</option>
            <option value="EM com">Ensino Médio Completo</option>
            <option value="Sup Inc">Superior Incompleto</option>
            <option value="Sup Com">Superior Completo</option>
          </select>

        </form>
      </div>
    );
  }
}
