import {Link} from 'react-router-dom';
import {useCartContext} from '../../contexts/CartContext/CartContext';
import CartList from '../../components/CartList/CartList';
import './Cart.css';

function Cart() {
    const {cartList, clearCart, totalPrice} = useCartContext();

    return <>
        {   
            cartList.length === 0   
            ?
            <div className="emptyCart">
                <h2 className="emptyCartTitle">El carrito está vacío.</h2>
                <Link to="/" className="emptyCartbackToBuyLink">Ir a comprar</Link>
            </div>   
            :   
            <div className="cartListContainer">
                <ul className="cartList">
                    <CartList cartList={cartList} />
                </ul>
                <div className="cartFooter">
                    <p className="cartFooterPrice">
                        Total: <span className="cartFooterTotalPrice">{parseFloat(totalPrice()).toFixed(2)}u$d</span>
                    </p>
                    <div className="cartFooterBtns">
                        <button className="cartFooterClearBtn" onClick={clearCart}>Vaciar carrito</button>
                        <Link to="/form" className="cartFooterContinueLink">Continuar</Link>
                    </div>
                </div>
            </div>
        }
    </>
};

export default Cart;
