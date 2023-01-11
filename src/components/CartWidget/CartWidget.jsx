import cartIcon from './images/cart-icon.png';
import {useCartContext} from '../../contexts/CartContext/CartContext';
import './CartWidget.css';
import { Link } from 'react-router-dom';

function CartWidget() {
    const {amountQuantity} = useCartContext();

    return  <Link to="/cart" className="cartWidgetLink">
                <img className="cartWidgetImg" src={cartIcon} alt="Icono del carrito" />
                <output className="cartWidgetNumber">{amountQuantity() !== 0 && amountQuantity()}</output>
            </Link>
};

export default CartWidget;
