import cartIcon from './images/cart-icon.png';
import './CartWidget.css';

function CartWidget() {
    return  <figure to="/cart" className="CartWidgetLink">
                <img src={cartIcon} alt="Icono del carrito" />
            </figure>
};

export default CartWidget;
