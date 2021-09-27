

const InputGroupText = (props) => {

    return (
        <div className="input-group-text">
            <label className="label-text" htmlFor="name">
                {props.labelText}
            </label>
            <input
                className="input-text"
                type="text"
                {props.inputName}
                {props.inputId}
                {props.inputPlaceholder}
                {props.inputValue}

            />
        </div>
    );
};

export default InputGroupText;