import {memo} from 'react';
import ProductItem from '../ProductItem/ProductItem';

const ProductsItemList = memo(({products}) => products.map(product => <ProductItem key={product.id} product={product} />));

export default ProductsItemList;
