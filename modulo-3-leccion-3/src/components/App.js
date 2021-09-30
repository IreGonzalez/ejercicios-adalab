
import '../styles/App.css';

// // EJERCICIO 1 3.3.1 Y 3.3.2**************************************

// import { useState } from 'react';

// function App() {
//   //constante de estado para cada uno de ellos
//   const [macarrones, setMacarrones] = useState();
//   const [nueces, setNueces] = useState();
//   const [patatas, setPatatas] = useState();
//   const [huevos, setHuevos] = useState();
//   const [cebolla, setCebolla] = useState();
//   const [cerveza, setCerveza] = useState()
//   //función manejadora del evento con un if ev.target es estrictamente igual que el id lo mete en el set de esos

//   const handleIngredient = (ev) => {
//     if (ev.target.id === 'macarrones') {
//       setMacarrones(ev.target.checked);
//     }
//     else if (ev.target.id === 'nueces') {
//       setNueces(ev.target.checked);
//     }
//     else if (ev.target.id === 'patatas') {
//       setPatatas(ev.target.checked);
//     }
//     else if (ev.target.id === 'huevos') {
//       setHuevos(ev.target.checked);
//     }
//     else if (ev.target.id === 'cebolla') {
//       setCebolla(ev.target.checked);
//     }
//     else if (ev.target.id === 'cerveza') {
//       setCerveza(ev.target.checked);
//     }
//   };

//   //arrow que renderiza el mensaje 
//   const renderMsgIng = () => {
//     if (cebolla && huevos && patatas && !macarrones && !nueces && !cerveza) {
//       return 'Eres una persona concebollista'
//     }
//     else {
//       return 'Eres un robot sin paladar'
//     };
//   };


//   const handleSubmit = (ev) => {
//     ev.preventDefault();
//   };

//   //Funciones de los Botones
//   const handleSelectAll = () => {
//     handleSubmit();
//     setCerveza(true);
//     setHuevos(true);
//     setNueces(true);
//     setPatatas(true);
//     setCebolla(true);
//     setMacarrones(true);
//   };

//   const handleReset = () => {
//     handleSubmit();
//     setCerveza(false);
//     setHuevos(false);
//     setNueces(false);
//     setPatatas(false);
//     setCebolla(false);
//     setMacarrones(false);
//   };

//   return (
//     <div className="App">
//       <header>
//         <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
//       </header>
//       <main>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="macarrones">Macarrones
//             <input type="checkbox" name="macarrones" id="macarrones" value="Macarrones" onChange={handleIngredient} />
//           </label>
//           <label htmlFor="nueces"> Nueces
//             <input type="checkbox" name="nueces" id="nueces" value="Nueces" onChange={handleIngredient} /
//             >
//           </label>
//           <label htmlFor="patatas">Patatas
//             <input type="checkbox" name="patatas" id="patatas" value="Patatas" onChange={handleIngredient} />
//           </label>
//           <label htmlFor="huevos">Huevos
//             <input type="checkbox" name="huevos" id="huevos" value="Huevos" onChange={handleIngredient} />
//           </label>
//           <label htmlFor="cebolla">Cebolla
//             <input type="checkbox" name="cebolla" id="cebolla" value="Cebolla" onChange={handleIngredient} />
//           </label>
//           <label htmlFor="cerveza">Cerveza
//             <input type="checkbox" name="cerveza" id="cerveza" value="Cerveza" onChange={handleIngredient} />
//           </label>
//           <input type="submit" value="Validar" />
//           <button onclick={handleSelectAll}>Marcar todos</button>
//           <button onClick={handleReset}>Desmarcar todos</button>
//         </form>
//         <p>{renderMsgIng()}</p>
//       </main>
//     </div>
//   );
// };

//EJERCICIO 2 3.3.1**********************************************************

// import { useState } from 'react';

// function App() {
//   const [text, setText] = useState();
//   const renderText = () => {
//     [@@replace](a, e, o, u)
//   }
//   return (
//     <div className="App">
//       <p>{text}</p>
//       <textarea name="translator" id="translator" cols="30" rows="10" />
//     </div>
//   );
// }

//EJERCICIO 2 3.3.2**********************************************************

import { useState } from 'react';

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [operation, setOperation] = useState("");

  const handleNumberA = ev => {
    setNumberA(ev.target.value);
  };

  const handleNumberB = ev => {
    setNumberB(ev.target.value);
  };

  const operacion = "";
  const total = "";

  const totalOperated = () => {
    if (operacion === "suma") {
      total = parseInt(numberA) + parseInt(numberB)
    }
    else if (operacion === "resta") {
      total = parseInt(numberA) - parseInt(numberB)
    }
    else if (operacion === "multiplicar") {
      total = parseInt(numberA) * parseInt(numberB)
    }
    else if (operacion === "dividir") {
      total = parseInt(numberA) / parseInt(numberB)
    }
  }

  const handleSelect = (ev) => {
    setOperation(ev.target.value);
    console.log(ev.target.value);
    const operacion = ev.target.value;
    console.log(operacion);
    totalOperated()
  }




  return (
    <div>
      <h1>La calculadora:</h1>
      <form>
        <select name="operations" id="operations" onChange={handleSelect}>
          <option value="suma">Suma</option>
          <option value="resta">Resta</option>
          <option value="multiplicar">Multiplicar</option>
          <option value="dividir">Dividir</option>
        </select>
        <label>
          Escribe un número:
          <input type="number" name="numberA" onChange={handleNumberA} />
        </label>
        <label>
          Escribe otro número:
          <input type="number" name="numberB" onChange={handleNumberB} />
        </label>
      </form>
      <p>
        La suma de <strong>{numberA}</strong> y <strong>{numberB}</strong> es
        <strong> {total}</strong>.
      </p>
    </div>
  );
};

export default App;