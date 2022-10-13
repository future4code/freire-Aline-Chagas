
import GlobalProvider from './Context/CardContext';
import { GlobalStyle } from './styles/GlobalStyled';
import Card from './components/Cards';
import { Header } from './components/Header';
import header from "./assets/banner2.png"


function App() {

  return (
    <GlobalProvider >
      <GlobalStyle/>
      <Header> 
        <img src={header}/>
      </Header>
      <Card/>
    </GlobalProvider>
  );
}

export default App;