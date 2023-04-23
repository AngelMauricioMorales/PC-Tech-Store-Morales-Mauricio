import {memo} from 'react';
import {Link} from 'react-router-dom';
import "./ProductItem.css";

const ProductItem = memo(({product}) => {
    return <li className="items-list_product">
                <Link to={`/detail/${product.id}`}  className="items-list-product_card">
                    <h2 className="items-list-product-card_title">{product.name}</h2>
                    <figure className="items-list-product-card_img">
                        <img src={product.image} alt={product.description} />                                                                                    
                    </figure> 	
                    <p className="items-list-product-card_price">
                        {parseFloat(product.price).toFixed(2)} u$d
                    </p>	    
                </Link>
            </li>
});

export default ProductItem;
