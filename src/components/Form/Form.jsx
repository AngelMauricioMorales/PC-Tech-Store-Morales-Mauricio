import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import "./Form.css";
import FormInput from '../FormInput/FormInput';

function Form({userEntries, formData, createOrder}) {
	const [switchBoolean, setSwitchBoolean] = useState(true);

	const userData = formData.userPhone !== "" && 
					 formData.userName !== "" && 
					 formData.userEmail !== "" && 
					 formData.userEmailRepeated === formData.userEmail;

	useEffect(() => userData ? setSwitchBoolean(false) : setSwitchBoolean(true), [userData]); 

  	return 	<form onSubmit={Form} className="form">
				<h2 className="form_title">Completa el formulario</h2>
				<FormInput	label="Nombre"
							id="userName"
    		  		  		name="userName"
    		  		  		type="text"
							pattern="/^[a-zA-ZÀ-ÿ\s]{3,20}$/"
    		  		  		placeholder="Ej: Fulanito Mengano"
    		  		  		onChange={userEntries}
    		  		  		value={formData.userName}
							error="El nombre debe contener de 3 a 20 caracteres."
							state={formData.userName}
    		  		  		required
							autoFocus
				/>
				<FormInput	label="Email"
							id="userEmail"
    		  		  		name="userEmail"
    		  		  		type="email"
							pattern="/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/"
    		  		  		placeholder="Ej: user_email@myemail.com"
    		  		  		onChange={userEntries}
    		  		  		value={formData.userEmail}
							error="El email no es válido"
    		    			required
				/>
				<FormInput	label="Repita el email"
							id="userEmailRepeated"
    		  		  		name="userEmailRepeated"
    		  		  		type="email"
							pattern="/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/"
    		  		  		placeholder="Ej: user_email@myemail.com"
    		  		  		onChange={userEntries}
    		  		  		value={formData.userEmailRepeated}
							error="Ambos correos deben coincidir."
    		    			required
				/>
				<FormInput	label="Teléfono"
							id="userPhone"
    		  		  		name="userPhone"
    		  		  		type="tel"
							pattern="/^\d{9}$/"
    		  		  		placeholder="Ej: 1123456789"
    		  		  		onChange={userEntries}
    		  		  		value={formData.userPhone}
							error="El teléfono debe contener diez números."
							maxLength="10"
							minLength="10"
    		    			required
				/>
				<fieldset className="form_inputs-container--footer">
					<Link to="/cart" className="form_inputs-container--footer_cancel-link">Cancelar</Link>
    		  		<button className="form_inputs-container--footer_buy-btn" 
							type="submit" 
							onClick={createOrder} 
							disabled={switchBoolean}
					>	
					<Link to="/cart" className="form_inputs-container--footer_buy-link">Realizar compra</Link>
					</button>
				</fieldset>
    		</form>
};

export default Form;
