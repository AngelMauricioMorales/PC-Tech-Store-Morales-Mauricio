import {memo} from 'react';
import {Link} from 'react-router-dom';
import "./Item.css";

const Item = memo(({product}) => {
    return <li className="itemListProduct">
                <div className="itemListProductHeader">
                    <h2 className="itemListProductTitle">{product.name}</h2>
                    <Link to={`/detail/${product.id}`} className="itemListProductImg">
                        <img src={product.image} alt={product.description} />                                                                                    
                    </Link> 	
                </div>
                <div className="itemListFooter">
                    <p className="itemListFooterPrice">
                        Precio: <span className="itemListFooterMoney">{parseFloat(product.price).toFixed(2)}u$d</span>
                    </p>	
                </div>
            </li>
});

export default Item;
