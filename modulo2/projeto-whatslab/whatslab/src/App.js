import React from 'react';
import './App.css';

export default App;

//     state = {
//     mensagem: [
//     {valorInputNome:"",
//     valorInputMensagem:"",
//     }
//   ] 
// }

// adicionaMensagem = () => {

//   const novaMensagem = {

//     nome: this.state.valorInputNome,

//     mensagem: this.state.valorInputMensagem,

//   };

// };

// onChangeInputNomeUsuario = (event) => {

//   this.setState({ valorInputNome: event.target.value });
// };

// onChangeInputMensagem = (event) => {

//   this.setState({ valorInputMensagem: event.target.value });
// };


// render(){

//   return ( 
//     <div>
//         <input
//           value={this.state.valorInputUsuario}
//           onChange={this.onChangeInputUsuario}
//           placeholder={"Usuário"}
//         />

//         <input
//           value={this.state.valorInputMensagem}
//           onChange={this.onChangeInputMensagem}
//           placeholder={"Mensagem"}
//         />
//         <button onClick={this.adicionaMensagem}>Enviar</button>
//         </div>
//         )
// }


<form>
  <label>
    <input type="text" name="nome" />
  </label>
  <label>
    <input type="text" value="mensagem" />
    <button>enviar</button>
  </label>
</form>



