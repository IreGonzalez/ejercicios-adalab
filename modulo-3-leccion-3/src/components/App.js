
import '../styles/App.css';

//EJERCICIO 1 3.3.1**********************************************************

import { useState } from 'react';

function App() {
  //constante de estado para cada uno de ellos
  const [macarrones, setMacarrones] = useState();
  const [nueces, setNueces] = useState();
  const [patatas, setPatatas] = useState();
  const [huevos, setHuevos] = useState();
  const [cebolla, setCebolla] = useState();
  const [cerveza, setCerveza] = useState();
  //función manejadora del evento con un if ev.target es estrictamente igual que el id lo mete en el set de esos
  const handleIngredient = (ev) => {
    if (ev.target.id === 'macarrones') {
      setMacarrones(ev.target.checked);
    }
    else if (ev.target.id === 'nueces') {
      setNueces(ev.target.checked);
    }
    else if (ev.target.id === 'patatas') {
      setPatatas(ev.target.checked);
    }
    else if (ev.target.id === 'huevos') {
      setHuevos(ev.target.checked);
    }
    else if (ev.target.id === 'cebolla') {
      setCebolla(ev.target.checked);
    }
    else if (ev.target.id === 'cerveza') {
      setCerveza(ev.target.checked);
    }
  }
  //arrow que renderiza el mensaje 
  const renderMsgIng = () => {
    if (cebolla && huevos && patatas && !macarrones && !nueces && !cerveza) {
      return 'Eres una persona concebollista'
    }
    else {
      return 'Eres un robot sin paladar'
    }
  }


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
            <input type="checkbox" name="macarrones" id="macarrones" value="Macarrones" onChange={handleIngredient} />
          </label>
          <label htmlFor="nueces"> Nueces
            <input type="checkbox" name="nueces" id="nueces" value="Nueces" onChange={handleIngredient} /
            >
          </label>
          <label htmlFor="patatas">Patatas
            <input type="checkbox" name="patatas" id="patatas" value="Patatas" onChange={handleIngredient} />
          </label>
          <label htmlFor="huevos">Huevos
            <input type="checkbox" name="huevos" id="huevos" value="Huevos" onChange={handleIngredient} />
          </label>
          <label htmlFor="cebolla">Cebolla
            <input type="checkbox" name="cebolla" id="cebolla" value="Cebolla" onChange={handleIngredient} />
          </label>
          <label htmlFor="cerveza">Cerveza
            <input type="checkbox" name="cerveza" id="cerveza" value="Cerveza" onChange={handleIngredient} />
          </label>
          <input type="submit" value="Validar" />
        </form>
        <p>{renderMsgIng()}</p>
      </main>
    </div >
  );
};

export default App;

// //EJERCICIO 2 3.3.1**********************************************************

// import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <p></p>
//       <textarea name="tranlator" id="translator" cols="30" rows="10" />
//     </div>
//   );
// }

// export default App;