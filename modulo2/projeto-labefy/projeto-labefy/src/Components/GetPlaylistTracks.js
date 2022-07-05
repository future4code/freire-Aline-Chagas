import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PlaylistTrack = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`
export default class GetAllPlaylists extends React.Component {
  state = {
    trackList: []
  }

  componentDidMount() {
    this.GetPlaylistTracks()
  }
  deleteTrack = (playlistId) => {
    if (window.confirm("Deseja deletar?")) {
      axios.delete(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks/:trackId",

        {
          headers: {
            Authorization: "aline-chagas-freire"
          }
        }
      ).then((response) => {
        alert("Música Excluída")
        this.GetPlaylistTracks()
      });
    }
  }

  GetPlaylistTracks= () => {
    const body= {
      result: {
          quantity: "number",
          tracks: [ 
              {
                  id: "", 
                  name: "", 
                  artist: "",
                  url: ""
              }
          ]
      }
  }
    axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks",
      body,
      {
        headers: {
          Authorization: "aline-chagas-freire"
        }
      }
    ).then((response) => {
      this.setState({ trackList: response.data.result.list})
    })
    .catch((error) =>{
      console.log(error.response);
      alert("música não encontrada")
    })

  }
  

  render() {
    const listaMusica = this.state.listaMusica.map(PlaylistId => {
      return (<PlaylistTrack key={playlist.id}>
        <p>{track.name}</p>
        <button onClick={() => this.deleteTrack(track.id)}>deletar</button>
        </PlaylistTrack>)
    })
    return (
      <div>{listaMusica}</div>
    )
  }
};