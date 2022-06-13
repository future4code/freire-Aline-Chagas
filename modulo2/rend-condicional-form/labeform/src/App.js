import React from 'react';
import styled from 'styled-components';
import Etapa1 from './Components/Etapa1'
import Etapa2 from './Components/Etapa2'
import Etapa3 from './Components/Etapa3'
import Final from './Components/Final'

const Home = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0px auto;
  align-content: center;
  text-align: center;
`

export default class App extends React.Component {

  state = {
    etapa: 1,
  }
  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;


      case 2:
        return <Etapa2 />;


      case 3:
        return <Etapa3 />;


      case 4:
        return <Final />


      default:
        break;
    }
  }

  proximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }

  render() {
    return (

      <Home>

        {this.renderizaEtapa()}

        {this.state.etapa < 4 ? <button onClick={this.proximaEtapa}>Próxima Etapa</button> : ""}
        
      </Home>

    )
  }

}
