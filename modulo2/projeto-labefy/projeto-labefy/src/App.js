import React from "react";
import CreatePlaylist from "./Components/CreatePlaylist";
import GetAllPlaylists from "./Components/GetAllPlaylists"
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

render() {
  
  const ListaPagina =() =>{
    switch (this.state.pagina){
      case "inicio": 
      return (<CreatePlaylist/>)
      case "pesquisa Playlist":
        return (<GetAllPlaylists/>)
      default:(<p>Page Not Found</p>)
    }
  }

  return (<div>
    {this.state.pagina !== "inicio" &&
    <button onClick={this.PaginaInicio}>Página Inicial</button>}
    <ListaPagina/>
    {this.state.pagina !== "pesquisa Playlist" &&
  <button onClick={this.TrocaPagina}>Pesquisar Playlist</button>}
  </div>)
}
}
