
import logo from '../images/adalab-logo-155x61.png';
import Link from './Link';
import '../styles/Header.css'

const Header = () => {
    return (
        <header className="header">
            <a href="https://adalab.es/" title="Adalab" target="-blank">
                <img src={logo} title="Adalab" alt="Logo de Adalab" />
            </a>
            <nav>
                <ul className="navigation">
                    <Link text="Contacto" href="https://adalab.es/"
                        title="Contacto"
                        target="-blank"
                        title="Contacto" />
                    <Link text="Blog" href="https://adalab.es/" title="Blog" target="-blank" />
                </ul>
            </nav>
        </header>
    );
};

export default Header;

