import {useState} from 'react';
import "./ItemCount.css";

function ItemCount({stock, initial, addQuantity}) {
  	const [quantity, setQuantity] = useState(initial);

  	const sum = () => stock !== 0 && quantity !== stock ? setQuantity(quantity + 1) : null;

  	const substract = () => quantity !== initial ? setQuantity(quantity - 1) : null;

	const addQuantityProduct = () => addQuantity(quantity);

  	return	<div className="itemCountContainer">
      			<button className="itemCountBtns" type="button" onClick={sum}>+</button>
      			<div className="itemCountQuantity">
        			¿Cuántos llevas?: <span className="itemCountQuantityNumber">{quantity}</span>
      			</div>
      			<button className="itemCountBtns" type="button" onClick={substract}>-</button>
      			<button className="itemCountBtns itemCountBtns--addToCart" 
						type="button" 
						onClick={addQuantityProduct}
						disabled={stock !== 0 ? false : true}
				>
        			Agregar al carro
      			</button>
    		</div>
};

export default ItemCount;
