import {memo} from 'react';
import {Link} from 'react-router-dom';
import "./ProductItem.css";

const ProductItem = memo(({product}) => {
    return <li className="itemListProduct">
                <Link to={`/detail/${product.id}`}  className="itemListProductLink">Ver detalles</Link>
                <div className="card">
                    <h2 className="cardTitle">{product.name}</h2>
                    <figure className="cardImg">
                        <img src={product.image} alt={product.description} />                                                                                    
                    </figure> 	
                    <p className="cardPrice">
                        Precio: <span className="cardMoney">{parseFloat(product.price).toFixed(2)}u$d</span>
                    </p>	
                </div>
            </li>
});

export default ProductItem;