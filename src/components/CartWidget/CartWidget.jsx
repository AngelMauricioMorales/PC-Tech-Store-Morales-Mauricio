import cartIcon from './images/cart-icon.png';
import {useCartContext} from '../../contexts/CartContext/CartContext';
import './CartWidget.css';
import { Link } from 'react-router-dom';

function CartWidget() {
    const {amountQuantity} = useCartContext();

    return  <div className="cart-widget-container">
                <Link to="/cart" className="cart-widget_link">
                    <img className="cart-widget_img" src={cartIcon} alt="Icono del carrito" />
                    <output className="cart-widget_number">{amountQuantity() !== 0 && amountQuantity()}</output>
                </Link>
            </div>
};

export default CartWidget;
