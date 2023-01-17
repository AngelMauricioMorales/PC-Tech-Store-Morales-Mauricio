import {useCartContext} from '../../contexts/CartContext/CartContext';
import "./CartItem.css";

function CartItem({product}) {
    const {removeItem} = useCartContext();

    return  <li key={product.id} className="cartListItem">
                <div className="cartListItemHeader">
                    <h3 className="cartListItemHeaderTitle">{product.name}</h3>
                    <button className="cartListIItemHeaderRemove" onClick={() => removeItem(product.id)}>X</button>
                </div>
                <figure className="cartListItemFigure">
                    <img src={product.image} alt={product.description} />
                </figure>
                <p className="cartListItemQuantity">Cantidad: {product.quantity}</p>
            </li>
};

export default CartItem;
