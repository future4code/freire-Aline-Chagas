import React from "react";
import axios from "axios";
import styled from "styled-components";

const AddTrack = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;

export default class AddTrackToPlaylist extends React.Component {
  state = {
    InputSong: "",
    InputArtist: "",
    InputUrl: "",
    page:"playlist"
  };

  onChangeInputSong = (event) => {
    this.setState({ InputSong: event.target.value });
  };
  onChangeInputArtist = (event) => {
    this.setState({ InputArtist: event.target.value });
  };
  onChangeInputUrl = (event) => {
    this.setState({ InputUrl: event.target.value });
  };


  AddTrack = (listId) => {
    //recebe id da playlist
    //troca a page para Vazio 
    this.setState({page:""})
    const body = {
      name: this.state.InputSong,
      artist: this.state.InputArtist,
      url: this.state.InputUrl
    };

    const request = axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${listId}/tracks`,
      body,
      {
        headers: {
          Authorization: "aline-chagas-freire",
        },
      }
    );

    request.then((response) => {
        console.log(response.data);
        alert("Música adicionada com sucesso!");
        this.setState({ InputSong: "" })
        this.setState({ InputArtist: "" })
        this.setState({ InputUrl: "" });
      }).catch((error) => {
        console.log(error.response);
        alert("Música não pode ser adicionada");
      });
  };



  Renderizar = (listId) => {
    //recebe o id da playlist
    return (
      <section>
      <AddTrack>
        <label>Adicionar Música</label>
        <input
          value={this.state.InputSong}
          onChange={this.onChangeInputSong}
          placeholder="Insira o nome da música"
        />
        <input
          value={this.state.InputArtist}
          onChange={this.onChangeInputArtist}
          placeholder="Insira o nome do/a artista"
        />
        <input
          value={this.state.InputUrl}
          onChange={this.onChangeInputUrl}
          placeholder="Insira a URL da música"
        />
    {/* chama a função para adicionar a track carregando o id da playlist */}
        <button onClick={()=>this.AddTrack(listId)}>Adicionar Música</button>
      </AddTrack>
      </section>
            
    );
  };
 

  trocarSection = (listId)=>{
    //Adicionei só pra adicionar a section e chamar a Renderizar
      this.setState({page:""})

  }
  render() {
    //se estivermos na pagina "playlist"
    if(this.state.page ==="playlist"){
      //O botão é apresentado, se não, a section é apresentada 
     return( 
       
      <button onClick={
       ()=>this.trocarSection()}> Add track</button> 
    )
    }else{
    return <section>{this.Renderizar(this.props.listId)}</section>;
    }
  }
}

