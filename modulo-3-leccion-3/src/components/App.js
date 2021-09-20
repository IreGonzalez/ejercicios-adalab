
import '../styles/App.css';

//EJERCICIO 3.3.1**********************************************************

import { useState } from 'react';

function App() {

  // const [ingredient, setIngredient] = useState('');
  // const handleList = (ev) => {
  //   if () {
  //     text = 'Eres una persona concebollista';
  //   }
  //   else {
  //     text = 'Eres un robot sin paladar';
  //   }

  // }

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }
  return (
    <div className="App">
      <header>
        <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="macarrones">Macarrones
            <input type="checkbox" name="macarrones" id="macarrones" value="Macarrones" />
          </label>
          <label htmlFor="nueces"> Nueces
            <input type="checkbox" name="nueces" id="nueces" value="Nueces" /
            ></label>
          <label htmlFor="patatas">Patatas
            <input type="checkbox" name="patatas" id="patatas" value="Patatas" />
          </label>
          <label htmlFor="huevos">Huevos
            <input type="checkbox" name="huevos" id="huevos" value="Huevos" />
          </label>
          <label htmlFor="cebolla">Cebolla
            <input type="checkbox" name="cebolla" id="cebolla" value="Cebolla" />
          </label>
          <label htmlFor="cerveza">Cerveza
            <input type="checkbox" name="cerveza" id="cerveza" value="Cerveza" />
          </label>
          <input type="submit" value="Validar" />
        </form>
        {/* <p>{text}</p> */}
      </main>
    </div >
  );
}

export default App;
