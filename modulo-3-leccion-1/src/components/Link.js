
import '../styles/Link.css';

const Link = (props) => {

    const boolean = ('openInNewTab' ? '-blank' : '')
    return (
        <li className="link">
            <a
                href={props.href}
                title={props.title}
                target={boolean}
            >
                {props.text}
            </a>
        </li>
    );
};

export default Link;
