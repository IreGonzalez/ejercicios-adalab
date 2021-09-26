
import '../styles/Link.css';

const Link = (props) => {
    return (
        <li className="link">
            <a
                href={props.href}
                title={props.title}
                target={props.target}
            >
                {props.text}
            </a>
        </li>
    );
};

export default Link;
