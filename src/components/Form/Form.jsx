import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import "./Form.css";

function Form({inputsHandler, formData, createOrder}) {
	const [switchBoolean, setswitchBoolean] = useState(true);

	const userData = formData.userPhone !== "" && 
					 formData.userName !== "" && 
					 formData.userEmail !== "" && 
					 formData.userEmailRepeated === formData.userEmail;

	useEffect(() => userData ? setswitchBoolean(false) : setswitchBoolean(true), [userData]);

  	return 	<form onSubmit={Form} className="form">
				<h2 className="form_title">Completa el formulario</h2>
				<fieldset className="form_inputs-container">
    		  		<label 	htmlFor="userName">Nombre</label>
    		  		<input	id="userName"
    		  		  		name="userName"
    		  		  		type="text"
							pattern="\w[a-zA-z]+\s\w[a-zA-Z]+"
    		  		  		placeholder="Ej: Fulanito Mengano"
    		  		  		onChange={inputsHandler}
    		  		  		value={formData.userName}
    		  		  		required
							autoFocus
    		  		/>
				</fieldset>
				<fieldset className="form_inputs-container">
    		  		<label 	htmlFor="userEmail">Email</label>
    		  		<input	id="userEmail"
    		    			name="userEmail"
    		    			type="email"
    		    			pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z]+"
    		    			placeholder="Ej: user_email@myemail.com"
    		    			onChange={inputsHandler}
    		    			value={formData.userEmail}
    		    			required
    		  		/>
				</fieldset>
				<fieldset className="form_inputs-container">
					<label 	htmlFor="userEmailRepeated">Repita el email</label>
    		  		<input	id="userEmailRepeated"
    		    			name="userEmailRepeated"
    		    			type="email"
    		    			pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z]+"
    		    			onChange={inputsHandler}
    		    			value={formData.userEmailRepeated}
    		    			required
    		  		/>
				</fieldset>
				<fieldset className="form_inputs-container">
    		  		<label 	htmlFor="userPhone">Teléfono</label>
    		  		<input	id="userPhone"
    		    			name="userPhone"
    		    			type="tel"
							pattern="\d*(11|15)[0-9]+"
    		    			placeholder="Ej: 1123456789"
							maxLength="10"
							minLength="10"
    		    			onChange={inputsHandler}
    		    			value={formData.userPhone}
    		    			required
    		  		/>
				</fieldset>
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
