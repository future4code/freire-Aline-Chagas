import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import iconeSalvarBranco from '../../img/salvar-white.png'
import iconeSalvarPreto from '../../img/salvar-black.png'
import iconeCompartilhar from '../../img/enviar.png'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    salvar: false,
    compartilhar: false,

  }

  onClickCurtida = () => {
    
    if (this.state.curtido!== false){
      this.setState({curtido:false,numeroCurtidas:0})
      console.log('Descurtiu!')
    }else{
      this.setState({curtido:true,numeroCurtidas:1})
    }
    
  }

  onClickSalvar = () => {
    
    if (this.state.salvar!== false){
      this.setState({salvar:false})
  
    }else{
      this.setState({salvar:true})
    }
    
  }

  // onClickCompartilhar = () => {
    
  //   if (this.state.compartilhar!== false){
  //     this.setState({compartilhar:false})
  
  //   }else if{
  //     this.setState({compartilhar:true})
  //   }else{
    
  //   }
    
  // }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeSalvar

    if(this.state.salvar) {
      iconeSalvar = iconeSalvarPreto
    } else {
      iconeSalvar = iconeSalvarBranco
    }

    // let iconeCompartilhar

    // if(this.state.compartilhar) {
    //   iconeSalvar = iconeSalvarPreto
    // } else {
    //   iconeSalvar = iconeSalvarBranco
    // }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

         <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar} 
        />
          <iconeCompartilhar
          icone={iconeSalvar}
          onClickIcone={this.onClickSalvar} 
        />

      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post