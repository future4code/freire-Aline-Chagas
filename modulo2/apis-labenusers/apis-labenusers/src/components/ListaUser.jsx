import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Usuarios = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`
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
      return (<Usuarios key={usuario.id}>
        <p>{usuario.name}</p>
        <button onClick={() => this.deleteUsers(usuario.id)}>deletar</button>
        </Usuarios>)
    })
    return (
      <div>{listaUser}</div>
    )
  }
};
