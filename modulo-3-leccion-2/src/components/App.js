
import '../styles/App.css';

// //EJERCICIO 3.2.1**********************************************************

// function App() {
//   const handleInput = (ev) => {
//     console.log(ev.key);
//   };
//   return (
//     <div className="App">
//       <form>
//         <input type="text" onKeyUp={handleInput} />
//       </form>
//     </div>
//   );
// }

// export default App;


// //EJERCICIO 1 3.2.4**********************************************************

// import { useState } from 'react';

// function App() {
//   let number = 0;
//   const [sum, setSum] = useState(0);
//   const handleSum = () => {
//     number = sum + 1;
//     return setSum(number);
//   }
//   const handleSubtract = () => {
//     number = sum - 1;
//     return setSum(number)
//   }
//   const handleReset = () => {
//     number = 0;
//     return setSum(number);
//   }
//   return (
//     <div className="App">
//       <div>
//         <p>Contador : {sum}</p>
//         <button onClick={handleSum} >Aumentar</button>
//         <button onClick={handleSubtract}>Disminuir</button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
//     </div>
//   );
// }

// export default App;

// //EJERCICIO 2 3.2.4**********************************************************

// import { useState } from 'react';

// function App() {
//   const [mode, setMode] = useState('lightMode');
//   const handleMode = () => {
//     if (mode === 'lightMode') {
//       setMode('darkMode')
//     }
//     else {
//       setMode('lightMode')
//     }
//   }
//   return (
//     <div className="App">
//       <div className={mode}>
//         <button onClick={handleMode}>Des / activar el dark mode</button>
//         <p className="hidden">Tienes activado el dark mode</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae facere aliquid quaerat, odio, blanditiis nihil temporibus, dolorem similique dicta quasi amet assumenda doloribus quos. Itaque architecto ad repellat at non.</p>
//       </div>
//     </div>
//   );
// }

// export default App;

//EJERCICIO 3 3.2.4**********************************************************
import { useState } from 'react';

function App() {
  const [menu, setMenu] = useState();


  return (
    <div className="App">
      <i className="fas fa-bars"></i>
      <div className="container__menu hidden__menu">
        <i className="far fa-times-circle"></i>
      </div>
    </div>
  );
}

export default App;