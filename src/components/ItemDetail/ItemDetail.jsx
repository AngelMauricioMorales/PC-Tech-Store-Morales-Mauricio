import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useCartContext} from '../../contexts/CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";

function ItemDetail({item}) {
    const [counter, setCounter] = useState(true);

    const {onAddToCart} = useCartContext();

    const addToCart = quantity => {
        onAddToCart({...item, quantity});
        setCounter(false);
    };

    return  <div className="detail">
                <h2 className="detail-title">
                    <Link to="/" className="detail-backward">⫷ <span>Volver</span></Link>
                    <span className="detail-backward--detail">Detalles</span>
                </h2>
                <div className="detail_item-container">
		        	<h3 className="detail_item-title">{item.name}</h3>
                    <figure className="detail_item-figure">
                        <img src={item.image} alt={item.description} />
                        <figcaption className="detail_item-description">{item.description}</figcaption>
                    </figure>
                </div>
                <div className="detail-footer">
                    <div className="detail-footer_price-stock">
                        <p className="detail-footer_price">
		                	<span className="detail-footer-price_text">Precio: </span>
                            <span className="detail-footer-price_number">{parseFloat(item.price).toFixed(2)} u$d</span>
		                </p>	
                        <p className="detail-footer_stock">
                            <span className="detail-footer-stock_text">Stock: </span> 
                            <span className="detail-footer-stock_number">{item.stock === 0 ? "Agotado" : item.stock}</span>
                        </p>
                    </div>
                    {
                        counter   
                        ?   
                        <ItemCount  stock={item.stock} 
                                    initial={1} 
                                    addQuantity={addToCart} />  
                        :   
                        <div className="end-continue-container">
                            <p className="end-continue_text">¡Agregado!😉</p>
                            <div className="end-continue_btns">
                                <Link to="/cart" className="end-continue_links">Finalizar compra</Link>
                                <Link to="/" className="end-continue_links">Seguir comprando</Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
};

export default ItemDetail;
