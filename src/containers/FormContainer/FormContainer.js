import {useState} from 'react';
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import {useCartContext} from '../../contexts/CartContext/CartContext';
import Form from '../../components/Form/Form';
import swal from 'sweetalert';
import './FormContainer.css';

function FormContainer() {
    const {cartList, clearCart, totalPrice} = useCartContext();

	const [formData, setFormData] = useState({
    	userName: "",
        userEmailRepeated: "",
    	userEmail: "",
    	userPhone: ""
  	});

  	const inputsHandler = (event) => {
    	event.preventDefault();
    	setFormData({...formData, [event.target.name]: event.target.value});
 	};

    const createOrder = (e) => {
    	e.preventDefault();

        let order = {};

        order.buyer = formData;
        order.totalPrice = totalPrice();
        order.items = cartList.map(product => ({
            id: product.id, 
            name: product.name,
            quantity: product.quantity, 
            price: product.price
        }));

        const dataBase = getFirestore();
        const queryCollection = collection(dataBase, "orders");
        addDoc(queryCollection, order)
            .then(order => {
                const orderID = `Este es tu código de seguimiento de la compra: ${order.id}`;
                swal({
                    title: "¡Listo!",
                    text: orderID,
                    icon: "success",
                  });   
            })
            .catch(error => console.log(error))
            .finally(() => clearCart()); 
    };

  	return  <div className={"formContainer"}>
                <Form inputsHandler={inputsHandler} formData={formData} createOrder={createOrder} />
		    </div>
};

export default FormContainer;
