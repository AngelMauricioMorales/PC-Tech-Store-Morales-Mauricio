import {useState} from 'react';
import {getFirestore, collection, getDocs, addDoc, writeBatch, query, where, documentId} from 'firebase/firestore';
import {useCartContext} from '../../contexts/CartContext/CartContext';
import Form from '../../components/Form/Form';
import swal from 'sweetalert';
import './FormContainer.css';

function FormContainer() {
    const {cartList, clearCart, totalPrice} = useCartContext();

	const [formData, setFormData] = useState({
    	userName: "",
    	userEmail: "",
        userEmailRepeated: "",
    	userPhone: "",
  	});

  	const userEntries = (event) => {
    	event.preventDefault();

    	setFormData({...formData, [event.target.name]: event.target.value});
 	};

    const createOrder = async (e) => {
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
        const queryOrders = collection(dataBase, "orders");
        await addDoc(queryOrders, order)
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
            
        //Actualización del stock.
        const batch = writeBatch(dataBase);
        const queryProducts = collection(dataBase, "items");
        const queryUpdateStock = query(queryProducts, where(documentId(), "in", cartList.map(product => product.id)));
        
        await getDocs(queryUpdateStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                    stock: res.data().stock - cartList.find(product => product.id === res.id).quantity
                } )))
            .finally(() => console.log("Stock actualizado."));
        
        batch.commit();
    };

  	return  <div className="formBackdrop">
                <Form userEntries={userEntries} formData={formData} createOrder={createOrder} />
		    </div>
};

export default FormContainer;
