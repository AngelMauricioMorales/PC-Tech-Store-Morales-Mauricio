import {useCartContext} from '../../contexts/CartContext/CartContext';
import "./CartItem.css";

function CartItem({product}) {
    const {removeItem} = useCartContext();

    return  <li key={product.id} className="cart-list-item">
                <div className="cart-list-item_header">
                    <h3 className="cart-list-item-header_title">{product.name}</h3>
                    <button className="cart-list-item-header_removeBtn" onClick={() => removeItem(product.id)}>🗑️</button>
                </div>
                <figure className="cart-list-item_figure">
                    <img src={product.image} alt={product.description} />
                    <figcaption className="cart-list-item-figure_description">{product.description}</figcaption>
                </figure>
                <p className="cart-list-item_quantity">Cantidad: {product.quantity}</p>
            </li>
};

export default CartItem;
