import React from 'react';
import axios from 'axios';
import './App.css';

export default class App extends React.Component {
  state = {
    inputName: "",
    inputEmail: ""
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
        alert("foi")

      })
      .catch((error) => {
        console.log(error.message);

      });
  };

  componentDidMount = () => {
    this.createUser();
  };

  render() {
    return (
      <section>
        <button>Trocar de tela</button>
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
        <button onClick={this.createUser}>Cria Usuário</button>
      </section>
    );
  }
}
