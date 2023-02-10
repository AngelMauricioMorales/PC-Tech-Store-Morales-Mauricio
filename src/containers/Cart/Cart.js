import CartList from '../../components/CartList/CartList';
import {useCartContext} from '../../contexts/CartContext/CartContext';
import {Link} from 'react-router-dom';
import './Cart.css';

function Cart() {
    const {cartList, clearCart, totalPrice} = useCartContext();

    return <>
        {   
            cartList.length === 0   
            ?
            <div className="empty-cart">
                <h2 className="empty-cart_title">El carrito esta vacio.</h2>
                <Link to="/" className="empty-cart_back">Ir a comprar</Link>
            </div>   
            :   
            <div className="cart-list-header">
                <h2 className="cart-list-header_title">
                    <Link to="/" className="cart-list-header_backward">⫷ Inicio</Link>
                    Carrito
                </h2>
                <ul className="cart-list">
                    <CartList cartList={cartList} />
                </ul>
                <div className="cart-footer">
                    <p className="cart-footer_price">
                        Total: <span className="cart-footer-price_number">{parseFloat(totalPrice()).toFixed(2)} u$d</span>
                    </p>
                    <div className="cart-footer-btns">
                        <button className="cart-footer-btns_clear" onClick={clearCart}>Vaciar carrito</button>
                        <Link to="/form" className="cart-footer-btns_continue">Continuar</Link>
                    </div>
                </div>
            </div>
        }
    </>
};

export default Cart;
