
import GlobalProvider from './Context/CardContext';
import Card from './components/Cards'


function App() {


  return (
    <GlobalProvider >
      <Card/>
    </GlobalProvider>
  );
}

export default App;