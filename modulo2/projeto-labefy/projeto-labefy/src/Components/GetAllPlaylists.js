import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Playlist = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`
export default class Playlists extends React.Component {
  state = {
    listaPlaylist: []
  }

  componentDidMount() {
    this.GetAllPlaylists()
  }
  deletePlaylist = (playlistId) => {
    if (window.confirm("Deseja deletar?")) {
      axios.delete(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId",

        {
          headers: {
            Authorization: "aline-chagas-freire"
          }
        }
      ).then((response) => {
        alert("Playlist Excluída")
        this.GetAllPlaylists()
      });
    }
  }

  GetAllPlaylists= () => {
    axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",

      {
        headers: {
          Authorization: "aline-chagas-freire"
        }
      }
    ).then((response) => {
      this.setState({ listaPlaylist: response.data.result.list})
    })
    .catch((error) =>{
      console.log(error.response);
      alert("Playlist não encontrada")
    })

  }
  

  render() {
    const listaPlaylist = this.state.listaPlaylist.map(playlist => {
      return (<Playlist key={playlist.id}>
        <p>{playlist.name}</p>
        <button onClick={() => this.deletePlaylist(playlist.id)}>deletar</button>
        </Playlist>)
    })
    return (
      <div>{listaPlaylist}</div>
    )
  }
};