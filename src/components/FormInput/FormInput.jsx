import './FormInput.css';

const FormInput = (props) => {
    const inputsHandler = (e) => {
        props.cambiarstate({
            ...props.state,
            field: e.target.value,
        });
    };

    const validation = () => {
        if (props.regExp) {
            if (props.regExp.test(props.state.field)) {
                props.cambiarstate({
                ...props.state,
                valid: true,
            });
        } else {
            props.cambiarstate({
                ...props.state,
                valid: false,
            });
          }
        }
        if (props.validarPass) {
            props.validarPass();
        }
    };

    return  <fieldset className="form_inputs-container">
                <label className="form-inputs-container_label" htmlFor={props.id}>{props.label}</label>
                <div className="input-container">
                    <input  className={props.state ? 'valid' : 'invalid'}
                            id={props.id}
                            name={props.name}
                            type={props.type}
                            pattern={props.pattern}
                            placeholder={props.placeholder}
                            value={props.state}
                            onChange={inputsHandler}
                            onKeyUp={validation}
                            onBlur={validation}
                    />
                    <span  className={props.state ? 'show-check-icon' : 'hide-check-icon'}>
                        &#x2714;
                    </span>
                    <span className={props.state ? 'hide-wrong-icon' : 'show-wrong-icon'}
                    >
                        X
                    </span>
                </div>
                <p className={props.state ? 'hide-errorText' : 'show-errorText'}>
                    {props.error}
                </p>
            </fieldset>
};

export default FormInput;
