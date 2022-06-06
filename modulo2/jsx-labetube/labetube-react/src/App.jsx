
import './App.css';
import logo from './img/youtube-free-icon-font.png'
import lupa from './img/lupa.png'
import perfil from './img/perfil2.png'
import alinhar from './img/alinhar-justificar.png'
import home from './img/home.png'
import configuracoes from './img/configuracoes.png'
import original from './img/original.png'
import estrela from './img/estrela.png'
import inscrever from './img/inscricao.png'
import historico from './img/historico.png'

function App() {
  const titulo = "{titulo}"
  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }
  return (
    <div>
          <div className="tela-inteira">
        <header>
          <div className='logo'>

            <img className="menu-logo" src={alinhar}/>
            <img src={logo}/>

            <h1>LabeTube</h1>
            </div>

            <div className='lupa'>
            <input type="text" placeholder="Busca" id="campoDeBusca"/>
            <img src={lupa}/>
            
            </div>

            <div className='perfil'>
            <img src= {perfil}/>
            <img src={configuracoes}/>
            
            </div>
            
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical"><img src={home}/> Início</li>
                    <li className="botoes-meunu-vertical"><img src={estrela}/>Em alta</li>
                    <li className="botoes-meunu-vertical"><img src={inscrever}/>Inscrições</li>
                    <li className="botoes-meunu-vertical"><img src={original}/>Originais</li>
                    <li className="botoes-meunu-vertical"><img src={historico}/>Histórico</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
              <div className="box-pagina-principal media1" onClick= {reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
              <div className="box-pagina-principal media2" onClick= {reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
              <div className="box-pagina-principal media3" onClick= {reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
              <div className="box-pagina-principal media4" onClick= {reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
              <div className="box-pagina-principal media5" onClick= {reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
              <div className="box-pagina-principal media6" onClick= {reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
              <div className="box-pagina-principal media7" onClick= {reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
              <div className="box-pagina-principal media8" onClick= {reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            
        </footer>
    </div>
    </div>
  )

}
     

export default App;
