

import Navbar from './components/navbar/Navbar';
import Portada from './components/portada/Portada';
import QuienesSomos from './components/quienesSomos/QuienesSomos';
import OurBikes from './components/our-bikes/Ourbikes';
import './scss/estilos.scss';
import Contacto from './components/contacto/Contacto';
import DataProvider from './components/context/DataProvider'



function App() {
  return (

    <div className="App">
      <DataProvider>
        <header className="App-header">
          <Navbar></Navbar>
          <Portada />
          <QuienesSomos />
          <OurBikes />
          <Contacto />
        </header>
      </DataProvider>
    </div>

  );
}

export default App;
