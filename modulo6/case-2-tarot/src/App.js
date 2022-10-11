
import GlobalProvider from './Context/CardContext';
import './styles/globals.css';
import Card from './components/Cards'



function App() {

  return (
    <GlobalProvider >
      <Card/>
    </GlobalProvider>
  );
}

export default App;