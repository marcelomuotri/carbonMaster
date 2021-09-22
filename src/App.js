

import Navbar from './components/navbar/Navbar';
import Portada from './components/portada/Portada';
import QuienesSomos from './components/quienesSomos/QuienesSomos';
import './scss/estilos.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Portada />
        <QuienesSomos />
      </header>
    </div>
  );
}

export default App;
