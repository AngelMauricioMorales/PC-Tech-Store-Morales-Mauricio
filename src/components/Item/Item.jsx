import {memo} from 'react';
import {Link} from 'react-router-dom';
import "./Item.css";

const Item = memo(({product}) => {
    return <li className="itemListProduct">
                <div className="itemListProductHeader">
                    <h2 className="itemListProductTitle">{product.name}</h2>
                    <figure className="itemListProductFigure">
                        <img src={product.image} alt={product.description} />
                    </figure>
                </div>
                <div className="itemListFooter">
                    <p className="itemListFooterPrice">
                        Precio: <span className="itemListFooterMoney">{parseFloat(product.price).toFixed(2)}u$d</span>
                    </p>	
                    <Link to={`/detail/${product.id}`} className="itemListFooterInfoLink">
                        <button className="itemListFooterInfoBtn" type="button">+ INFO</button>                                                                                                                  
                    </Link> 	
                </div>
            </li>
});

export default Item;
