import {memo} from 'react';
import {Link} from 'react-router-dom';

const Item = memo(({product}) => {
    return <li className="itemListProduct">
                <div className="itemListProductContainer">
                    <h2>{product.name}</h2>
                    <figure className="itemListProductFigure">
                        <img src={product.image} alt={product.description} />
                    </figure>
                </div>
                <div className="itemListFooter">
                    <p className="itemListPrice">
                        Precio: <span className="itemListMoney">{parseFloat(product.price).toFixed(2)}u$d</span>
                    </p>	
                    <Link to={`/detail/${product.id}`}>
                        <button type="button">
                            + INFO
                        </button>                                                                                                                  
                    </Link> 	
                </div>
            </li>
});

export default Item;
