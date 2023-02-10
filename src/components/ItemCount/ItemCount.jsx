import {useState} from 'react';
import "./ItemCount.css";

function ItemCount({stock, initial, addQuantity}) {
  	const [quantity, setQuantity] = useState(initial);

  	const sum = () => stock !== 0 && quantity !== stock ? setQuantity(quantity + 1) : null;

  	const substract = () => quantity !== initial ? setQuantity(quantity - 1) : null;

	const addQuantityProduct = () => addQuantity(quantity);

  	return	<div className="item-count-container">
      			<button className="item-count_btns" 
						type="button" 
						onClick={sum} 
						disabled={stock !== 0 ? false : true}
				>
					+
				</button>
      			<div className="item-count_quantity">
        			¿Cuantos llevas?: <span className="item-count-quantity_number">{quantity}</span>
      			</div>
      			<button className="item-count_btns" 
						type="button" 
						onClick={substract} 
						disabled={stock !== 0 ? false : true}
				>
					-
				</button>
      			<button className="item-count_btns item-count_btns--add" 
						type="button" 
						onClick={addQuantityProduct}
						disabled={stock !== 0 ? false : true}
				>
        			Agregar al carro
      			</button>
    		</div>
};

export default ItemCount;
