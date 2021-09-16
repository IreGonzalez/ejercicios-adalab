
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="https://adalab.es/" title="Adalab" target="-blank">
          <img
            className="logo"
            src="../images/adalab-logo-155x61.png"
            alt="Adalab"
            title="Adalab"
          />
        </a>
        <nav>
          <ul className="navigation">
            <li className="link">
              <a
                href="https://adalab.es/"
                title="Contacto"
                target="-blank"
                title="Contacto"
              >
                Contacto
              </a>
            </li>
            <li className="link">
              <a href="https://adalab.es/" title="Blog" target="-blank" title="Blog">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <h1 className="slogan">Creando diversidad digital</h1>
      </main>
    </div>
  );
}

export default App;
