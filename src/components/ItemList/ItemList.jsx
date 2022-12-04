import {memo} from 'react';
import Item from '../Item/Item';

const ItemList = memo(({products}) => products.map(product => <Item key={product.id} product={product} />));

export default ItemList;
