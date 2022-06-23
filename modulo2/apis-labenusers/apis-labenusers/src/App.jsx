import React from 'react';
import axios from 'axios';
import ListaUser from './components/ListaUser';
import styled from 'styled-components';

const Cadastro = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 600px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    justify-items: center;

`
export default class App extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
    trocarPagina: true
  }
  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "aline-chagas-freire"
        }
      }
    );

    request
      .then((response) => {
        console.log(response.data);
        alert("Usuário cadastrado com sucesso!")
        this.setState({inputName:"", inputEmail:""})

      })
      .catch((error) => {
        console.log(error.message);
        alert("Usuário não foi cadastrado")

      });
     
  };
  botaoTrocar = () => {
    this.setState({ trocarPagina: !this.state.trocarPagina })
  }
  Renderizar = () => {
     
      return (<Cadastro>
        <label>Novo Usuário </label>
        <input
          value={this.state.inputName}
          onChange={this.onChangeInputName}
          placeholder="nome do usuário"
        />
        <input
          value={this.state.inputEmail}
          onChange={this.onChangeInputEmail}
          placeholder="e-mail"
        />
        <button onClick={this.createUser}>Cria Usuário</button></Cadastro>)
    } 
  
  render() {
    
    return (
      <section>
        <button onClick={this.botaoTrocar}>Trocar de tela</button>
        {this.state.trocarPagina===true ? this.Renderizar():<ListaUser />}
    
      </section>
    );
  }
}
