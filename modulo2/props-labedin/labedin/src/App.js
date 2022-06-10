import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from '/home/caio/freire-Aline-Chagas/modulo2/props-labedin/labedin/src/img/foto.jpg'
import email from './components/CardPequeno/img/envelope.png';
import endereco from './components/CardPequeno/img/marcador.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {foto}
          nome="Aline Gonçalves Fontes Chagas" 
          descricao="Oi, eu sou a Aline. Sou estudante da Labenu."
        />
        
        <ImagemButton 
          imagem="https://www.flaticon.com/svg/vstatic/svg/3916/3916864.svg?token=exp=1654628104~hmac=74d23b63d6f3315b76ebbc87738c86f8" 
          texto="Ver mais"
        />
    
       <CardPequeno
       imagem={email} 
       nome="E-mail" 
       texto="alinegfchagas@hotmail.com"
      />

      <CardPequeno
       imagem={endereco}
       nome="Endereço" 
       texto="rua Labenu, 123"
       /> 
       </div>
    

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
