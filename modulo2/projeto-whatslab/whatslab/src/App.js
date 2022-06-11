import React from 'react';
import './App.css';
import Enviar from './img/aviao-de-papel.png'

class App extends React.Component {

  state = {
    mensagem: [],
    valorInputNome: "",
    valorInputMensagem: ""
  }

  adicionaMensagem = () => {
    const novaMensagem = {
      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputMensagem,
    };

    if (!novaMensagem.mensagem) return;

    const novoMensagem = [...this.state.mensagem, novaMensagem];
    this.setState({ mensagem: novoMensagem });
    this.setState({ valorInputMensagem: '' });
  };


  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };


  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  sendOnEnter = (event) => {
    if (event.key === 'Enter') {
      this.adicionaMensagem()
    }
  };


  render() {
    const mensagemEnviada = this.state.mensagem.map((mensagem) => {
      return (
        <div className='balaoMsg'>
          <strong>{mensagem.nome}:</strong>  {mensagem.mensagem}
        </div>
      )
    })
    return (
      <div className='Div-Main'>
        <div className='Mensagem-enviada'>
          {mensagemEnviada}
        </div>


        <div className='Container-mensagem'>
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Usuário"}
          />

          <input
            value={this.state.valorInputMensagem}
            onChange={this.onChangeInputMensagem}
            onKeyDown={this.sendOnEnter}
            placeholder={"Mensagem"}
          />
          <button onClick={this.adicionaMensagem}><img src={Enviar} alt='Enviar' /></button>
        </div>
      </div>

    )
  }
}


/* <form>
  <label>
    <input type="text" name="nome" />
  </label>
  <label>
    <input type="text" value="mensagem" />
    <button>enviar</button>
  </label>
</form> */

export default App;

