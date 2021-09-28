

const InputGroupText = (props) => {
    const handleEvent = (ev) => {
        props.handleChange(ev.target.value)
    }
    return (
        <div className="input-group-text">
            <label className="label-text" htmlFor="name">
                {props.labelText}
            </label>
            <input
                className="input-text"
                type="text"
                name={props.inputName}
                id={props.inputId}
                placeholder={props.inputPlaceholder}
                value={props.inputValue}
                onChange={handleEvent}
            />
        </div>
    );
};

export default InputGroupText;