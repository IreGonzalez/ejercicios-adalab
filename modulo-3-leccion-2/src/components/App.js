
import '../styles/App.css';

function App() {
  const handleInput = (ev) => {
    console.log(ev.key);
  };
  return (
    <div className="App">
      <form>
        <input type="text" onKeyUp={handleInput} />
      </form>
    </div>
  );
}

export default App;
