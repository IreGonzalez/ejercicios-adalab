
import { useState } from 'react';
import '../styles/App.scss';

function App() {
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false }
  ]);

  const renderTasks = () => {
    return tasks.map((task, index) => {
      return (<li key={index} id={index} className={task.completed ? 'done' : ''} onClick={handleClick}>{task.task}</li>);
    });
  };

  const handleClick = (ev) => {
    const id = ev.currentTarget.id;
    tasks[id].completed = !tasks[id].completed;
    setTasks([...tasks])
  }

  return (
    <div className="App">
      <h1>Mi lista de tareas</h1>
      <ol>
        {renderTasks()}
      </ol>
    </div>
  );
}

export default App;
