import React from 'react';
import axios from 'axios';


export default class ListaUser extends React.Component {
    state={

    }

    const request = axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "aline-chagas-freire"
          }
        }
      );
  
      request
        .then((response) => {
          {this.response.data};
          alert("Usuário cadastrado com sucesso")
  
        })
        .catch((error) => {
          console.log(error.message);
  
        });
    };
  
    componentDidMount = () => {
      this.createUser();
    };
