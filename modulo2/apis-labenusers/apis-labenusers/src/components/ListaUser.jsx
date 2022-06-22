import React from 'react';
import axios from 'axios';


export default class ListaUser extends React.Component {
  state = {
    listaUsuario: []
  }

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",

      {
        headers: {
          Authorization: "aline-chagas-freire"
        }
      }
    ).then((response) => {
      this.setState({ listaUsuario: response.data })
    });

  }
  deleteUsers = (id) => {
    if (window.confirm("Deseja deletar?")) {
      axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,

        {
          headers: {
            Authorization: "aline-chagas-freire"
          }
        }
      ).then((response) => {
        alert("Usuário Excluído")
        this.getAllUsers()
      });
    }
  }

  render() {
    const listaUser = this.state.listaUsuario.map(usuario => {
      return (<div key={usuario.id}>
        <p>{usuario.name}</p>
        <button onClick={() => this.deleteUsers(usuario.id)}>deletar</button>
      </div>)
    })
    return (
      <div>{listaUser}</div>
    )
  }
};
