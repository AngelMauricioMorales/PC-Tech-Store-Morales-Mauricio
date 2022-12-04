import {useCartContext} from '../../contexts/CartContext/CartContext';

function CartItem({product}) {
    const {removeItem} = useCartContext();

    return  <li key={product.id} className="cartListItem">
                <div className="cartListBody">
                    <h3 className="cartListItemName">{product.name}</h3>
                    <button className="cartListItemRemoveBtn" onClick={() => removeItem(product.id)}>X</button>
                </div>
                <figure className="cartListItemFigure">
                    <img src={product.image} alt={product.description} />
                </figure>
                <p className="cartListItemQuantity">Cantidad: {product.quantity}</p>
            </li>
};

export default CartItem;
