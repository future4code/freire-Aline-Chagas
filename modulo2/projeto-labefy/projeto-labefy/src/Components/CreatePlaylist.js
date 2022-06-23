import React from "react";
import axios from "axios";
import styled from "styled-components";
import GetAllPlaylists from "./GetAllPlaylists";

const Playlist = styled.div`
border: 5px solid black;
align-items: center;
display: flex;
justify-content: center;
`

export default class CreatePlaylist extends React.Component {
    state={
        inputPlaylist: ""
    }


onChangeInputPlaylist = (event) => {
    this.setState({ inputPlaylist: event.target.value });
  };
  CreatePlaylist = () => {
    const body = {
      name: this.state.inputPlaylist,
      
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
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
        alert("Playlist criada com sucesso!")
        this.setState({inputPlaylist:""})

      })
      .catch((error) => {
        console.log(error.response);
        alert("Playlist não foi criada")

      })
      }

      Renderizar = () => {
         
          return (
            <Playlist>
            <label>Nova Playlist</label>
            <input
              value={this.state.inputPlaylist}
              onChange={this.onChangeInputPlaylist}
              placeholder="Insira o nome da Playlist"
            />
            <button onClick={this.CreatePlaylist}>Cria Playlist</button>
            <button onClick={GetAllPlaylists}>Pesquisar Playlist</button>
            </Playlist>
        )} 
      
      render() {
        
        return (
          <section>
           {this.Renderizar()}
          </section>
        );
      }
    }
