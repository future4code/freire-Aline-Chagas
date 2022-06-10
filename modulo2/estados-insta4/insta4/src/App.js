import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {

  state = {
    postagem: [
      {
        nomeUsuario: 'Paulinha',
        fotoUsuario: 'https://picsum.photos/50/50?a=1',
        fotoPost: 'https://picsum.photos/200/150?a=2'
      },

      {
        nomeUsuario: 'Carla',
        fotoUsuario: 'https://picsum.photos/50/50?a=3',
        fotoPost: 'https://picsum.photos/200/150?a=4'
      },

      {
        nomeUsuario: 'Janaína',
        fotoUsuario: 'https://picsum.photos/50/50?a=5',
        fotoPost: 'https://picsum.photos/200/150?a=6'
      },

    ],
    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  adicionaPost = () => {

    const novaPost = {

      usuario: this.state.valorInputUsuario,

      fotoUsuario: this.state.valorInputFotoUsuario,

      fotoPost: this.state.valorInputFotoPost
    };

    const novoPostagem = [...this.state.postagem, novaPost];

    this.setState({ postagem: novoPostagem });
  };

  onChangeInputUsuario = (event) => {

    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {

    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {

    this.setState({ valorInputFotoPost: event.target.value });
  };


  render() {

    const oldPost = this.state.postagem.map((postagem) => {
      return (
        <Post key={postagem.nomeUsuario}
          nomeUsuario={postagem.nomeUsuario}
          fotoUsuario={postagem.fotoUsuario}
          fotoPost={postagem.fotoPost}
        />
      )

    })

    return (

      <MainContainer>
        <div>

          <input

            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />

          <input

            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Insira sua foto"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Insira a imagem que quer publicar"}
          />
          <button onClick={this.adicionaPost}>Postar</button>


        </div>

        <div>{oldPost}</div>

      </MainContainer>
    );
  }

}
export default App;
