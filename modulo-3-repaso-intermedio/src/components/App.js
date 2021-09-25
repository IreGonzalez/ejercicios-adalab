import '../styles/App.scss';
import contactData from '../data/contact.json'
// Importamos el servicio del local storage
import ls from '../services/local-Storage';
// importamos useEffect además de useState
import { useEffect, useState } from 'react';
import callToApi from '../services/api'; // Importamos el servicio que acabamos de crear

function App() {// Estados

  const [starWarsData, setStarWarsData] = useState({});

  // Llamar al api con useEffect

  useEffect(() => {
    // Dentro de useEffect llamamos al API
    callToApi().then(response => {
      // Cuando el API responde guardamos los datos en el estado para que se re-renderice el componente
      setStarWarsData(response);
    });
    // Aquí ponemos un array vacío porque queremos que se llame al API solo la primera vez
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
