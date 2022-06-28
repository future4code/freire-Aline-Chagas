import React from "react";
import styled from "styled-components";
import CreatePlaylist from "./Components/CreatePlaylist";
import GetAllPlaylists from "./Components/GetAllPlaylists"
import AddTrackToPlaylist from "./Components/AddTrackToPlaylist";

const Main = styled.div`
justify-content: center;
width: 100%;
height: 100%;
`
export default class App extends React.Component {
  state={
    pagina: "inicio",
  }

  PaginaInicio = () => {
    this.setState({pagina: "inicio"})
  }

  TrocaPagina= () =>{
    this.setState({pagina: "pesquisa Playlist"})
  }

  AdicionaMusica = () => {
    this.setState({pagina: "adicionar música"})
  }

render() {
  
  const ListaPagina =() =>{
    switch (this.state.pagina){
      case "inicio": 
      return (<CreatePlaylist/>)
      case "pesquisa Playlist":
      return (<GetAllPlaylists/>)
      case "adicionar música":
      return (<AddTrackToPlaylist/>)
      default:(<p>Page Not Found</p>)
    }
  }

  return (<Main>
    {this.state.pagina !== "inicio" &&
    <button onClick={this.PaginaInicio}>Página Inicial</button>}
    
    <ListaPagina/>

    {this.state.pagina !== "pesquisa Playlist" &&
  <button onClick={this.TrocaPagina}>Pesquisar Playlist</button>}

    {this.state.pagina !== "adicionar música" &&
  <button onClick={this.AdicionaMusica}> Adicionar Música</button>}

  </Main>)
}
}
