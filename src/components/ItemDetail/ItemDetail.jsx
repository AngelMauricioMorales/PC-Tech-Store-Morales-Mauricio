import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useCartContext} from '../../contexts/CartContext/CartContext';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({item}) {
    const [counter, setCounter] = useState(true);

    const {onAddToCart} = useCartContext();

    const addToCart = quantity => {
        onAddToCart({...item, quantity});
        setCounter(false);
    };

    return (
        <>
            <div className="detailContainer">
                <div className="detailItemContainer">
		        	<h2 className="detailItemTitle">{item.name}</h2>
                    <figure className="detailItemFigure">
                        <img src={item.image} alt={item.description} />
                        <figcaption className="detailItemDescription">{item.description}</figcaption>
                    </figure>
                </div>
                <div className="detailFooter">
                    <p className="detailFooterPrice">
		            	<span className="detailFooterPriceSpan">Precio:</span>
                        <span className="detailFooterPriceNumber">{parseFloat(item.price).toFixed(2)}u$d</span>
		            </p>	
                    <p className="detailFooterStock">
                        <span className="detailFooterStockSpan">Stock disponible:</span> 
                        <span className="detailFooterStockNumber">{item.stock === 0 ? "Agotado" : item.stock}</span>
                    </p>
                    <div className="detailCountContainer">
                        {
                            counter   
                            ?   
                            <ItemCount  stock={item.stock} 
                                        initial={1} 
                                        addQuantity={addToCart} />  
                            :   
                            <div className="endOrContinueContainer">
                                <Link to="/cart" className="endOrContinueLinks">Finalizar compra</Link>
                                <Link to="/" className="endOrContinueLinks">Seguir Comprando</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
